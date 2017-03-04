using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using OrderPro.UI.Models;
using OrderPro.Model;
using OrderPro.UI.App_Code;
using System.Data;

namespace OrderPro.UI.Repository
{
    public class OrderRepo : IOrder, IDisposable
    {
        EFDbContext context =new EFDbContext();


        public OrderRepo(EFDbContext context)
        {
            this.context = context;
        }

        public Order Save(Order entity)
        {

            try
            {

                context.Orders.Add(entity);
                context.SaveChanges();
                return entity;

            }
            catch (Exception ex)
            {
                string msg = ex.Message;
                return null;
            }


        }
        public IEnumerable<Order> GetOrderList()
        {            
                try
                {
                    return context.Orders.ToList();
                }
                catch (Exception)
                {
                    return null;
                }           

        }
        public Order Edit(Order entity)
        {

            try
            {
                context.Entry(entity).State = EntityState.Modified;
                context.SaveChanges();
                return entity;
            }
            catch (Exception)
            {
                return null;
            }

        }
        public Order Delete(Order entity)
        {
            try
            {
                context.Orders.Remove(entity);
                context.SaveChanges();
                return entity;
            }
            catch (Exception)
            {
                return null;
            }

        }
        public Order FindbyId(string reference)
        {
            try
            {
                Order order = context.Orders.Find(reference);
                return order;
            }
            catch (Exception)
            {
                return null;
            }

        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();

                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public Order order { get; set; }
    }
}