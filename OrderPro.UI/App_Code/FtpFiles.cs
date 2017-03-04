using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using OrderPro.UI.Models;
using System.Web.Mvc;

namespace OrderPro.UI.App_Code
{
    public class FtpFiles
    {

     
        public static string CreateFTPDirectory(string DirectoryName,string OrderNumber)
        {
            try
            {
                string path = ConstantMessage.CONST_FTPUrl + DirectoryName;
                //check is already exists
                bool IsExists = DirectoryExists(DirectoryName);

                if (!IsExists)
                {
                    WebRequest request = WebRequest.Create(path);
                    request.Method = WebRequestMethods.Ftp.MakeDirectory;
                    request.Credentials = new NetworkCredential(ConstantMessage.CONST_UserName, ConstantMessage.CONST_Pass);
                    using (var resp = (FtpWebResponse)request.GetResponse())
                    {
                        IsExists = true;
                    }
                }
                if (IsExists)
                {

                    //now create another 
                    path = path + "/" + OrderNumber;
                    //now create another Directory 
                    WebRequest request2 = WebRequest.Create(path);
                    request2.Method = WebRequestMethods.Ftp.MakeDirectory;
                    request2.Credentials = new NetworkCredential(ConstantMessage.CONST_UserName, ConstantMessage.CONST_Pass);
                    using (var resp2 = (FtpWebResponse)request2.GetResponse())
                    {
                        return path;
                    }                  
                }

              
                    return null;
              
            }
            catch (Exception ex)
            {

              string msg="Error:"+ ex.Message;
              return msg;
            
            }
        
        }


        //directory = @"ftp://ftp.example.com/Rubicon/";
        public static bool DirectoryExists(string directory)
        {
           
            bool directoryExists;
            
            directory = ConstantMessage.CONST_FTPUrl + directory + "/";

            var request = (FtpWebRequest)WebRequest.Create(directory);
            request.Method = WebRequestMethods.Ftp.ListDirectory;
            request.Credentials = new NetworkCredential(ConstantMessage.CONST_UserName, ConstantMessage.CONST_Pass);

            try
            {
                using (request.GetResponse())
                {
                    directoryExists = true;
                }
            }
            catch (WebException ex)
            {
                string msg = ex.Message;  //msg=The remote server returned an error: (550) File unavailable (e.g., file not found, no access).
                directoryExists = false;
            }         

            return directoryExists;
        }
            
        private void DeleteFileFromLocalPath(string LocalPath)
        {
            try
            {
            
            
            }
            catch (Exception)
            { 
            }
        
        }


        public static bool UploadFileToFTP(string FileLocalPath,string DistinationPath, string fileName)
        {
            try
            {
               

                //string Filename = Path.GetFileName(FileLocalPath);
                string CONST_FTPUrl = DistinationPath+"/"+fileName;   

                int bufferSize = 2048;
                
                int total_bytes = 0;

                FtpWebRequest ftpClient = (FtpWebRequest)FtpWebRequest.Create(CONST_FTPUrl);
                ftpClient.Credentials = new System.Net.NetworkCredential(ConstantMessage.CONST_UserName,ConstantMessage.CONST_Pass); 
                ftpClient.Method = System.Net.WebRequestMethods.Ftp.UploadFile;
                ftpClient.UseBinary = true;
                ftpClient.KeepAlive = true;

                System.IO.FileInfo fi = new System.IO.FileInfo(FileLocalPath);

                //Edited
                ftpClient.ContentLength = fi.Length;
                byte[] buffer = new byte[4097];
                int bytes = 0;
                total_bytes = (int)fi.Length;
                System.IO.FileStream fs = fi.OpenRead();
                System.IO.Stream rs = ftpClient.GetRequestStream();
                while (total_bytes > 0)
                {
                    bytes = fs.Read(buffer, 0, buffer.Length);
                    rs.Write(buffer, 0, bytes);
                    total_bytes = total_bytes - bytes;
                }
                //fs.Flush();
                fs.Close();
                rs.Close();
                FtpWebResponse uploadResponse = (FtpWebResponse)ftpClient.GetResponse();
                var value = uploadResponse.StatusDescription;
                uploadResponse.Close();

                return true;
            }
            catch (Exception)
            {
                //throw ex;
                return false;
            }
        }

        //check is given directory already exists
        //public string directoryExists(string directory, string mainDirectory)
        //{
        //    try
        //    {
        //        var list = this.GetFileList(mainDirectory);
        //        if (list != null)
        //        {
        //            if (list.Contains(directory))
        //                return "true";
        //            else
        //                return "false";
        //        }
        //        else
        //            return null;
        //    }
        //    catch (Exception)
        //    {
        //       // Console.WriteLine(ex.Message);
        //        return null;
        //    }
        //}

        //public string[] GetFileList(string path)
        //{
        //    var ftpPath = ConstantMessage.CONST_FTPUrl + "/" + path;
        //    var ftpUser = ConstantMessage.CONST_UserName;
        //    var ftpPass = ConstantMessage.CONST_Pass;
        //    var result = new StringBuilder();
        //    try
        //    {
        //        var strLink = ftpPath;
        //        var reqFtp = (FtpWebRequest)WebRequest.Create(new Uri(strLink));
        //        reqFtp.UseBinary = true;
        //        reqFtp.Credentials = new NetworkCredential(ftpUser, ftpPass);
        //        reqFtp.Method = WebRequestMethods.Ftp.ListDirectory;
        //        reqFtp.Proxy = null;
        //        reqFtp.KeepAlive = false;
        //        reqFtp.UsePassive = true;
        //        using (var response = reqFtp.GetResponse())
        //        {
        //            using (var reader = new StreamReader(response.GetResponseStream()))
        //            {
        //                var line = reader.ReadLine();
        //                while (line != null)
        //                {
        //                    result.Append(line);
        //                    result.Append("\n");
        //                    line = reader.ReadLine();
        //                }
        //                result.Remove(result.ToString().LastIndexOf('\n'), 1);
        //            }
        //        }
        //        return result.ToString().Split('\n');
        //    }
        //    catch (Exception)
        //    {
        //      //  Console.WriteLine("FTP ERROR: ", ex.Message);
        //        return null;
        //    }

        //    //finally
        //    //{
        //    //    ftpRequest = null;
        //    //}
        //}
    }
}