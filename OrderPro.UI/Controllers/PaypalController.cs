using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OrderPro.UI.App_Code;
using PayPal.Api;
using OrderPro.Model;
using OrderPro.UI.Models;
using System.Data;
using System.IO;



namespace OrderPro.UI.Controllers
{
    //http://www.codeproject.com/Articles/870870/Using-Paypal-Rest-API-with-ASP-NET-MVC
    //http://code.tutsplus.com/articles/paypal-integration-part-2-paypal-rest-api--cms-22917

    public class PaypalController : Controller
    {

        private EFDbContext db = new EFDbContext();
        // GET: /Paypal/

        private variable _var = new variable();

        public ActionResult Index()
        {
            return View();
        }

       

        /// <summary>
        /// Execute payment function used in the controller PaymentWithPaypal using a global variable named payment.
        /// It is basically using the function Execute of the Payment class of Paypal SDK.
        /// </summary>
        private PayPal.Api.Payment payment;
        private Payment ExecutePayment(APIContext apiContext, string payerId, string paymentId)
        {
            var paymentExecution = new PaymentExecution() { payer_id = payerId };
            this.payment = new Payment() { id = paymentId };
            return this.payment.Execute(apiContext, paymentExecution);
          
        }

        
        [HttpGet]
        public ActionResult PaymentWithPaypal()
        {
            try
            {
              
                string InvoiceNo = TempData["InvoiceNo"] as string;          
                List<GetPaymentInfo_Result> payment = TempData["PaymentModel"] as List<GetPaymentInfo_Result>;
                OrderPro.Model.Invoice Createdinvoice = TempData["InvoiceModel"] as OrderPro.Model.Invoice;
                string UserEmail = TempData["UserEmail"] as string;
                string ContactPerson = TempData["ContactPerson"] as string;

                //To do check all InvoiceNo and payment if any one null return Operation Time Out
                if (InvoiceNo != null && !string.IsNullOrEmpty(InvoiceNo) && UserEmail != null && !string.IsNullOrEmpty(UserEmail) && payment != null && Createdinvoice != null)
                {
                    //getting the apiContext as earlier
                    APIContext apiContext = PaypalConfiguration.GetAPIContext();

                    try
                    {
                        string payerId = Request.Params["PayerID"];

                        if (string.IsNullOrEmpty(payerId))
                        {
                            //this section will be executed first because PayerID doesn't exist
                            //it is returned by the create function call of the payment class
                            // Creating a payment
                            // baseURL is the url on which paypal sendsback the data.
                            // So we have provided URL of this controller only

                            string baseURI = Request.Url.Scheme + "://" + Request.Url.Authority + "/Paypal/PaymentWithPayPal?";
                                //"http://app.ingenstudio.com/Paypal/PaymentWithPayPal?";  //for server

                                                        
                            //guid we are generating for storing the paymentID received in session
                            //after calling the create function and it is used in the payment execution

                            var guid = Convert.ToString((new Random()).Next(100000));

                            //CreatePayment function gives us the payment approval url
                            //on which payer is redirected for paypal acccount payment
                            //var createdPayment = this.CreatePayment(apiContext, baseURI + "guid=" + guid, AddonViewmodelList, serviceName,ServiceRate, ComplexityRate, TotalAddOnsRate, Discount, DeliveryCharge, netPayment,InvoiceNo);

                            var createdPayment = this.CreatePayment(apiContext, baseURI + "guid=" + guid, payment, InvoiceNo);

                            //get links returned from paypal in response to Create function call

                            var links = createdPayment.links.GetEnumerator();

                            string paypalRedirectUrl = null;

                            while (links.MoveNext())
                            {
                                Links lnk = links.Current;

                                if (lnk.rel.ToLower().Trim().Equals("approval_url"))
                                {
                                    //saving the payapalredirect URL to which user will be redirected for payment
                                    paypalRedirectUrl = lnk.href;
                                }
                            }

                            //saving the paymentID in the key guid
                            Session.Add(guid, createdPayment.id);

                            return Redirect(paypalRedirectUrl);
                        }
                        else
                        {
                            // This section is executed when we have received all the payments parameters
                            // from the previous call to the function Create
                            // Executing a payment

                            var guid = Request.Params["guid"];
                            var executedPayment = ExecutePayment(apiContext, payerId, Session[guid] as string);

                            //transaction id, its will be under transactions > related_resources > sale > id 
                            _var.TransactionId = executedPayment.transactions.SingleOrDefault().related_resources[0].sale.id.ToString();

                            if (executedPayment.state.ToLower() != "approved")
                            {
                                ViewBag.error = ConstantMessage.CONST_PaypalTransactionFailedMsg;
                                return View("Error");
                            }
                            else
                            {
                                //To do update Invoice status Paid
                                try
                                {
                                    OrderPro.Model.Invoice EditInvoice = new Model.Invoice();
                                    EditInvoice = Createdinvoice;
                                    EditInvoice.Transaction_Ref = _var.TransactionId;
                                    EditInvoice.TotalAmount = Convert.ToDouble(payment.Where(t => t.Header == ConstantMessage.CONST_Header_GrandTotal).SingleOrDefault().Amount.Value);
                                    EditInvoice.DiscountAmount = Convert.ToDouble(payment.Where(t => t.Header == ConstantMessage.CONST_Header_Discount).SingleOrDefault().Amount.Value);
                                    EditInvoice.NetAmount = Convert.ToDouble(payment.Where(t => t.Header == ConstantMessage.CONST_Header_NetAmount).SingleOrDefault().Amount.Value);
                                    EditInvoice.Status = ConstantMessage.CONST_StatusPaid;

                                    db.Entry(EditInvoice).State = EntityState.Modified;
                                    db.SaveChanges();

                                    //Send Emails By Using Email Templates in ASP.NET MVC using C#
                                    //var list =UserEmail.Split('@');
                                    //_var.UserName = list[0].ToString();

                                    string MailBody = OrderTemplate(ContactPerson,EditInvoice.InvoiceNo,_var.TransactionId);
                                    bool isMailSend = MailSender.SendingMail(ConstantMessage.IngenSalesMailAddress, ConstantMessage.IngenSalesMailAddressPassword,UserEmail, ConstantMessage.IngenTransactionSubject+"["+EditInvoice.InvoiceNo+"]", MailBody, ConstantMessage.IngenSalesMailAddress);
                                    
                                } 
                                catch (Exception)
                                {
                                    //To do if error send mail to support with error and whose user make this transaction
                                  //  bool SendSupport = MailSender.SendingMail(UserEmail, "Transaction UnSuccessFull for user" + UserEmail, "Transaction UnSuccessful.", "support@ingenstudio.com");

                                }
                                ViewBag.TransactionId = _var.TransactionId;

                                ViewBag.OrderNumber = InvoiceNo;

                                return View("SuccessView");
                            }

                        }
                    }
                    catch (PayPal.PaymentsException ex)
                    {
                        string msg = ex.Message;
                        ViewBag.error = msg;
                    }
                    catch (PayPal.PayPalException ex)
                    {
                        string msg = ex.Message;
                        ViewBag.error = msg;
                    }
                }
                else
                {
                    ViewBag.error = "Operation Time Out";
                }
            }
            catch (Exception ex)
            {
                ViewBag.error = ex.Message;               
            }

            return View("Error");
        }


        #region MailTemplateForMakeTransaction

        /// <summary>
        /// http://www.codeproject.com/Articles/874218/Send-Emails-By-Using-Email-Templates-in-ASP-NET-MV
        /// orderpro.ingenstudio.com
        /// </summary>

        public string OrderTemplate(string username, string OrderNo,string transactionId)
        {

            string message = "Thanks for the payment of amount 8.99 USD for the Order No " + OrderNo+".";
            message += "<br>Your Transaction Reference is: "+transactionId+".";
            message+="<br>If you have any questions regarding your order, please reply to sales@ingenstudio.com ";
            message += "<br><br>";
            message += "Best regards,";
            message += "<br><br>";
            message += "Ingen Studio<br>";
            message+="www.ingenstudio.com";

            string body = "";
            try
            {
                //Read template file from the App_Data folder
                using (var sr = new StreamReader(Path.Combine(Server.MapPath("~/Templates/IngenTemplate.html"))))
                {
                    body = sr.ReadToEnd();
                };

                string messageBody = string.Format(body, username, OrderNo);
                return messageBody;
            }
            catch (Exception)
            {
            }

            return body;
        }
        #endregion
           

        /// <summary>
        /// CreatePayment function is used in the controller PaymentWithPaypal for making the payment. 
        /// Basically, in this function, we are adding the Items for which the payment is being created.
        /// List<AddOnsViewModel> model, string ServiceName, string ServiceRate, string ComplexityRate, string AddonsRate, string Discount, string DeliveryCharge, string NetPayment, string InvoiceNo
        /// </summary>

        private Payment CreatePayment(APIContext apiContext, string redirectUrl, List<GetPaymentInfo_Result> Payementmodel, string InvoiceNo)
        {
            try
            {
                //similar to credit card create itemlist and add item objects to it
                var itemList = new ItemList() { items = new List<Item>() };                                            
                var transactionList = new List<Transaction>();
                decimal? NetAmount = Payementmodel.Where(t => t.Header == ConstantMessage.CONST_Header_NetAmount).Take(1).SingleOrDefault().Amount;
                string Amount = Convert.ToString(Math.Round(NetAmount.Value,2));
                 
                itemList.items.Add(new Item()
                 {
                     name = ConstantMessage.CONST_Header_NetAmount.ToString(),
                     currency = "USD",
                     price = Amount,
                     quantity = "1",
                     description="Amount including Service,Complexity,AddOns,Delivery and Discount if any.",
                     sku="001"
                 });                  
               
                var payer = new Payer() { payment_method = "paypal" };

                // Configure Redirect Urls here with RedirectUrls object
                var redirUrls = new RedirectUrls()
                {
                    cancel_url = redirectUrl,
                    return_url = redirectUrl
                };

                var amount = new Amount()
                {
                currency = "USD",
                total =Amount, // Total must be equal to sum of shipping, tax and subtotal.
                //details = details
                };

                transactionList.Add(new Transaction()
                   {
                       description = "Thank you for Order.",
                       invoice_number = InvoiceNo,
                       amount = amount,
                       item_list = itemList
                   });               

                this.payment = new Payment()
                {
                    intent = "sale",
                    payer = payer,
                    transactions = transactionList,
                    redirect_urls = redirUrls
                };

                // Create a payment using a APIContext
                return this.payment.Create(apiContext);
            }
            catch (Exception ex)
            {
                throw ex;
               
            }

        }

    }
}
