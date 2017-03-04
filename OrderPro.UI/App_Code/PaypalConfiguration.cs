using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using PayPal.Api;

namespace OrderPro.UI.App_Code
{
    public class PaypalConfiguration
    {

        //these variables will store the clientID and clientSecret
        //by reading them from the web.config
        public readonly static string ClientId;
        public readonly static string ClientSecret;

        static PaypalConfiguration()
        {
            try
            {
               // var config = GetConfig();
                ClientId ="AcBGF7YJ-U2Ig2wEqgWa9-wyJOrixOXmKjs92ELrvh4B5kCD1jAtZKrnm_O4_r2cpr9JY8Y2FBDXcHX2";             //config["clientId"].ToString();
                ClientSecret = "EN8hNKmY4ojaZqgXYTiiCna40hf2KSAkAlmjZTP566Z0b15mKX_JuPp94AzC2FiVtzFRYqe6MxTdYgrL";         //config["clientSecret"].ToString();
            }
            catch (PayPal.ConfigException ex)
            {
                throw ex;
            }
            catch (Exception mx)
            {
                throw mx;
            }
        }

        // getting properties from the web.config
        public static Dictionary<string, string> GetConfig()
        {
            return PayPal.Api.ConfigManager.Instance.GetProperties();
        }

        private static string GetAccessToken()
        {
            try
            {
                // getting accesstocken from paypal                
                string accessToken = new OAuthTokenCredential
            (ClientId, ClientSecret, GetConfig()).GetAccessToken();

                return accessToken;
            }catch(Exception ex)
            {
                throw ex;
            }
        }

        public static APIContext GetAPIContext()
        {
            try
            {
                // return apicontext object by invoking it with the accesstoken
                APIContext apiContext = new APIContext(GetAccessToken());
                apiContext.Config = GetConfig();
                return apiContext;
            }
            catch (PayPal.PayPalException ex)
            {
                throw ex;
            }
        }
    }
}