using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OrderPro.UI.Models;
using OrderPro.UI.App_Code;
using OrderPro.Model;
using System.Data;
using System.IO;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Data.SqlClient;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;

using OrderPro.UI.Repository;

namespace OrderPro.UI.Controllers
{

    [Authorize]
    public class HomeController : Controller
    {
        //create Instance
        private variable var ;
        private EFDbContext db;
      
        #region RepositoryCodeBlock
        //private IOrder _OrderRepository;
        private IMainService _MainServiceRepository ; // =new MainServiceRepo();

        public HomeController()
            : this(new MainServiceRepo())
        {
            db = new EFDbContext();
            var = new variable();
        }

        public HomeController(IMainService mainServiceRepo)
        {
            // _OrderRepository = orderRepo;
            _MainServiceRepository = mainServiceRepo;
        }


        #endregion


        public ActionResult Exception(string errorMsg)
        {
            ViewBag.error = errorMsg;
            return View("Error");
        }


        #region HOME PAGE
        //[CustomActionFilter]
        public ActionResult Index(string fromAjax,string UserName)
        {              
   
            try
            {                
                //check is user authenticate or redirect to login page
                if (!User.Identity.IsAuthenticated)
                {
                    return RedirectToAction("Login","Account");
                }

                //There in no Database Connection so I add some dummy data and return the Order page from here
                //please see my app for live project app.ingenstudio.com
                #region DummyData
                var MainService = _MainServiceRepository.GetMainService();
                ViewBag.ServiceList = MainService;

                return View();
                #endregion


                #region ConfigFTPDirectory

                Customer getCustomer = new Customer();              
              
                                           
                getCustomer = db.Customers.Where(t => t.Email == User.Identity.Name).SingleOrDefault();
                ViewBag.UserName = getCustomer.Email;

                //get main Service List for display on index page
                var ServiceList = db.MainServices.Where(t => t.ServiceCategory == ConstantMessage.CONST_MainServiceE_Commerce && t.Status == ConstantMessage.CONST_Active).OrderBy(t=>t.Rate).ToList(); //

                //get the OrderNo from procedure
                var.OrderNumber = db.GetOrderNo(getCustomer.Code);

                //We need to add this Order in Order Table so next time when an Order make OrderNo genarate by incriment 1 
                //from the max value of privious Order No      
          
                Order order = new Model.Order();

                order.Reference = Guid.NewGuid().ToString();
                order.TotalImages =0;          
                order.Service =null;                
                order.Customer =getCustomer;
                order.Status = ConstantMessage.CONST_StatusPending;
                order.OrderNo = var.OrderNumber;
                order.PaymentType =getCustomer.PaymentType;
                order.AccountType =getCustomer.AccountType;
                order.Rate =0;
                order.DiscountPercent = 0;
                order.OrderDate = DateTime.Now;
                order.Deadline = DateTime.Now;
               
                db.Orders.Add(order);
                db.SaveChanges();
             
                var.DirectoryPath = FtpFiles.CreateFTPDirectory(getCustomer.Code, var.OrderNumber);      
                if (var.DirectoryPath.Contains("Error:"))
                {
                    //if directory create failed then delete the Order from Order table
                    try
                    {
                        Order orderToDelete = db.Orders.Find(order.Reference);
                        db.Orders.Remove(orderToDelete);
                        db.SaveChanges();
                    }
                    catch (Exception)
                    { 
                     
                    }
                    ViewBag.error = var.DirectoryPath;
                    return View("Error");                
                }           

                #endregion
                             
                ConstantMessage.UploadedFileList.Clear();             
                ViewBag.ServiceList = ServiceList;
                ViewBag.OrderNumber = var.OrderNumber;
                ViewBag.ClientCode = getCustomer.Code;
                ViewBag.OrderRef = order.Reference;

                return View();
            }
            catch (Exception ex)
            {
                ViewBag.error = ex.Message;             
            }

            return View("Error");
        }

        #endregion


        #region INSTRUCTION PROCESS

      
        public ActionResult Instruction(string serviceRef, int TotalFile, string OrderRef, string ClientCode, string UserName) //string OrderNo
        {           

            try
            {
              //get UserName by parameter because Shared Hosting session timeout within 20 minutes so TempData["UserName"] will null
              // var.UserName = TempData["UserName"] as string;

               var.UserName = UserName;
               var.OrderRef = OrderRef;
               var.ClientCode = ClientCode;             
                
               Customer Customer = new Customer();
               Order order = new Order();
               List<Complexity> complexityList = new List<Complexity>();

                if (var.UserName != null && !string.IsNullOrEmpty(var.UserName))
                {   
                   if (serviceRef != null)
                     {
                         if (var.OrderRef != null && !string.IsNullOrEmpty(var.OrderRef) && var.ClientCode != null && !string.IsNullOrEmpty(var.ClientCode))
                         {
                                //get Customet model Complexity and Order model                                 
                                complexityList = db.Complexities.Where(t => t.Service.Reference == serviceRef).OrderBy(t=>t.AdditionalRate).ToList();
                                order = db.Orders.Where(x => x.Reference == var.OrderRef).SingleOrDefault();                        

                                ViewBag.ClientCode = var.ClientCode;
                                ViewBag.OrderNumber = order.OrderNo;

                                FtpsController ftp = new FtpsController();
                                List<FtpsFile> GetUplodedFileList = ftp.GetFileNames(ConstantMessage.CONST_FTPUrl + ClientCode + "/" + order.OrderNo + "/");  //"ftp://204.11.58.210/app.ingenstudio.com/TestFileUpload/"

                                if (TotalFile > 0 && GetUplodedFileList.Count > 0)
                                {
                                
                                //To do get all image list from FTP location to save data in OrderFile table.                                

                                MainService service = new MainService();
                                service = db.MainServices.Where(t => t.Reference == serviceRef).SingleOrDefault();
                                
                                order.TotalImages = TotalFile;

                                //Add mail service
                                order.Service = service;                             
                                order.Rate = service.Rate;
                                order.DiscountPercent = 0;                           

                                //update this order
                                db.Entry(order).State = EntityState.Modified;
                             

                                //now add new record in OrderFile
                                foreach (var item in GetUplodedFileList)
                                {
                                   
                                    OrderFiles uploadedfile = new OrderFiles();
                                    uploadedfile.Reference = Guid.NewGuid().ToString();
                                    uploadedfile.OrderRef = order;
                                    uploadedfile.IsAccepted = true;
                                    uploadedfile.IsDelivered = false;
                                    uploadedfile.FileName = item.Name;

                                    uploadedfile.Instruction = null;
                                    uploadedfile.ComplexityRef = null;
                                    uploadedfile.DeliveryFormat = null;
                                  
                                    db.OrderFile.Add(uploadedfile);

                                    item.IsUploaded = true;
                                    item.Id = uploadedfile.Reference;
                                }


                                try
                                {
                                    db.SaveChanges();

                                    #region HiddenFieldValue
                                    ViewBag.UserName = var.UserName;                                  
                                    ViewBag.OrderRef = order.Reference;
                                    ViewBag.ServiceRef = service.Reference;
                                    ViewBag.serviceName = service.Name;
                                    ViewBag.ServiceRate = Convert.ToString(service.Rate);                                  
                                    ViewBag.OrderNo = order.OrderNo;
                                    #endregion

                                    ViewBag.Complexity = complexityList;
                                    ViewBag.TotalImage = TotalFile;
                                    ViewBag.UploadedList = GetUplodedFileList.ToList();


                                    #region SummaryNote
                                    //below code for Instruction Page where we can add complexity and delivery formate for differenc Image 
                                    //eg.20 image we can add easy complexity for 5 image can add Medium complexity for 10 image and etc by clicking Apply button
                                    //Also can Cancel Instruction/Complexity for individual image by click Cancel button from Instruction.cshtml view
                                    //for AddInstruction method is AddInstruction
                                    //for Remove Instruction method is RemoveInstruction
                                    #endregion
                                    return PartialView(GetUplodedFileList);

                                    #region SummaryNote
                                    //below return InstructionAll have no option as like Instruction page
                                    //it can only add single instruction,complesity and delivery format for all image by clicking Apply button
                                    //and cancel Instruction,complexity and delivery format for all image by clicking Cancel button
                                    //for AddInstruction method is AddInstructionAll
                                    //for Remove Instruction method is RemoveInstructionAll
                                    #endregion
                                    //return PartialView("InstructionAll", GetUplodedFileList);


                                }
                                catch (Exception ex)
                                {
                                    var msg = ex.Message;
                                    ViewBag.error = "Can not save or modified data Properly.Exception Message:"+ex.Message;
                                  
                                }

                            
                                }
                                else
                                {
                                    ViewBag.error = "File does not uploaded.Total File:" + TotalFile + " Upload list Count :" +GetUplodedFileList.Count;
                                }

                            }
                            else
                            {
                                ViewBag.error = "Order Number can not be null.";
                            }

                        }
                        else
                        {
                            ViewBag.error = "Service must not be null.";
                        }                    
                }
                else
                {
                    ViewBag.error = ConstantMessage.CONST_UserNotFoundMsg;
                }
            }
            catch (Exception ex)
            {
                ViewBag.error = ex.Message;
            }
                return PartialView("Error");
        }

      
        public ActionResult AddInstruction(List<Thing> things,string OrderRef, string Instruction, string Complexity, string PreferredFormat)
        {
            
            List<Imagetag> ImgTagList = new List<Imagetag>();

            if (things.Count > 0 && Complexity != null && !string.IsNullOrEmpty(Complexity)) 
            {
               

                var ComplexityObj = db.Complexities.Where(t => t.Reference == Complexity).SingleOrDefault();

                foreach (var reference in things)
                {

                    if (reference != null)
                    {                       
                        var.ImageId = reference.imageId;                         
                        var.LableId = reference.id;                         

                        var OrderFile = db.OrderFile.Where(t => t.Reference == var.ImageId).SingleOrDefault();

                        if (OrderFile != null)
                        {
                            OrderFiles obj = OrderFile;
                            obj.Instruction = Instruction;
                            obj.ComplexityRef = ComplexityObj;
                            obj.DeliveryFormat = PreferredFormat;

                            db.Entry(obj).State = EntityState.Modified;

                            //get only 15 charecter of instruction
                            if (Instruction.Length > 15)
                              var.Instruction = Instruction.Substring(0, 15) + "..";
                            else
                              var.Instruction = Instruction;

                            ImgTagList.Add(new Imagetag { ImgId = var.ImageId, lableId = var.LableId, Complexity = ComplexityObj.Level, Instruction = var.Instruction, DeliveryFormat=PreferredFormat });
                        }
                    }
                }

                try
                {

                    db.SaveChanges();
                    //take how many image has complexity Specified

                   int? specified = db.GetTotalOrderFile(OrderRef,"NotNull");
                   
                   return Json(new {ImageList=ImgTagList,DeliveryFormat=PreferredFormat,Specified=specified.Value.ToString(), message = "True" }, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                    return Json(new { message = msg }, JsonRequestBehavior.AllowGet);
                }
            
            }

            return Json(null, JsonRequestBehavior.AllowGet); 
        }

       // [HttpGet]
        public ActionResult RemoveInstruction(List<Thing> things,string OrderRef,int TotalImage)
        {
           
            List<Imagetag> ImgTagList = new List<Imagetag>();
            int removeCount = 0;

            if (things.Count() > 0)
            {
                foreach (var reference in things)
                {
                    if (reference != null)
                    {
                       
                        var.ImageId = reference.imageId;                
                        var.LableId = reference.id;             
                        
                        var OrderFile = db.OrderFile.Include("ComplexityRef").Where(t => t.Reference == var.ImageId).SingleOrDefault();

                        OrderFile.Instruction = null;
                        OrderFile.ComplexityRef = null;
                        OrderFile.DeliveryFormat = null;
                        db.Entry(OrderFile).State = EntityState.Modified;

                        ImgTagList.Add(new Imagetag { ImgId = var.ImageId, lableId = var.LableId, Complexity = "", Instruction = "" });
                        removeCount++;
                    }
                }
                try
                {

                    db.SaveChanges();

                    //after remove complexity get how many remain 
                    int? specified = db.GetTotalOrderFile(OrderRef, "NotNull");                                        
                    return Json(new { ImageList = ImgTagList,Specified=specified.Value.ToString(), message = "True" }, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                    return Json(new { message = msg }, JsonRequestBehavior.AllowGet);
                }
            }

            return Json(new { message = "" }, JsonRequestBehavior.AllowGet);

        }

        public ActionResult SelectAllImage(string OrderNo)
        {
            try
            {
                List<Thing> OrderFile= db.OrderFile.Where(t => t.OrderRef.OrderNo == OrderNo)
                                        .Select(t=>new Thing{
                                                             imageId=t.Reference,                                                             
                                                            }).ToList();

                return Json(new { ImageList = OrderFile, message = "True" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                return Json(new { message = "False" }, JsonRequestBehavior.AllowGet);
            }
        }

        #region AddRemoveInstructionForInstructionAll
        /// <summary>
        /// AddInstructionAll add all image instruction,Complexity and PreferredFormat call from the page InstructionAll.cshtml
        /// </summary>
        /// <param name="model"></param>
        /// <param name="Instruction"></param>
        /// <param name="Complexity"></param>
        /// <param name="PreferredFormat"></param>
        /// <returns></returns>
        public ActionResult AddInstructionAll(List<FtpsFile> model,string Instruction, string Complexity, string PreferredFormat)
        {
            List<Imagetag> ImgTagList = new List<Imagetag>();
            if (model.Count > 0 && Complexity != null && !string.IsNullOrEmpty(Complexity))
            {

                int lblId = 0;
                var ComplexityObj = db.Complexities.Where(t => t.Reference == Complexity).SingleOrDefault();

                foreach (var reference in model)
                {                    
                       
                        var.ImageId = reference.Id;                         
                        var.LableId = Convert.ToString(lblId);                         

                        var OrderFile = db.OrderFile.Where(t => t.Reference == var.ImageId).SingleOrDefault();

                        OrderFiles obj = OrderFile;
                        obj.Instruction = Instruction;
                        obj.ComplexityRef = ComplexityObj;
                        obj.DeliveryFormat = PreferredFormat;

                        db.Entry(obj).State = EntityState.Modified;

                        //get only 15 charecter of instruction
                        if (Instruction.Length > 30)
                            var.Instruction = Instruction.Substring(0, 30);
                        else
                            var.Instruction = Instruction;

                        ImgTagList.Add(new Imagetag { ImgId = var.ImageId, lableId = var.LableId, Complexity = ComplexityObj.Level, Instruction = var.Instruction });
                        lblId++;
                }

                try
                {

                    db.SaveChanges();
                    return Json(new { ImageList = ImgTagList, DeliveryFormat = PreferredFormat, message = "True" }, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    string msg = ex.Message;
                    return Json(new { message = msg }, JsonRequestBehavior.AllowGet);
                }

            }

            return Json(null, JsonRequestBehavior.AllowGet);
        }

        #endregion

        /// <summary>
       ///To do first we pass OrderRef and TotalImage for check from Order File table 
       ///get all row from Order File table where OrderREf is given OrderRef and Complexity is not null
       ///if selected row number is equals Total Image number then we understand that cimplexity is set to all images 
       /// </summary>      
      
        public ActionResult VarifiedInstruction(string OrderRef,string TotalImage)
        {
            try
            {
                string msg = "";

                int totalimg = Convert.ToInt32(TotalImage);
                if (totalimg > 0 && OrderRef != null && !string.IsNullOrEmpty(OrderRef))
                {
                    var OrderFileList = db.OrderFile.Include("ComplexityRef").Where(t => t.OrderRef.Reference == OrderRef && t.ComplexityRef != null).ToList();

                    if (OrderFileList != null)
                    {
                        if (OrderFileList.Count == totalimg)
                        {
                            return Json(new { message = "True" }, JsonRequestBehavior.AllowGet);
                        }
                        else
                            return Json(new { message = "SetAllImageComplexity" }, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json(new { message = "PleaseAddComplexity" }, JsonRequestBehavior.AllowGet);
                    }


                }
                else
                {
                    msg = "Order ref :" + OrderRef + " Total Image :" + totalimg;
                }


                return Json(new { message = msg }, JsonRequestBehavior.AllowGet); 
            }
            catch (Exception ex)
            {
                return Json(new { message = "An error occured.Please try again."+ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }

        /// <summary>
        /// create thumbanial image for display image quickly
        /// </summary>       
        
        public ActionResult Thumbnail(int width, int height,string ClientCode,string Ordername,string ImageName)
        {
            // TODO: the filename could be passed as argument of course
            try
            {
                var imageFile = Path.Combine(Server.MapPath("~/OrderFileUpload"), ClientCode + "/" + Ordername + "/" + ImageName);
                using (var srcImage = Image.FromFile(imageFile))
                using (var newImage = new Bitmap(width, height))
                using (var graphics = Graphics.FromImage(newImage))
                using (var stream = new MemoryStream())
                {
                    graphics.SmoothingMode = SmoothingMode.AntiAlias;
                    graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
                    graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;
                    graphics.DrawImage(srcImage, new Rectangle(0, 0, width, height));
                    newImage.Save(stream, ImageFormat.Png);
                    return File(stream.ToArray(), "image/png");
                }
            }
            catch (Exception)
            {
              return  null;
            }
        }

            

        #endregion


        #region ADD-ONS PROCESS
        public ActionResult OrderPre(string ServiceRef, string UserName, string OrderRef, string instruction, string ComplexityRef, string PreferredFormat)  
        {
            
            try
            {
                                
                var.UserName = UserName;                                //TempData["UserName"] as string;   
                var.OrderRef = OrderRef;                                //TempData["OrderModel"] as OrderPro.Model.Order;
                var.ServiceRef = ServiceRef;                            //TempData["ServiceName"] as string;               

                if (var.UserName != null && !string.IsNullOrEmpty(var.UserName) && var.OrderRef != null && !string.IsNullOrEmpty(var.OrderRef) && var.ServiceRef != null && !string.IsNullOrEmpty(var.ServiceRef))
                {

                    //Added 17-09-2016 add Instruction,Complexity and DeliveryFormate for all OrderFile data of OrderRef FK 

                    #region AddInstructionForAllImage
                    
                    var ComplexityObj = db.Complexities.Where(t => t.Reference == ComplexityRef).SingleOrDefault();
                    var OrderFileList = db.OrderFile.Include("ComplexityRef").Where(t => t.OrderRef.Reference == OrderRef).ToList();

                    foreach (var item in OrderFileList)
                    {
                        var OrderFile = db.OrderFile.Include("ComplexityRef").Where(t => t.Reference == item.Reference).SingleOrDefault();
                        OrderFile.Instruction = instruction;
                        OrderFile.ComplexityRef = ComplexityObj;
                        OrderFile.DeliveryFormat = PreferredFormat;
                        db.Entry(OrderFile).State = EntityState.Modified;

                    }

                    db.SaveChanges();
                    
                    #endregion

                    //End date 17-09-2016
                    
                    var list = db.AddOnServices.Where(t => t.ServiceCategory == ConstantMessage.CONST_MainServiceE_Commerce && t.Status == ConstantMessage.CONST_Active).OrderBy(t=>t.Reference).ToList();
                    ViewBag.AddOnsService = list;

                    var OrderDelivery = db.OrderDeliverys.OrderBy(t=>t.AdditionalRate).ToList();
                    ViewBag.OrderDelivery = OrderDelivery;

                    #region HiddenFieldValue
                    ViewBag.serviceRef = var.ServiceRef;
                    ViewBag.OrderRef = OrderRef;
                    ViewBag.UserName = var.UserName;
                    //ViewBag.ServiceRate = TempData["ServiceRate"] as string;
                    #endregion

                    return PartialView();
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

            return PartialView("Error");
        }

        #endregion
        
        #region PAYMENT PROCESS
        public ActionResult Payment(string AddonsRefCollection, string DeliveryRef,string ServiceRef,string OrderRef,string UserName)
        {
          try
          {
           if (ServiceRef != null && !string.IsNullOrEmpty(ServiceRef) && OrderRef != null && !string.IsNullOrEmpty(OrderRef) && UserName != null && !string.IsNullOrEmpty(UserName))
                {
                    List<GetPaymentInfo_Result> payment = new List<GetPaymentInfo_Result>();
                    var.OrderRef = OrderRef;
                    var.ServiceRef = ServiceRef;
                    var.UserName = UserName;

                    var deliveryOrder = db.OrderDeliverys.Where(t => t.Reference == DeliveryRef).SingleOrDefault();
                    var OrderModel = db.Orders.Include("Customer").Where(t => t.Reference == var.OrderRef).SingleOrDefault();                  
                  
                    OrderModel.Deadline = OrderModel.OrderDate.AddHours(deliveryOrder.Hours);

                    OrderModel.Delivery = deliveryOrder;
                    OrderModel.Status = ConstantMessage.CONST_StatusConfirmed;

                    if (AddonsRefCollection != null)
                    {
                        if (AddonsRefCollection.Length > 0)
                        {
                            string[] values = AddonsRefCollection.Split(',');
                            for (int i = 0; i < values.Length; i++)
                            {
                                string _Reference = values[i].Trim().ToString();
                                if (_Reference != "" && _Reference != "," && !string.IsNullOrEmpty(_Reference))
                                {
                                    var addons = db.AddOnServices.Where(t => t.Reference == _Reference).SingleOrDefault();

                                    AddOnService newAddon = new AddOnService();
                                    newAddon = addons;

                                    OrderLine obj = new OrderLine();
                                    obj.Reference = Guid.NewGuid().ToString();
                                    obj.OrderRef = OrderModel;
                                    obj.AddonService = newAddon;
                                    obj.Rate = addons.Rate;
                                    db.OrderLines.Add(obj);

                                }
                            }

                        }
                    }
                    //create a invoice        
                    OrderPro.Model.Invoice orderInvoice = new Model.Invoice();
                    orderInvoice.Reference = Guid.NewGuid().ToString();
                    orderInvoice.InvoiceNo = OrderModel.OrderNo;
                    orderInvoice.OrderRef = OrderModel;
                    orderInvoice.Status = ConstantMessage.CONST_StatusPending;
                    orderInvoice.InvoiceDate = DateTime.Now;
                    orderInvoice.TotalAmount = 0;
                    orderInvoice.NetAmount = 0;
                    orderInvoice.DiscountAmount = 0;
                    orderInvoice.Currency = ConstantMessage.CONST_CurrencyUSD;

                    db.Invoices.Add(orderInvoice);
                    //Update Order Rate and Format                         
                    db.Entry(OrderModel).State = EntityState.Modified;
                 
                    db.SaveChanges();
                  
                    #region MyQuery
                    //SELECT count(*) AS count,Complexity.Level,Complexity.AdditionalRate
                    //FROM OrderFiles,Complexity
                    //WHERE OrderFiles.OrderRef_Reference='700d5346-d707-44a6-a962-90a54ef15c3a' and OrderFiles.ComplexityRef_Reference=Complexity.Reference
                    //GROUP BY OrderFiles.ComplexityRef_Reference,Complexity.Level,Complexity.AdditionalRate;


                    //select AddOnService.Name,AddOnService.Rate
                    //from OrderLine,AddOnService 
                    //where OrderLine.OrderRef_Reference='700d5346-d707-44a6-a962-90a54ef15c3a' and OrderLine.AddonService_Reference=AddOnService.Reference;

                    //string query = "GetPaymentInfo @orderRef";
                    //SqlParameter orderref = new SqlParameter("@orderRef", "700d5346-d707-44a6-a962-90a54ef15c3a");  

                    // payment = (from o in db.Orders
                    //              where o.Reference ==order.Reference
                    //              join e in db.OrderFile on o.Reference equals e.OrderRef.Reference
                    //              join j in db.Complexities on e.ComplexityRef.Reference equals j.Reference
                    //              group e by new SubPayment
                    //              {
                    //                  ComplexityRate = j.AdditionalRate,
                    //                  ComplexityName = j.Level,
                    //                  BaseRate = o.Rate,
                    //                  ServiceName = o.Service.Name

                    //              } into g

                    //              select new PaymentViewModel
                    //              {
                    //                  ComplexImgeQty = g.Count(),
                    //                  ComplexityName = g.Key.ComplexityName,
                    //                  BaseRate = g.Key.BaseRate,
                    //                  ServiceName = g.Key.ServiceName,
                    //                  ComplexityRate = g.Key.ComplexityRate,
                    //                  ComplexityAmount =Math.Round((g.Key.ComplexityRate + g.Key.BaseRate) * g.Count(),2),


                    //              }).ToList();


                    //  var TotalComplexityAmount = payment.Sum(t => t.ComplexityAmount);

                    //  var Addons = (from o in db.Orders
                    //                join orderline in db.OrderLines on o.Reference equals orderline.OrderRef.Reference
                    //                where o.Reference ==order.Reference
                    //                select new
                    //                {
                    //                    AddOnsName = orderline.AddonService.Name,
                    //                    TotalImage = o.TotalImages,
                    //                    AddOnsRate = orderline.Rate,
                    //                    AddOnsAmount =Math.Round((o.TotalImages * orderline.Rate),2)

                    //                }).ToList();
                    //  var TotalAddonsAmount = Addons.Sum(t => t.AddOnsAmount);

                    //  var netSum =Math.Round((TotalComplexityAmount + TotalAddonsAmount),2);


                    //  foreach (var item in Addons)
                    //  {
                    //      payment.Add(new PaymentViewModel { AddOnsName = item.AddOnsName, TotalImage = item.TotalImage, AddOnsRate = item.AddOnsRate, AddOnsAmount = item.AddOnsAmount });
                    //  }
                    //  payment.Add(new PaymentViewModel { NetSum = netSum });

                    //  //now calculate Delivery if any
                    //  if (deliveryOrder.Hours < 24) //if less then 24 then delivery charge added otherwise not
                    //  {
                    //      //calculate Extra Charge upon TotalAmount
                    //   var.DeliveryCharge =Math.Round((netSum * deliveryOrder.AdditionalRate / 100),2);
                    //    payment.Add(new PaymentViewModel {DeliveryName=deliveryOrder.Name, DeliveryCharge=var.DeliveryCharge });

                    //  }
                    // //now summation netSum and DeliveryCharge and add list netTotal                
                    // var.netTotal=Math.Round((netSum +var.DeliveryCharge ),2);

                    ////add list
                    // payment.Add(new PaymentViewModel { NetTotal=var.netTotal });
                    ////add discount
                    // payment.Add(new PaymentViewModel { Discount=0 });
                    ////calculate net payment nettotal - discount
                    // payment.Add(new PaymentViewModel { NetPayment=var.netTotal});

                    #endregion
               
                    //Call storedProcedure to get payment result
                    payment = db.GetPaymentResult(var.OrderRef);
                   

                    if (payment == null)
                    {
                      
                        ViewBag.error = "Failed to procede Order.Please try again.";
                        return PartialView("Error");
                    }

                    var countOfRows =payment.ToList().Count();
                    var lastRow =payment.Skip(countOfRows - 1).FirstOrDefault();
                    ViewBag.NetAmount = Math.Round(lastRow.Amount.Value, 2);
                   

                    ViewBag.PaymentModel = payment;
                    ViewBag.InvoiceModel = orderInvoice;

                    ViewBag.InvoiceNo = Convert.ToString(OrderModel.OrderNo);
                    ViewBag.UserName = var.UserName;

                    ViewBag.ContactPerson = OrderModel.Customer.ContactPerson.ToString();

                    //Send Emails By Using Email Templates                                        
                    string MailBody = OrderTemplate(OrderModel.Customer.ContactPerson,OrderModel.OrderNo);
                    bool isMailSend = MailSender.SendingMail(ConstantMessage.IngenSalesMailAddress, ConstantMessage.IngenSalesMailAddressPassword, UserName, ConstantMessage.IngenOrderPlacedSubject+"["+OrderModel.OrderNo+"]", MailBody, ConstantMessage.IngenSalesMailAddress);
                    //End     

                    return PartialView(payment);

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

            return PartialView("Error");
        }

        #endregion



        #region MailTemplateForMakeOrder

        /// <summary>
        /// http://www.codeproject.com/Articles/874218/Send-Emails-By-Using-Email-Templates-in-ASP-NET-MV
        /// orderpro.ingenstudio.com
        /// </summary>

        public string OrderTemplate(string username, string OrderNo)
        {
            string message ="Thanks for placing an order to Ingen Studio. Your Order No is " + OrderNo;
            message +="<br>If you have any questions regarding your order, please reply to support@ingenstudio.com ";
            message +="<br><br>";
            message +="Best regards,";
            message +="<br><br>";
            message +="Ingen Studio<br>";
            message+="www.ingenstudio.com";
            string body = "";
            try
            {
                //Read template file from the App_Data folder
                using (var sr = new StreamReader(Path.Combine(Server.MapPath("~/Templates/IngenTemplate.html"))))
                {
                    body = sr.ReadToEnd();
                };

           string messageBody = string.Format(body,username,message);
           return messageBody;
            
           }
            catch (Exception)
            {

            }
            return body;
        }
        #endregion


        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }

      
    }


    public class Thing
    {
        public string id { get; set; }
        public string imageId { get; set; }
    }

    public class AllImage {

        /// <summary>
        /// lable or index id
        /// </summary>
        public string id { get; set; }
        public string imageId { get; set; }

    }
}
