//using System;
//using System.Data.Entity;
//using System.Data.Entity.Infrastructure;
//using System.Threading;
//using System.Web.Mvc;
//using WebMatrix.WebData;
//using OrderPro.UI.Models;

//namespace OrderPro.UI.Filters
//{
//    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
//    public sealed class InitializeSimpleMembershipAttribute : ActionFilterAttribute
//    {
//        private static SimpleMembershipInitializer _initializer;
//        private static object _initializerLock = new object();
//        private static bool _isInitialized;

//        public override void OnActionExecuting(ActionExecutingContext filterContext)
//        {
//            // Ensure ASP.NET Simple Membership is initialized only once per app start
//            try
//            {
//                LazyInitializer.EnsureInitialized(ref _initializer, ref _isInitialized, ref _initializerLock);
//            }
//            catch (Exception ex)
//            {
//                string ms = ex.Message;
//              //to do return error page.
//            }
//        }

//        private class SimpleMembershipInitializer
//        {
//            public SimpleMembershipInitializer()
//            {
//                Database.SetInitializer<EFDbContext>(null);

//                try
//                {
//                    using (var context = new EFDbContext())
//                    {
//                        if (!context.Database.Exists())
//                        {
//                            // Create the SimpleMembership database without Entity Framework migration schema
//                            ((IObjectContextAdapter)context).ObjectContext.CreateDatabase();
//                        }
//                    }

//                WebSecurity.InitializeDatabaseConnection("DbConnectionString", "Customer", "UserId", "Email", autoCreateTables: true);
                  
//                }
//                catch (Exception ex)
//                {                       
//                    throw new InvalidOperationException("Failed to Initialized User", ex);
//                }
//            }
//        }
//    }
//}
