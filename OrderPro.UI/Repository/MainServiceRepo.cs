using OrderPro.Model;
using OrderPro.UI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrderPro.UI.Repository
{
    public class MainServiceRepo : IMainService, IDisposable
    {
        EFDbContext context = new EFDbContext();
        public IEnumerable<MainService> GetMainService()
        {
            try
            {
                
                // return context.Orders.ToList();
                //create a Dummy List 
                List<MainService> ServiceList = new List<MainService>();
                ServiceList.Add(new MainService { Reference = "1", Description = "Remove or change background", Name = "Remove Background", Rate = 1.5, Status="Active",Currency="USD", AllowDiscount=true, ServiceCategory="E-Commerce", ServiceIcon="hook.png", SelectedIcon="hook-blue.png"});
                ServiceList.Add(new MainService { Reference = "2", Description = "3D Ghost Mannequin", Name = "Neck Joint/3D Ghost Mannequin", Rate = 1.75, Status = "Active", Currency = "USD", AllowDiscount = true, ServiceCategory = "E-Commerce", ServiceIcon = "shirt.png", SelectedIcon = "shirt-blue.png" });
                ServiceList.Add(new MainService { Reference = "3", Description = "Real Estate Image Enhancement", Name = "Image Enhancement", Rate = 1.25, Status = "Active", Currency = "USD", AllowDiscount = false, ServiceCategory = "E-Commerce", ServiceIcon = "scissor.png", SelectedIcon = "scissor-blue.png" });
                ServiceList.Add(new MainService { Reference = "4", Description = "Wedding/Fashion/Jewelry", Name = "Retouching/Restoration", Rate = 1.5, Status = "Active", Currency = "USD", AllowDiscount = true, ServiceCategory = "E-Commerce", ServiceIcon = "clip.png", SelectedIcon = "clip-blue.png" });

                return ServiceList.ToList();

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
    }
}