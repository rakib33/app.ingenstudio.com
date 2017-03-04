using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net.Mail;
using System.IO;

namespace OrderPro.UI.Models
{
    public class MailSender
    {

        //http://www.codeproject.com/Articles/874218/Send-Emails-By-Using-Email-Templates-in-ASP-NET-MV

        public static bool SendingMail(string FromMail,string FromPassword,string toUser,string subject,string Body,string CC)
        {
            try
            {
               
                #region SENDMAIL FROM INGEN STUDIO HOST               

                MailMessage message = new MailMessage();
                MailAddress fromAddress = new MailAddress(FromMail);
                message.From = fromAddress;
                message.IsBodyHtml = true;


                //If Successfull send message both user and support
                if (toUser != null && !string.IsNullOrEmpty(toUser))
                {
                    message.To.Add(toUser);
                    if (CC != null && !string.IsNullOrEmpty(CC))
                    {
                        message.CC.Add(CC);
                        //message.Bcc.Add("rakib33mbstu@.com");
                    }
                }
                else  //if failed then send mail only support
                {
                    //if error
                    message.To.Add(CC);
                    // message.Bcc.Add("rakib33mbstu@.com");
                }

                message.Subject = subject;
                message.Body = Body;
                SmtpClient client = new SmtpClient("localhost");
                client.Timeout = 30000;
                client.Credentials = new System.Net.NetworkCredential(FromMail, FromPassword);
                client.Send(message);


                #endregion


                #region SEND MAIL FROM LOCAL SERVER

                //MailMessage mail = new MailMessage();
                //SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
                //mail.From = new MailAddress("rakib@bosl-int.com");

                //if (toUser != null && !string.IsNullOrEmpty(toUser))
                //{
                //    mail.To.Add(toUser);
                //    if (CC != null && !string.IsNullOrEmpty(CC))
                //    {
                //        mail.CC.Add(CC);
                      
                //    }
                //}
                //else
                //{
                //    //if error
                //    mail.To.Add(CC);
                   
                //}


                //mail.Subject = subject;
                //mail.Priority = MailPriority.High;// added 9/9/2016
                //mail.Body = Body;

                //mail.IsBodyHtml = true;
                //SmtpServer.Port = 587;
                //SmtpServer.Timeout = 30000;

                //SmtpServer.Credentials = new System.Net.NetworkCredential("rakib33mbstu@.com", "<password>");
                //SmtpServer.EnableSsl = true;
                //SmtpServer.Send(mail);

                #endregion

                return true;
            }
            catch (Exception ex)
            {
                string ms = ex.Message;
                //Console.WriteLine(ex.ToString());
            }
            return false;
        }

              

    }
}