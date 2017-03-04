using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using OrderPro.UI.Models;

namespace OrderPro.UI.App_Code
{
    public class ConstantMessage
    {
        
        public static string CONST_FTPUrl = @"ftp://<your ftp url>";

        public static string PAYPAL_ReturnUrl_FROM_INGEN_app_ingenstudio = "http://app.ingenstudio.com/Paypal/PaymentWithPaypal?";

        public static string PAYPAL_ReturnUrl_FROM_BOSL_SERVER = "http://####/app.ingenstudio.com/Paypal/PaymentWithPayPal?";  
       
        public static string PAYPAL_ReturnUrl_FROM_INGEN_orderpro = "http://####/Paypal/PaymentWithPaypal?";

        public static string PAYPAL_ReturnUrl_FROM_LOCALHOST = "http://####/Paypal/PaymentWithPaypal?";

        public static string CONST_UserName = "<your UserName>";
        public static string CONST_Pass = "<Your password>";


        #region IngenMailAddressAndSubjectAndBody

        public static string IngenSupportMailAddress = "support@#####.com";
        public static string IngenSupportMailAddressPassword = "<Support Password>";

        public static string IngenRegisterMailAddress = "register@#####.com";
        public static string IngenRegisterMailAddressPassword = "<Register Password>";
                

        public static string IngenSalesMailAddress = "sales@ingenstudio.com";
        public static string IngenSalesMailAddressPassword = "<Sales Password>";

        public static string IngenInfoMailAddress = "info@#####.com";
        public static string IngenInfoMailAddressPassword = "<Info Password>";



        public static string IngenRegistrationSubject = "Activate your Ingen Studio Account.";
        public static string IngenOrderPlacedSubject = "Confirming your Order No: ";
        public static string IngenTransactionSubject = "Payment Confirmation of your Order No: ";     

      
        #endregion


        public static Stream ftpStream = null;
        public static int bufferSize = 2048;

        public static string CONST_FileToUploadDirectoryName = "OrderFileUpload";

        #region UserStatus

        public static string CONST_StatusPending = "Pending";  
        public static string CONST_StatusConfirmed = "Confirmed";
        public static string CONST_StatusSuspended = "Suspended";
        public static string CONST_StatusPaid = "Paid";

        public static string CONST_User_AccountTypePrepaidMsg = "Prepaid";
        public static string CONST_User_AccountTypePostPaidMsg = "PostPaid"; 



        #endregion

        public static string CONST_MainServiceE_Commerce="E-Commerce";
        public static string CONST_Mainservice_AddOns = "Add-ons";
        public static string CONST_MainService_ReTouching = "Re-Touching";

        public static string CONST_SuccessMsg = "Success";
        public static string CONST_FailedMsg = "Failed";
        public static string CONST_FromAjaxMsg = "True";

        public static string CONST_Active = "Active";

        public static string CONST_PaymentType = "Paypal";

        public static string CONST_CurrencyUSD = "USD";

        public static string CONST_CustomerExistsMsg = "User already exists.Please Login.";

        public static string CONST_AccountCatagoryRegular = "Regular";
        public static string CONST_AccountCatagoryCorporate = "Corporate";
        public static List<FtpsFile> UploadedFileList=new List<FtpsFile>();


        public static string CONST_ConfirmationAbnormalCode = "0";
        public static string COST_ConfirmationActiveCode = "1";
        public static string CONST_ConfirmationSuspendCode = "2";
        public static string CONST_ConfirmationAlreadyActiveCode = "5";
        public static string CONST_ConfirmationUserNotFoundCode = "3";    
        public static string CONST_ConfirmationExceptionCode = "4";



        #region GetPaymentFuncVariable

        public static string CONST_Header_GrandTotal = "Grand Total:";
        public static string CONST_Header_Discount = "Discount";
        public static string CONST_Header_NetAmount = "Net Amount:";

        public static string CONST_PaypalTransactionFailedMsg = "Paypal said 'Transaction Failed'";
        #endregion

        public static string CONST_ServiceErrorMsg = "This Service is not available in your region. Please contact with us.";
        public static string CONST_OrderReferenceErrorMsg = "Can not find Order Reference!";

        #region DeclareGlobalVariable

        public static string GlobalDirectoryPath = "";
        public static string ClientCode = "";
        public static string OrderNumber = "";
        public static string DirectoryPath = "";
        public static bool LoginFromAccount = false;
        #endregion


        #region ExceptionMessage
        public static string CONST_DatabaseInitialize_EXP = "An exception occurred while initializing the database";
        public static string CONST_DatabaseInitialize_EXP_ReturnMsg = "Ex001: Respond failed.Please try again.";
        //You must call the "WebSecurity.InitializeDatabaseConnection" method before you call any other method of the "WebSecurity" class. This call should be placed in an _AppStart.cshtml file in the root of your site

        public static string CONST_WebSecurityDbInitializeEXP = "WebSecurity.InitializeDatabaseConnection";
        public static string CONST_WebSecurityDbInitializeEXP_ReturnMsg = "Ex002: Respond failed.Please try again.";

        //Attempt to SignIn/SignUp
        //An error occurred while getting provider information from the database. This can be caused by Entity Framework 
        //using an incorrect connection string. Check the inner exceptions for details and ensure that the connection string is correct
        public static string CONST_DBConnectionExp = "An error occurred while getting provider information from the database";
        public static string CONST_DBConnectionExp_ReturnMsg = "Connection time out.Please try again.";


        public static string CONST_IncorrectUserIdPasswordMsg = "The user name or password provided is incorrect.";
        public static string CONST_UserAccessRestrictionMsg = "You don't have sufficient right to access.";
        public static string CONST_InvalidUserMsg = "Invalid User Name or Password.";

        public static string CONST_UserNotFoundMsg = "User not found!!";

        #endregion

    }

   
}