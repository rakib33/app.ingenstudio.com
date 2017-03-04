using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OrderPro.Model;

namespace OrderPro.UI.Repository
{
    interface IOrder
    {
        Order Save(Order entity);      
        IEnumerable<Order> GetOrderList();
        Order Edit(Order entity);
        Order Delete(Order entity);
        Order FindbyId(string reference);
    }
}
