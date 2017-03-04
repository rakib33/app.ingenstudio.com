using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrderPro.UI.Models
{
    public class PaymentViewModel
    {

        public string ServiceName { get; set; }
        public double BaseRate { get; set; }

        
        public string ComplexityName { get; set; }
        public int ComplexImgeQty { get; set; }
        public double ComplexityRate { get; set; }
        public double ComplexityAmount { get; set; }

        public string AddOnsName { get; set; }
        public double AddOnsRate { get; set; }
        public double AddOnsAmount { get; set; }

        public string DeliveryName { get; set; }
        public double DeliveryCharge { get; set; }

        
        public int TotalImage { get; set; }                                 
        
        public double Amount { get; set; }
        public double NetSum { get; set; }
        public double NetTotal { get; set; }
     
        public double Discount { get; set; }  //
        public double NetPayment { get; set; }


    }

    public class SubPayment
    { 
        //Complexity
        public string ComplexityName { get; set; }
        public double ComplexityRate { get; set; }
        public double BaseRate { get; set; }
        public string ServiceName { get; set; }
        //AddOns
        public string AddOnsName { get; set; }
        public int TotalImage { get; set; }                   
        public double AddOnsAmount { get; set; }
    }

    public partial class GetPaymentInfo_Result
    {
        public string Header { get; set; }
        public string Name { get; set; }
        public Nullable<decimal> Rate { get; set; }
        public Nullable<int> TotalImages { get; set; }
        public Nullable<decimal> Amount { get; set; }
    }
}