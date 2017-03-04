using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OrderPro.UI.App_Code
{
    public class variable
    {

        public string CompanyName { get; set; }
        public string UserName { get; set; }
        public int UserId { get; set; }

        //create a directory on Ftp named client code 
        public string ClientCode { get; set; }
        public string OrderNumber { get; set; }
        public string OrderRef { get; set; }
        public string ServiceRef { get; set; }

        public bool CreateDirectory { get; set; }
        public string DirectoryPath { get; set; }
        public string FilePath { get; set; }
        public bool IsUpload { get; set; }
        public string AccountType { get; set; }
        public string PaymentType { get; set; }

        public string ImageId { get; set; }
        public string LableId { get; set; }
        public string Instruction { get; set; }

        public double DeliveryCharge { get; set; }
        public double netSum { get; set; }
        public double netTotal { get; set; }

        public string ServiceCatagoryName { get; set; }

        public string CodeNumber { get; set; }

        public string TransactionId { get; set; }

        public List<string> TransactionCollection { get; set; }

        public bool IsAllFileUpload { get; set; }
    
    }
}