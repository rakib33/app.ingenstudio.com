using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OrderPro.UI.Models;
using OrderPro.Model;

namespace OrderPro.UI.Interface
{
   public interface IOrder :IDisposable
    {
       Order Save(Order entity);
       IEnumerable<Order> List { get; }
       Order Edit(Order entity);
       Order Delete(Order entity);
       Order FindbyId(string reference);     


    }
}
