using System;
using System.Collections.Generic;
using System.Linq;
using System.Transactions;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using DotNetOpenAuth.AspNet;
using Microsoft.Web.WebPages.OAuth;
using WebMatrix.WebData;

using OrderPro.Model;
using OrderPro.UI.Models;
using OrderPro.UI.App_Code;
using System.Xml;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Net;
using Newtonsoft.Json;
using Encription;
using System.Web.Script.Serialization;



//Web Security Tutorial
//http://www.c-sharpcorner.com/UploadFile/0ef46a/websecurity-in-mvc/

namespace OrderPro.UI.Controllers
{
    [Authorize]
    //[CustomActionFilter]
    //[InitializeSimpleMembership]
    public class AccountController : Controller
    {
        private variable var = new variable();
        private EFDbContext db = new EFDbContext();

        /// <summary>
        /// http://stackoverflow.com/questions/27666762/asp-net-mvc-recaptcha-jquery-ajax-issue
        /// </summary>
      
        [AllowAnonymous]
        public ActionResult ContactUs(string name,string email,string message)
        {
            var response = Request["g-recaptcha-response"];
            //secret that was generated in key value pair
            const string secret = "6LfyciITAAAAADTUhd6DGhCIvhlO4mBX7wCiQOy9";

            var client = new WebClient();
            var reply =
                client.DownloadString(
                    string.Format("https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}", secret, response));

            var captchaResponse = JsonConvert.DeserializeObject<CaptchaResponse>(reply);

            //when response is false check for the error message
            if (!captchaResponse.Success)
            {
                if (captchaResponse.ErrorCodes.Count <= 0) return View();

                var error = captchaResponse.ErrorCodes[0].ToLower();
                switch (error)
                {
                    case ("missing-input-secret"):
                        ViewBag.Message = "The secret parameter is missing.";
                        break;
                    case ("invalid-input-secret"):
                        ViewBag.Message = "The secret parameter is invalid or malformed.";
                        break;

                    case ("missing-input-response"):
                        ViewBag.Message = "The response parameter is missing.";
                        break;
                    case ("invalid-input-response"):
                        ViewBag.Message = "The response parameter is invalid or malformed.";
                        break;

                    default:
                        ViewBag.Message = "Error occured. Please try again";
                        break;
                }
            }
            else
            {
                ViewBag.Message = "Valid";
            }

            return View();
            ////send the mail and give a feedback by json
            //string ConfirmMessage="";
            //return Json(new {ConfirmMessage},JsonRequestBehavior.AllowGet);
        }

        [AllowAnonymous]
        public ActionResult Exception(string errorMsg)
        {
            ViewBag.error = errorMsg;
            return View("Error");
        
        }

        [AllowAnonymous]
        public ActionResult Confirmation(int? Ref)
        {

            ViewBag.Message = ConstantMessage.CONST_ConfirmationAbnormalCode; //"0"
            if (Ref != null)
            {              
                try
                {
                    Customer customer = db.Customers.Where(t => t.UserId == Ref).SingleOrDefault();
                    if (customer != null)
                    {
                        if (customer.Status == ConstantMessage.CONST_StatusPending)
                        {
                            
                            customer.Status = ConstantMessage.CONST_Active;
                            db.Entry(customer).State = EntityState.Modified;
                            db.SaveChanges();
                            ViewBag.Message = ConstantMessage.COST_ConfirmationActiveCode; // "1"
                        }
                        else if (customer.Status == ConstantMessage.CONST_Active)
                        {
                            //already active account please sign in
                            ViewBag.Message = ConstantMessage.CONST_ConfirmationAlreadyActiveCode; // "5"
                        }
                        else
                        {
                            ViewBag.Message = ConstantMessage.CONST_ConfirmationSuspendCode; // "2" 
                            ViewBag.status = customer.Status;
                        }

                    }
                    else
                    {
                        ViewBag.Message = ConstantMessage.CONST_ConfirmationUserNotFoundCode; // "3"
                    }
                }
                catch (Exception ex)
                {
                    ViewBag.Message = ConstantMessage.CONST_ConfirmationExceptionCode; //
                    ViewBag.ExpMessage = ex.ToString();
                }
            
            }

            return View();
        }

        [AllowAnonymous]
        public ActionResult Index(string fromAjax)
        {

            if (Session["UserId"] != null && Session["AccountType"] != null && Session["paymentType"] != null)
            {
                return RedirectToAction("Index", "Home");
            }


            ViewBag.FromSignIn = "";
            LoginModel model = new LoginModel();
            ViewBag.LoginModel = model;

            if (fromAjax == ConstantMessage.CONST_FromAjaxMsg)
                return PartialView();
            else
                return View();
        }
        //
        // GET: /Account/Login

        [AllowAnonymous]
        public ActionResult Login()  
         {
            ViewBag.FromSignIn = "";           
            return View();
        }


        [HttpPost]
        [AllowAnonymous]
        //[ValidateAntiForgeryToken]
        public ActionResult Login(LoginModel model, string returnUrl)  //, string RememberMe
        {
        
          ViewBag.FromSignIn = "LogIn";
          
           try
             {
                 if (ModelState.IsValid)
                 {

                     //No DataBase Connetion for this Dummy .So below DummySignIn region is added to customiaze FormsAuthentication
                     #region DummySignIn

                     if (model.Email == "rakib@gmail.com" && model.Password == "rakib#123")
                     {
                     HttpResponseBase response;
                     bool result = false;
                     var serializer = new JavaScriptSerializer();
                     string userData = serializer.Serialize(model);
                     FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(1,
                             model.Email,
                             DateTime.Now,
                             DateTime.Now.AddMinutes(30),
                             true,
                             userData,
                             FormsAuthentication.FormsCookiePath);
                     // Encrypt the ticket.
                     string encTicket = FormsAuthentication.Encrypt(ticket);
                     // Create the cookie.
                     Response.Cookies.Add(new HttpCookie(FormsAuthentication.FormsCookieName, encTicket));
                   
                     result = true;
                     return RedirectToAction("Index", "Home");
                     }
                     else
                     {
                          ModelState.AddModelError("", ConstantMessage.CONST_IncorrectUserIdPasswordMsg);
                          return View(model);
                     }
                     #endregion


                     var UserModel = db.Customers.Where(t => t.Email == model.Email).SingleOrDefault();
                     if (UserModel != null)
                     {
                         if (UserModel.Status == ConstantMessage.CONST_Active)
                         {
                             if (WebSecurity.Login(model.Email, model.Password, persistCookie: model.RememberMe))
                             {
                                 ConstantMessage.LoginFromAccount = true;
                                 try
                                 {
                                     FormsAuthentication.SetAuthCookie(model.Email, true);
                                    
                                     UserModel.LastLogin = DateTime.Now;
                                     db.Entry(UserModel).State = EntityState.Modified;
                                     db.SaveChanges();
                                 }
                                 catch (Exception)
                                 {

                                 }

                                 return RedirectToAction("Index", "Home");
                             }
                             else
                             {                               
                                 ModelState.AddModelError("", ConstantMessage.CONST_IncorrectUserIdPasswordMsg);
                             }
                         }
                         else
                         {
                             ViewBag.LoginError = ViewBag.error = ConstantMessage.CONST_UserAccessRestrictionMsg;
                             return View("Error");
                         }                       
                     }
                     else
                     {                       
                         ModelState.AddModelError("", ConstantMessage.CONST_InvalidUserMsg);
                     }
               }            
          }
           catch (Exception ex)
           {
              
               if (ex.Message.Contains(ConstantMessage.CONST_DatabaseInitialize_EXP))
                   ModelState.AddModelError("",ConstantMessage.CONST_DatabaseInitialize_EXP_ReturnMsg);
               else if (ex.Message.Contains(ConstantMessage.CONST_WebSecurityDbInitializeEXP))
                   ModelState.AddModelError("", ConstantMessage.CONST_WebSecurityDbInitializeEXP_ReturnMsg);
               else if(ex.Message.Contains(ConstantMessage.CONST_DBConnectionExp))
                   ModelState.AddModelError("", ConstantMessage.CONST_DBConnectionExp_ReturnMsg);
               else
               ModelState.AddModelError("", ex.Message);
           }            
                   
            return View(model);
        }

       
        // POST: /Account/LogOff
        //[HttpPost]
        //[ValidateAntiForgeryToken]

        [AllowAnonymous]
        [HttpGet]
        public ActionResult LogOff()
        {

            #region CustomFormLogout_WithOut Membership
            // Delete the authentication ticket and sign out.
            FormsAuthentication.SignOut();
            // Clear authentication cookie.
            HttpCookie cookie = new HttpCookie(FormsAuthentication.FormsCookieName, "");
            cookie.Expires = DateTime.Now.AddYears(-1);
            Response.Cookies.Add(cookie);
            return RedirectToAction("Login", "Account");
            #endregion


            #region LogOutWith_Membership
          
                WebSecurity.Logout();
                return RedirectToAction("Login", "Account");
           
            #endregion
        }

               

        [AllowAnonymous]
        public ActionResult Register()
        {
            return View();
        }

        //
        // POST: /Account/Register

        [HttpPost]
        [AllowAnonymous]
        //[ValidateAntiForgeryToken]
        public ActionResult Register(RegisterModel model)
        {
            try
            {
              
                ViewBag.FromSignIn = "Register";
                ViewBag.Regerror = "Registration Failed";

                if (ModelState.IsValid)
                {
                    //  Attempt to register the user
                    //try
                    //{
                        Customer newCustomer = db.Customers.Where(t => t.Email == model.Email).SingleOrDefault();                        
                        
                        if (newCustomer == null)
                        {                        
                           WebSecurity.CreateUserAndAccount(model.Email, model.Password);
                          
                            //Edit others Info in customer table
                            newCustomer = new Customer();
                            newCustomer = db.Customers.Where(t => t.Email == model.Email).SingleOrDefault();
                            newCustomer.Company = model.CompanyName;  
                            
                            //Auto generated first 4 digit UperCase of the Company Name. Must be Unique
                            newCustomer.Code = GenarateClientCode(model.CompanyName);
                              
                            newCustomer.ContactPerson = model.Username;

                            //encrypt given passwoard with my Encryption method
                            newCustomer.Password =Encription.EnDecryption.Encrypt(model.Password);
                            
                            newCustomer.AccountCatagory = ConstantMessage.CONST_AccountCatagoryRegular;
                            newCustomer.AccountType = ConstantMessage.CONST_User_AccountTypePrepaidMsg;
                            newCustomer.Email = model.Email;
                          
                            newCustomer.Country = model.CountryName;
                            newCustomer.CountryCode = model.CountryCode;
                            newCustomer.LastLogin = DateTime.Now;
                            newCustomer.LastOrdered = null;
                            newCustomer.PaymentType = ConstantMessage.CONST_PaymentType;
                            newCustomer.Currency = ConstantMessage.CONST_CurrencyUSD;
                            newCustomer.AccountCatagory = ConstantMessage.CONST_AccountCatagoryRegular;
                            newCustomer.ContactNumber = model.ContactNumber;
                            newCustomer.Status = ConstantMessage.CONST_StatusPending;

                            db.Entry(newCustomer).State = EntityState.Modified;
                            db.SaveChanges();

                            string MailBody = RegistrationTemplate(newCustomer.ContactPerson, "", newCustomer.UserId);
                            bool isMailSend = MailSender.SendingMail(ConstantMessage.IngenRegisterMailAddress,ConstantMessage.IngenRegisterMailAddressPassword, model.Email,ConstantMessage.IngenRegistrationSubject, MailBody, ConstantMessage.IngenSalesMailAddress);

                            if (isMailSend)
                            {
                                ViewBag.MailMessage = ConstantMessage.CONST_SuccessMsg;
                            }
                            else
                            {
                                ViewBag.MailMessage = ConstantMessage.CONST_FailedMsg;
                            }
                            return View("MailConfirmation");                         
                         }
                        else if (newCustomer.Status == ConstantMessage.CONST_StatusPending)
                        {
                            string MailBody = RegistrationTemplate(newCustomer.ContactPerson, "", newCustomer.UserId);
                            bool isMailSend = MailSender.SendingMail(ConstantMessage.IngenRegisterMailAddress, ConstantMessage.IngenRegisterMailAddressPassword, model.Email, ConstantMessage.IngenRegistrationSubject, MailBody, ConstantMessage.IngenSalesMailAddress);
                           
                            if (isMailSend)
                            {                               
                                ViewBag.MailMessage = ConstantMessage.CONST_SuccessMsg;
                                //"Wellcome in our Service.A conformation mail is send to you.Please check the mail and active your account.";
                            }
                            else
                            {
                                ViewBag.MailMessage =ConstantMessage.CONST_FailedMsg;                              
                            }

                            return View("MailConfirmation");
                        }
                        else if (newCustomer.Status == ConstantMessage.CONST_Active)
                        {
                            //if user already exists display this message                           
                            ModelState.AddModelError("", ConstantMessage.CONST_CustomerExistsMsg);
                        }
                   
                }
               
                //  If we got this far, something failed, redisplay form
                ViewBag.Register = model;
                //return View();
            }
            catch (Exception ex)
            {
                ViewBag.Error = ex.Message;
                if (ex.Message.Contains(ConstantMessage.CONST_DatabaseInitialize_EXP))
                    ModelState.AddModelError("", ConstantMessage.CONST_DatabaseInitialize_EXP_ReturnMsg);
                else if(ex.Message.Contains(ConstantMessage.CONST_WebSecurityDbInitializeEXP))
                    ModelState.AddModelError("", ConstantMessage.CONST_WebSecurityDbInitializeEXP_ReturnMsg);
                else if (ex.Message.Contains(ConstantMessage.CONST_DBConnectionExp))
                    ModelState.AddModelError("", ConstantMessage.CONST_DBConnectionExp_ReturnMsg);
                else
                    ModelState.AddModelError("", ex.Message);
               
            }
            return View(model);
            //return View("Error");
        }

        //genarate 4 digit uper case clientCode from Company Name
        public string GenarateClientCode(string CompanyName)
        {
            if (CompanyName.Length > 4)
            {
                //Client code will be 4 digit Uper Case latter
                var.ClientCode =CompanyName.Substring(0, 4);
                return var.ClientCode.ToUpper();
            }
           
            return CompanyName.ToUpper();

        }

        [NonAction]
        public string getUniqueCharacter(string text)
        {
            
           if(text.Length>5)               
            var.CodeNumber=text.Substring(0,5);

           // now make it unique by adding dateTime
           var.CodeNumber = var.CodeNumber + DateTime.Now.ToString("yyyyMMddHHmmss");

           return var.CodeNumber;

        
        }


     /// <summary>
     /// http://www.codeproject.com/Articles/874218/Send-Emails-By-Using-Email-Templates-in-ASP-NET-MV
     /// orderpro.ingenstudio.com
     /// </summary>

     public string RegistrationTemplate(string username,string message,int UserId)
        {
          
            message="Thanks for signing up to Ingen Studio.<br>"; 
            message+="To get started, just confirm your email address by clicking the link below:<br><a href=";
            message+="http://app.ingenstudio.com/<Controller Name>/Confirmation?Ref=" + UserId;
            message+=">Activate your account</a><br>";
            message+="Your first three images you upload will be processed free of charge!<br>";
            message+="Please let us know if you have any questions.You can find answers to most questions at http://www.ingenstudio.com/faq, or you can always just reply to this email.";

            message+="<br><br>";
            message+="We are looking forward to working with you.";
            message+="<br><br>";
            message+="Best regards,";
            message+="<br><br>";

            message+="Ingen Studio<br>";
            message += "www.ingenstudio.com";

            string body="";           
            try
            {
                
                //Read template file from the App_Data folder
                using (var sr = new StreamReader(Path.Combine(Server.MapPath("~/Templates/IngenTemplate.html"))))
                {
                    body = sr.ReadToEnd();
                };

                string messageBody = string.Format(body, username,message);
                return messageBody;
            }
            catch (Exception)
            { 
            }

           return body;                 
        }
        //
        // POST: /Account/Disassociate

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Disassociate(string provider, string providerUserId)
        {
            string ownerAccount = OAuthWebSecurity.GetUserName(provider, providerUserId);
            ManageMessageId? message = null;

            // Only disassociate the account if the currently logged in user is the owner
            if (ownerAccount == User.Identity.Name)
            {
               //  Use a transaction to prevent the user from deleting their last login credential
                using (var scope = new TransactionScope(TransactionScopeOption.Required, new TransactionOptions { IsolationLevel = System.Transactions.IsolationLevel.Serializable }))
                {
                    bool hasLocalAccount = OAuthWebSecurity.HasLocalAccount(WebSecurity.GetUserId(User.Identity.Name));
                    if (hasLocalAccount || OAuthWebSecurity.GetAccountsFromUserName(User.Identity.Name).Count > 1)
                    {
                        OAuthWebSecurity.DeleteAccount(provider, providerUserId);
                        scope.Complete();
                        message = ManageMessageId.RemoveLoginSuccess;
                    }
                }
            }

            return RedirectToAction("Manage", new { Message = message });
        }

        //
        // GET: /Account/Manage

        public ActionResult Manage(ManageMessageId? message)
        {
            ViewBag.StatusMessage =
                message == ManageMessageId.ChangePasswordSuccess ? "Your password has been changed."
                : message == ManageMessageId.SetPasswordSuccess ? "Your password has been set."
                : message == ManageMessageId.RemoveLoginSuccess ? "The external login was removed."
                : "";
            ViewBag.HasLocalPassword = OAuthWebSecurity.HasLocalAccount(WebSecurity.GetUserId(User.Identity.Name));
            ViewBag.ReturnUrl = Url.Action("Manage");
            return View();
        }

        //
        // POST: /Account/Manage

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Manage(LocalPasswordModel model)
        {
            bool hasLocalAccount = OAuthWebSecurity.HasLocalAccount(WebSecurity.GetUserId(User.Identity.Name));
            ViewBag.HasLocalPassword = hasLocalAccount;
            ViewBag.ReturnUrl = Url.Action("Manage");
            if (hasLocalAccount)
            {
                if (ModelState.IsValid)
                {
                   //  ChangePassword will throw an exception rather than return false in certain failure scenarios.
                    bool changePasswordSucceeded;
                    try
                    {
                        changePasswordSucceeded = WebSecurity.ChangePassword(User.Identity.Name, model.OldPassword, model.NewPassword);
                    }
                    catch (Exception)
                    {
                        changePasswordSucceeded = false;
                    }

                    if (changePasswordSucceeded)
                    {
                        return RedirectToAction("Manage", new { Message = ManageMessageId.ChangePasswordSuccess });
                    }
                    else
                    {
                        ModelState.AddModelError("", "The current password is incorrect or the new password is invalid.");
                    }
                }
            }
            else
            {
                // User does not have a local password so remove any validation errors caused by a missing
               //  OldPassword field
                ModelState state = ModelState["OldPassword"];
                if (state != null)
                {
                    state.Errors.Clear();
                }

                if (ModelState.IsValid)
                {
                    try
                    {
                        WebSecurity.CreateAccount(User.Identity.Name, model.NewPassword);
                        return RedirectToAction("Manage", new { Message = ManageMessageId.SetPasswordSuccess });
                    }
                    catch (Exception e)
                    {
                        ModelState.AddModelError("", e);
                    }
                }
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }

        //
        // POST: /Account/ExternalLogin

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult ExternalLogin(string provider, string returnUrl)
        {
            return new ExternalLoginResult(provider, Url.Action("ExternalLoginCallback", new { ReturnUrl = returnUrl }));
        }

        //
        // GET: /Account/ExternalLoginCallback

        [AllowAnonymous]
        public ActionResult ExternalLoginCallback(string returnUrl)
        {
            AuthenticationResult result = OAuthWebSecurity.VerifyAuthentication(Url.Action("ExternalLoginCallback", new { ReturnUrl = returnUrl }));
            if (!result.IsSuccessful)
            {
                return RedirectToAction("ExternalLoginFailure");
            }

            if (OAuthWebSecurity.Login(result.Provider, result.ProviderUserId, createPersistentCookie: false))
            {
                return RedirectToLocal(returnUrl);
            }

            if (User.Identity.IsAuthenticated)
            {
                 //If the current user is logged in add the new account
                OAuthWebSecurity.CreateOrUpdateAccount(result.Provider, result.ProviderUserId, User.Identity.Name);
                return RedirectToLocal(returnUrl);
            }
            else
            {
               //  User is new, ask for their desired membership name
                string loginData = OAuthWebSecurity.SerializeProviderUserId(result.Provider, result.ProviderUserId);
                ViewBag.ProviderDisplayName = OAuthWebSecurity.GetOAuthClientData(result.Provider).DisplayName;
                ViewBag.ReturnUrl = returnUrl;
                return View("ExternalLoginConfirmation", new RegisterExternalLoginModel { UserName = result.UserName, ExternalLoginData = loginData });
            }
        }

        //
        // POST: /Account/ExternalLoginConfirmation

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public ActionResult ExternalLoginConfirmation(RegisterExternalLoginModel model, string returnUrl)
        {
            string provider = null;
            string providerUserId = null;

            if (User.Identity.IsAuthenticated || !OAuthWebSecurity.TryDeserializeProviderUserId(model.ExternalLoginData, out provider, out providerUserId))
            {
                return RedirectToAction("Manage");
            }

            if (ModelState.IsValid)
            {
                 //Insert a new user into the database
                using (EFDbContext db = new EFDbContext())
                {
                    Customer user = db.Customers.FirstOrDefault(u => u.Email.ToLower() == model.UserName.ToLower());
                   //  Check if user already exists
                    if (user == null)
                    {
                       //  Insert name into the profile table
                        db.Customers.Add(new Customer { Email = model.UserName });
                        db.SaveChanges();

                        OAuthWebSecurity.CreateOrUpdateAccount(provider, providerUserId, model.UserName);
                        OAuthWebSecurity.Login(provider, providerUserId, createPersistentCookie: false);

                        return RedirectToLocal(returnUrl);
                    }
                    else
                    {
                        ModelState.AddModelError("UserName", "User name already exists. Please enter a different user name.");
                    }
                }
            }

            ViewBag.ProviderDisplayName = OAuthWebSecurity.GetOAuthClientData(provider).DisplayName;
            ViewBag.ReturnUrl = returnUrl;
            return View(model);
        }

        //
        // GET: /Account/ExternalLoginFailure

        [AllowAnonymous]
        public ActionResult ExternalLoginFailure()
        {
            return View();
        }

        [AllowAnonymous]
        [ChildActionOnly]
        public ActionResult ExternalLoginsList(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return PartialView("_ExternalLoginsListPartial", OAuthWebSecurity.RegisteredClientData);
        }

        [ChildActionOnly]
        public ActionResult RemoveExternalLogins()
        {
            ICollection<OAuthAccount> accounts = OAuthWebSecurity.GetAccountsFromUserName(User.Identity.Name);
            List<ExternalLogin> externalLogins = new List<ExternalLogin>();
            foreach (OAuthAccount account in accounts)
            {
                AuthenticationClientData clientData = OAuthWebSecurity.GetOAuthClientData(account.Provider);

                externalLogins.Add(new ExternalLogin
                {
                    Provider = account.Provider,
                    ProviderDisplayName = clientData.DisplayName,
                    ProviderUserId = account.ProviderUserId,
                });
            }

            ViewBag.ShowRemoveButton = externalLogins.Count > 1 || OAuthWebSecurity.HasLocalAccount(WebSecurity.GetUserId(User.Identity.Name));
            return PartialView("_RemoveExternalLoginsPartial", externalLogins);
        }

        #region Helpers
        private ActionResult RedirectToLocal(string returnUrl)
        {
            return RedirectToAction("Index", "Home");
            //if (Url.IsLocalUrl(returnUrl))
            //{
            //    return Redirect(returnUrl);
            //}
            //else
            //{
            //    return RedirectToAction("Index", "Home");
            //}
        }

        public enum ManageMessageId
        {
            ChangePasswordSuccess,
            SetPasswordSuccess,
            RemoveLoginSuccess,
        }

        internal class ExternalLoginResult : ActionResult
        {
            public ExternalLoginResult(string provider, string returnUrl)
            {
                Provider = provider;
                ReturnUrl = returnUrl;
            }

            public string Provider { get; private set; }
            public string ReturnUrl { get; private set; }

            public override void ExecuteResult(ControllerContext context)
            {
                OAuthWebSecurity.RequestAuthentication(Provider, ReturnUrl);
            }
        }

        private static string ErrorCodeToString(MembershipCreateStatus createStatus)
        {
             //See http://go.microsoft.com/fwlink/?LinkID=177550 for
             //a full list of status codes.
            switch (createStatus)
            {
                case MembershipCreateStatus.DuplicateUserName:
                    return "User name already exists. Please enter a different user name.";

                case MembershipCreateStatus.DuplicateEmail:
                    return "A user name for that e-mail address already exists. Please enter a different e-mail address.";

                case MembershipCreateStatus.InvalidPassword:
                    return "The password provided is invalid. Please enter a valid password value.";

                case MembershipCreateStatus.InvalidEmail:
                    return "The e-mail address provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.InvalidAnswer:
                    return "The password retrieval answer provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.InvalidQuestion:
                    return "The password retrieval question provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.InvalidUserName:
                    return "The user name provided is invalid. Please check the value and try again.";

                case MembershipCreateStatus.ProviderError:
                    return "The authentication provider returned an error. Please verify your entry and try again. If the problem persists, please contact your system administrator.";

                case MembershipCreateStatus.UserRejected:
                    return "The user creation request has been canceled. Please verify your entry and try again. If the problem persists, please contact your system administrator.";

                default:
                    return "An unknown error occurred. Please verify your entry and try again. If the problem persists, please contact your system administrator.";
            }
        }
        #endregion
    }
}
