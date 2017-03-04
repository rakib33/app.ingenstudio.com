using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Data.SqlClient;

namespace OrderPro.UI.App_Code
{
    //http://www.codeproject.com/Articles/426766/Custom-Filters-in-MVC-Authorization-Action-Result
    public class CustomActionFilter:AuthorizeAttribute
    {

        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            if (httpContext.User.Identity.IsAuthenticated)
            {
                 return true;
            }
            else
            {
                return false;

            }
            //return base.AuthorizeCore(httpContext);
        }

        public override void OnAuthorization(AuthorizationContext filterContext)
        {

            //base.OnAuthorization(filterContext);
            try
            {
                if (!filterContext.HttpContext.User.Identity.IsAuthenticated)
                {
                    filterContext.Result = new RedirectToRouteResult(new
                RouteValueDictionary(new { controller = "Account", action = "Login" }));
                }
               
            }
            catch (Exception)
            {
                base.HandleUnauthorizedRequest(filterContext);
            }
                //var controller = filterContext.RouteData.Values["controller"];
                //var action = filterContext.RouteData.Values["action"];
                //var id = filterContext.RouteData.Values["id"];

         
            
        
        }
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            
            filterContext.Result = new RedirectToRouteResult(
                new RouteValueDictionary {
                                            { "action", "Exception" },
                                            { "controller", "Account" },
                                            { "errorMsg", "Unauthorized!!" }
                                        }
                                       );
        }
    }
    public class CustExceptionFilter : FilterAttribute, IExceptionFilter
    {
        public void OnException(ExceptionContext filterContext)
        {
            filterContext.Controller.ViewBag.ExceptionMessage = "Custom Exception: Message from OnException method.";
        }
    }
}