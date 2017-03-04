using OrderPro.UI.App_Code;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using OrderPro.UI.Models;
using System.IO;

namespace OrderPro.UI.Controllers
{
   
    public class FtpsController : Controller
    {
        int i = 0;
        //http://sampathloku.blogspot.com/2014/02/dropzonejs-with-aspnet-mvc-5.html
        //http://stackoverflow.com/questions/275781/server-mappath-server-mappath-server-mappath-server-mappath


        /// <summary>
        /// http://stackoverflow.com/questions/28988018/how-can-i-upload-%C4%B0mage-ftp-server-asp-net-mvc
        /// 99.99% working link
        /// </summary>

        private variable var = new variable();

        /// <summary>
        /// this method responsible to upload a file from dropzone or any HttpPostedFileBase file on FTP location directly
        /// </summary>

        public ActionResult SaveUploadedFile(string OrderNo,string ClientCode)
        {

            

            string isSavedSuccessfully = "Failed";
            string ftpurl = @"ftp://####/#####/OrderFileUpload/" + ClientCode + "/" + OrderNo;

            //No Db connection for that Dummy .so return true <dated 04-March-17>
            isSavedSuccessfully = "success";
            return Json(new { Message = isSavedSuccessfully, UrlPath = ftpurl });
            //

            if (OrderNo != null && !string.IsNullOrEmpty(OrderNo) && ClientCode != null && !string.IsNullOrEmpty(ClientCode))
            {
                try
                {
                    i++;

                    foreach (string fileName in Request.Files)
                    {
                        HttpPostedFileBase file = Request.Files[fileName];

                        //Save file content goes here
                        string fName = file.FileName;

                        if (file != null && file.ContentLength > 0)
                        {
                            if (ftpurl == null && string.IsNullOrEmpty(ftpurl))
                            {
                                isSavedSuccessfully = "Directory path does not exists. Ftp Url:" + ftpurl + " File Name:" + fName + " File Count:" + Request.Files.Count.ToString();
                            }
                            else
                            {                            
                                var uploadfilename = file.FileName;
                                var username = ConstantMessage.CONST_UserName;
                                var password = ConstantMessage.CONST_Pass;
                                Stream streamObj = file.InputStream;
                                byte[] buffer = new byte[file.ContentLength];
                                streamObj.Read(buffer, 0, buffer.Length);
                                streamObj.Close();
                                streamObj = null;
                                ftpurl = String.Format("{0}/{1}", ftpurl, uploadfilename);

                             
                                var requestObj = FtpWebRequest.Create(ftpurl) as FtpWebRequest;
                                requestObj.Credentials = new NetworkCredential(username, password);
                                requestObj.Method = WebRequestMethods.Ftp.UploadFile;
                                requestObj.UseBinary = true;
                                requestObj.KeepAlive = true;
                                requestObj.UsePassive = true;  // it is true so that client should initiate a connection on the data port
                                requestObj.Timeout = 600000; //10 minutes

                                Stream requestStream = requestObj.GetRequestStream();
                                requestStream.Write(buffer, 0, buffer.Length);
                                requestStream.Flush();
                                requestStream.Close();
                                // requestObj.EnableSsl = true; //add 12-08-16
                                requestObj = null;

                                isSavedSuccessfully = "success";
                                //Session does not work on this shared hosting more then 20 minutes so we get all list from FTP
                             }
                           
                            #region CodeBlock
                            //var originalDirectory = new DirectoryInfo(string.Format("{0}Images\\WallImages", Server.MapPath(@"\")));
                            //string pathString = System.IO.Path.Combine(originalDirectory.ToString(), "imagepath");
                            //var fileName1 = Path.GetFileName(file.FileName);

                            //bool isExists = System.IO.Directory.Exists(pathString);

                            //if (!isExists)
                            //    System.IO.Directory.CreateDirectory(pathString);

                            //
                            //var path = string.Format("{0}\\{1}", pathString,fName );
                            //file.SaveAs(path);

                            //upload saved file on FTP

                            //UploadFileToFTP(path, file.FileName);

                            // ConstantMessage.UploadedFileList.Add(new FtpsFile { Id ="", Name = file.FileName, LocalStoredPath = filepath, EditedName =fName, IsUploaded = false });
                            //var list = ConstantMessage.uploadFileList.ToList();
                            #endregion
                        }
                        else
                            isSavedSuccessfully = "Path:" + ftpurl + ".File not found";

                    }

                }
                catch (Exception ex)
                {
                    isSavedSuccessfully = "Path:" + ftpurl + ".Inner exception saving file.Exp Message:" + ex.Message;
                }
            }
            else
            {
                ftpurl = "Order No Client Code is null.Order No:"+OrderNo+" Client Code: "+ClientCode;
            }
            return Json(new { Message = isSavedSuccessfully, UrlPath = ftpurl });
        }


        [HttpGet]
        public ActionResult InstructionType(string input)
        {          
            return PartialView("InstructionType");
        }


        #region HelperMethod
        
      




      

        //private List<FtpsFile> fileList;

        public List<FtpsFile> GetFileNames(string ftpAddress)
        {
            int index = 0;

           var fileList = new List<FtpsFile>();
            string uri = ftpAddress;
            FtpWebRequest reqFTP = (FtpWebRequest)FtpWebRequest.Create(uri);
            reqFTP.Credentials = new NetworkCredential("ingen1er", "r6c3c5S%f#7*");
            reqFTP.EnableSsl = false;
            reqFTP.KeepAlive = false;
            reqFTP.UseBinary = true;
            reqFTP.UsePassive = true;
            reqFTP.Method = WebRequestMethods.Ftp.ListDirectory;
            FtpWebResponse response = (FtpWebResponse)reqFTP.GetResponse();
            Stream responseStream = response.GetResponseStream();
            List<string> files = new List<string>();
            StreamReader reader = new StreamReader(responseStream);
            while (!reader.EndOfStream)
                files.Add(reader.ReadLine());
            reader.Close();
            responseStream.Dispose();

            //Loop through the resulting file names.
            foreach (var fileName in files)
            {
                var parentDirectory = "";

                //If the filename has an extension, then it actually is 
                //a file and should be added to 'fnl'.            
                if (fileName.IndexOf(".") > 0)
                {
                    fileList.Add(new FtpsFile { Id = "", lblId=index,  Name = fileName,IsUploaded=true }); //ftpAddress.Replace("ftp://pella.upload.akamai.com/140607/pella/", "http://media.pella.com/") +

                    index++;
                }
                else
                {
                    //If the filename has no extension, then it is just a folder. 
                    //Run this method again as a recursion of the original:
                    parentDirectory += fileName + "/";
                    try
                    {
                        GetFileNames(ftpAddress + parentDirectory);
                    }
                    catch (Exception)
                    {
                        //throw;
                    }
                }
                
            }

            return fileList;
        }


        public ActionResult Down()
        {
            //E:\ssc result (1).JPG
            //E:\SendMailMVC.rar
            // var bytes = System.IO.File.ReadAllBytes(@"E:\SendMailMVC.rar");

            //return File(bytes, "application/octet-stream");

            //Read file to byte array

            FileStream stream = System.IO.File.OpenRead(@"C:\Users\Public\Pictures\Sample Pictures\Chrysanthemum.jpg");  //E:\SendMailMVC.rar
            byte[] fileBytes = new byte[stream.Length];

            stream.Read(fileBytes, 0, fileBytes.Length);
            stream.Close();

            ////Begins the process of writing the byte array back to a file
            //using (Stream file = File.OpenWrite(@"c:\path\to\your\file\here.txt"))
            //{
            //    file.Write(fileBytes, 0, fileBytes.Length);
            //}

            return File(fileBytes, "application/octet-stream", "Chrysanthemum.jpg");
        }

        /// <summary>
        /// Working well we need to customize it
        /// </summary>
        //public void upload()
        //{
        //    FtpWebRequest ftpClient = (FtpWebRequest)FtpWebRequest.Create(ConstantMessage.CONST_FTPUrl + File.FileName);
        //    ftpClient.Credentials = new System.Net.NetworkCredential("ingen1er", "r6c3c5S%f#7*");
        //    ftpClient.Method = System.Net.WebRequestMethods.Ftp.UploadFile;
        //    ftpClient.UseBinary = true;
        //    ftpClient.KeepAlive = true;
        //    System.IO.FileInfo fi = new System.IO.FileInfo(@"C:\Users\Public\Pictures\Sample Pictures\Desert.jpg");
        //    ftpClient.ContentLength = fi.Length;
        //    byte[] buffer = new byte[4097];
        //    int bytes = 0;
        //    int total_bytes = (int)fi.Length;
        //    System.IO.FileStream fs = fi.OpenRead();
        //    System.IO.Stream rs = ftpClient.GetRequestStream();
        //    while (total_bytes > 0)
        //    {
        //        bytes = fs.Read(buffer, 0, buffer.Length);
        //        rs.Write(buffer, 0, bytes);
        //        total_bytes = total_bytes - bytes;
        //    }
        //    //fs.Flush();
        //    fs.Close();
        //    rs.Close();
        //    FtpWebResponse uploadResponse = (FtpWebResponse)ftpClient.GetResponse();
        //    var value = uploadResponse.StatusDescription;
        //    uploadResponse.Close();

        //}

        public bool UploadToFtp(HttpPostedFileBase uploadfile, string DirectoryPath)
        {
            try
            {
                var uploadurl = DirectoryPath;               //@"ftp://204.11.58.210/Test File Upload/";
                var uploadfilename = uploadfile.FileName;
                var username = "ingen1er";
                var password = "r6c3c5S%f#7*";
                Stream streamObj = uploadfile.InputStream;
                byte[] buffer = new byte[uploadfile.ContentLength];
                streamObj.Read(buffer, 0, buffer.Length);
                streamObj.Close();
                streamObj = null;
                string ftpurl = String.Format("{0}/{1}", uploadurl, uploadfilename);
                var requestObj = FtpWebRequest.Create(ftpurl) as FtpWebRequest;
                requestObj.Method = WebRequestMethods.Ftp.UploadFile;
                requestObj.UseBinary = true;
                requestObj.KeepAlive = true;
                requestObj.Credentials = new NetworkCredential(username, password);


                Stream requestStream = requestObj.GetRequestStream();
                requestStream.Write(buffer, 0, buffer.Length);
                requestStream.Flush();
                requestStream.Close();
                requestObj = null;
                return true;
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }

            return false;
        }
        #endregion
    }
}
