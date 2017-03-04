/*
 * BOSLEmailer3 : A class/library for sent email via windows application using .NET Framework 3.5. 
 * Developed for Business Object Solutions Ltd.
 * Developed by Md. Nazmul Ahsan and Md. Zahidul Islam
 * Tested in LCM - Remittance email advice program and BOSL Backup.
 * 
 * ..... Revision History ......
 * Date      Revision By         Comments
 * -----------------------------------------------
 * 
 * 
 */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.Net.Mail;
using System.Threading;
using System.Data;
using System.Data.Odbc;
using System.Data.OleDb;

namespace OrderPro.UI.Models 
{
    /// <summary>
    /// Email sender Class for BOSL. Copyright 2008 Busniess Object Solution Ltd.
    /// </summary>
  public class BOSLEmailer3
    {
        #region variable
        public string id {get; set; }
      
        private string _From = string.Empty;
        private string _To = string.Empty;
        private string _CC = string.Empty;
        private string _BCC = string.Empty;

        private string _Subject = string.Empty;
        private string _Body = string.Empty;
        private List<string> _AttachmentPath = new List<string>();

        private string _Host = "127.0.0.1";
        private int _Port = 25;        
        private bool _IsHtml = false;
        private string _User = string.Empty;
        private string _Password = string.Empty;

        public bool _SendAsync = true;
        
        public int _SendUsing = 0;//0 = Network, 1 = PickupDirectoryfromiis , 2 = SpecifiedPickupDirectory
		public bool _UseSSL;
		public int _AuthenticationMode;//0 = No authentication, 1 = Plain Text, 2 = NTLM authentication

        

        #endregion

        #region Email Class properties
        //==================Properties========================
        ///<summary>
        ///Get or set Form accountNumber. who is sending email
        ///</summary>           
        /// <returns>String</returns>
        public string Form
        {
            get { return this._From; }
            set { _From = value; }
        }

      ///<summary>
      ///Get or set To accountNumber. who is receive email
      ///</summary>
      /// <returns>String</returns>
        public string To
        {
            
            get { return this._To; }
            set { _To = value; }
        }

        ///<summary>
        ///Get or set CC accountNumber. Email "Carbon Copy"
        ///</summary>
        /// <returns>String</returns>
        public string Cc
        {            
            get { return this._CC; }
            set { _CC = value; }
        }

        ///<summary>
        ///Get or set Bcc accountNumber. Email "Carbon Copy"
        ///</summary>
        /// <returns>String</returns>
        public string Bcc
        {
            get { return this._BCC; }
            set { _BCC = value; }
        }

        ///<summary>
        ///Get or set Email subject.
        ///</summary>
        /// <returns>String</returns>
        public string Subject
        {
            
            get { return this._Subject; }
            set { _Subject = value; }
        }


        ///<summary>
        ///Get or set Email Message.
        ///</summary>
        /// <returns>String</returns>
        public string Body
        {            
            get { return this._Body; }
            set { _Body = value; }
        }


        ///<summary>
        ///Get or set attach file path.
        ///</summary>
        /// <returns>String</returns>
        public List<string> AttachmentPath
        {            
            get { return this._AttachmentPath; }
            set { _AttachmentPath = value; }
        }


        ///<summary>
        ///Get or set SMTP server name. Ex. smtp.gmail.com
        ///</summary>
        /// <returns>String</returns>
        public string SMTPServer
        {           
            get { return this._Host; }
            set { _Host = value; }
        }


        ///<summary>
        ///Get or set Server port number.
        ///</summary>
        /// <returns>Integer</returns>
        public int PortNum
        {
            
            get { return this._Port; }
            set { _Port = value; }
        }


        ///<summary>
        ///Get or set message body to allow html format
        ///</summary>
        /// <returns>Boolean</returns>
        public bool IsHtml
        {            
            get { return this._IsHtml; }
            set { _IsHtml = value; }
        }

        ///<summary>
        ///set SMTP server access user name.
        ///</summary> 
        /// <returns>String</returns>
        public string UserName
        {
            get { return _User; }
            set { _User = value; }
           
        }

        ///<summary>
        ///set SMTP server access password.
        ///</summary>   
        /// <returns>String</returns>
        public string Password
        {
            get { return _Password; }
            set { _Password = value; }
        }


        ///<summary>
        ///Get or set media of delivey mode. 0 = Network, 1 = PickupDirectory, 2 = SpecifiedPickupDirectory
        ///</summary>
        /// <returns>Integer</returns>
        public int SendUsing
        {            
            get { return this._SendUsing; }
            set { _SendUsing = value; }
        }


        ///<summary>
        ///Set SSL layer.
        ///</summary>    
        /// <returns>Boolean</returns>
        public bool IsUseSSL
        {
            get { return _UseSSL; }
            set { _UseSSL = value; }
        }

        ///<summary>
        ///Set authentication mode of SMTP server. 0 = No authentication, 1 = Plain Text, 2 = NTLM authentication
        ///</summary>  
        /// <returns>Integer</returns>
        public int AuthenticationMode
        {
            get { return _AuthenticationMode;}
            set { _AuthenticationMode = value; }
        }

        ///=============End Properties==============

        #endregion

        ///<summary>
        ///The main function of the class. This need to be call from other class to send email.
        ///<summary>
        ///<return>Boolean</return>
		public void SendEmail()
		{
            //new Thread(new ThreadStart(SendMessage)).Start();
            SendMessage();
           
		}      

        /// <summary>
        /// Subfunction of Send Email.
        /// </summary>
        /// <returns>Boolean</returns>
		private void SendMessage()
		{
			try
			{
				MailMessage oMessage = new MailMessage();
                SmtpClient smtpClient = new SmtpClient(_Host);
			                
                oMessage.From = new MailAddress(_From);
                //oMessage.To.Add(_To);

                if (_To != string.Empty)
                {
                    //Updated by Nazmul:12-01-2014
                    //This will allow multiple email address seperated by ','
                    string[] to = _To.Split(',');

                    foreach (string toAddredd in to)
                    {
                        oMessage.To.Add(toAddredd);
                    }
                }

				oMessage.Subject = _Subject;
                oMessage.IsBodyHtml = _IsHtml; 
				oMessage.Body = _Body;

                if (_CC != string.Empty)
                {
                    //Updated by Nazmul:12-01-2014
                    //This will allow multiple email address seperated by ','
                    string[] cc = _CC.Split(',');

                    foreach (string ccAddredd in cc)
                    {
                        oMessage.CC.Add(ccAddredd);
                    }
                }

                if (_BCC != string.Empty)
                {
                    //Updated by Nazmul:12-01-2014
                    //This will allow multiple email address seperated by ','
                    string[] bcc = _BCC.Split(',');

                    foreach (string bccAddredd in bcc)
                    {
                        oMessage.Bcc.Add(bccAddredd);
                    }
                }

                switch (_SendUsing)
                { 
                    case 0:
                        smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                        break;
                    case 1:
                        smtpClient.DeliveryMethod = SmtpDeliveryMethod.PickupDirectoryFromIis;
                        break;
                    case 2:
                        smtpClient.DeliveryMethod = SmtpDeliveryMethod.SpecifiedPickupDirectory;
                        break;
                    default :
                        smtpClient.DeliveryMethod=SmtpDeliveryMethod.Network;
                        break;
                
                }			
               

				if(_AuthenticationMode > 0)
				{
                    smtpClient.Credentials = new NetworkCredential(_User,_Password);
				}                			
                
                smtpClient.Port = _Port;
                smtpClient.EnableSsl = _UseSSL;

				/// Create and add the attachment
				if(_AttachmentPath.Count > 0)
				{
                    foreach (string item in _AttachmentPath)
                    {
                        oMessage.Attachments.Add(new Attachment(item));
                    }                    
				}

				try
				{
					/// Deliver the message	

                    if (_SendAsync)
                        smtpClient.SendAsync(oMessage, _User);
                    else
                        smtpClient.Send(oMessage);
                          
				}
				
                catch( Exception )
				{
                    throw;
				}                				
                
			}
			catch(Exception )
			{
                throw;
			}
		}
   

    }//$$$$$$$$$$$$$$$$$$$$$$$$
}//#############################
