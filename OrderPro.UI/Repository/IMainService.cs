using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using OrderPro.Model;

namespace OrderPro.UI.Repository
{
   public interface IMainService
    {
       IEnumerable<MainService> GetMainService();
    }
}
