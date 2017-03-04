using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Web.WebPages.OAuth;
using OrderPro.UI.Models;


using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Threading;
using System.Web.Mvc;
using WebMatrix.WebData;

namespace OrderPro.UI
{
    public static class AuthConfig
    {
 


        public static void RegisterAuth()
        {

            if (!WebSecurity.Initialized)
            {
                try
                {
                    WebSecurity.InitializeDatabaseConnection("DbConnectionString", "Customer", "UserId", "Email", autoCreateTables: false); //true
                }
                catch (Exception)
                {
                  
                 
                }
            }
           
            // To let users of this site log in using their accounts from other sites such as Microsoft, Facebook, and Twitter,
            // you must update this site. For more information visit http://go.microsoft.com/fwlink/?LinkID=252166

            //OAuthWebSecurity.RegisterMicrosoftClient(
            //    clientId: "",
            //    clientSecret: "");

            //OAuthWebSecurity.RegisterTwitterClient(
            //    consumerKey: "",
            //    consumerSecret: "");

            OAuthWebSecurity.RegisterFacebookClient(
                appId: "1587283048237037",
                appSecret: "65c34f6017f56168a9b50092ad8945e7");

            //OAuthWebSecurity.RegisterGoogleClient(
            //  clientId: "",
            //    clientSecret: ""
            // );
        }

       
      
    }
}
