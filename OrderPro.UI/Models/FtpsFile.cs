using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace OrderPro.UI.Models
{
    public class FtpsFile
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public int lblId { get; set; }

        //public string LocalStoredPath { get; set; }

        //public string EditedName { get; set; }

        //public string Instrument { get; set; }

        //public string Service { get; set; }

        //public decimal cost { get; set; }

        //public string Comments { get; set; }

        public bool IsUploaded { get; set; }
    }

    public class Imagetag {

        public string ImgId { get; set; }
        public string lableId { get; set; }
        public string Instruction { get; set; }
        public string Complexity { get; set; }
        public string DeliveryFormat { get; set; }
    }

   
}