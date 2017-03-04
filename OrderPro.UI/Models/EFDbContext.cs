using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
using OrderPro.Model;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Data.Objects;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;

namespace OrderPro.UI.Models
{
    //http://www.codeproject.com/Tips/1046526/Entity-Framework-Code-First-Auto-Migration-Using-A
   // http://www.codeproject.com/Articles/801545/Code-First-Migrations-With-Entity-Framework
    //enable-migrations
    //Now we add to the configuration settings in the Configuration class constructor, one to allow migration and another for no data loss when migrating. The excerpt of the Configuration class for these properties is:
    //AutomaticMigrationsEnabled = true;  
    //AutomaticMigrationDataLossAllowed = false; 
    //PM> Update-Database -Verbose

    public class EFDbContext : DbContext
    {
        public EFDbContext()
            : base("name=DbConnectionString")
        {

        }  
        public DbSet<AddOnService> AddOnServices { get; set; }

        public DbSet<BundleDiscount> BundleDiscounts { get; set; }

        public DbSet<Invoice> Invoices { get; set; }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<MainService> MainServices { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<OrderDelivery> OrderDeliverys { get; set; }

        public DbSet<OrderFiles> OrderFile { get; set; }

        public DbSet<OrderLine> OrderLines { get; set; }
        public DbSet<Complexity> Complexities { get; set; }

        public DbSet<ServiceUrl> ServiceUrls { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<AddOnService>().HasKey(k => k.Reference);
            modelBuilder.Entity<BundleDiscount>().HasKey(k => k.Reference);
            modelBuilder.Entity<Invoice>().HasKey(k => k.Reference);
            modelBuilder.Entity<Customer>().HasKey(k => k.UserId);
            modelBuilder.Entity<MainService>().HasKey(k=>k.Reference);
           
           
            modelBuilder.Entity<Order>().HasKey(k => k.Reference);
            modelBuilder.Entity<OrderDelivery>().HasKey(k => k.Reference);
            modelBuilder.Entity<OrderFiles>().HasKey(k => k.Reference);
            modelBuilder.Entity<Complexity>().HasKey(k => k.Reference);
            modelBuilder.Entity<OrderLine>().HasKey(k => k.Reference);

            modelBuilder.Entity<ServiceUrl>().HasKey(k=>k.Reference);

           base.OnModelCreating(modelBuilder);
        }


        /// <summary>
        /// Call Stored Procedure in Code First Approch
        /// to get Payment Summary of a given Order.Below is help link
        /// http://www.mikesdotnetting.com/article/299/entity-framework-code-first-and-stored-procedures
        /// </summary>
       
        public List<GetPaymentInfo_Result> GetPaymentResult(string OrderRef)
        {
            try
            {
                string query = "GetPaymentInfo @orderRef";
                SqlParameter orderref = new SqlParameter("@orderRef", OrderRef);

                List<GetPaymentInfo_Result> Result = new List<GetPaymentInfo_Result>();
                using (EFDbContext NewContext = new EFDbContext())
                {
                    Result = NewContext.Database.SqlQuery<GetPaymentInfo_Result>(query, orderref).ToList();
                }

                return Result;
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return null;
            }
        }


        public string GetOrderNo(string clientCode)
        {
            try
            {
                string query = "GetOrderNo @ClientCode";
                SqlParameter ClientCode = new SqlParameter("@ClientCode", clientCode);

                GetOrder result = new GetOrder();
                using (EFDbContext NewContext = new EFDbContext())
                {
                    result = NewContext.Database.SqlQuery<GetOrder>(query, ClientCode).SingleOrDefault();
                }

                return result.OrderNo ;

            }
            catch (Exception ex)
            {

                string ClientcodeErr = ex.Message;
                return null;
            }
        
        }

        public int? GetTotalOrderFile(string OrderRef,string FindComplexity)
        {
            try
            {


                SqlParameter param1 = new SqlParameter("@OrderRef", OrderRef);
                SqlParameter param2 = new SqlParameter("@FindComplexity",FindComplexity);
             
                using (EFDbContext NewContext = new EFDbContext())
                {
                    return NewContext.Database.SqlQuery<int>("GetTotalFileCount @OrderRef,@FindComplexity", param1,param2).Single();
                }
           
                
            }
            catch (Exception ex)
            {
                throw ex;
               // return null;
            }

        }
    }

    public class GetOrder {

        public string OrderNo { get; set; }
    }

  
}