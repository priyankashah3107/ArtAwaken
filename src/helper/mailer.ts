import nodemailer from "nodemailer"

interface SendEmailOptions {
    email: string;
    emailType: string;
    userId: string;
  }

export const sendEmail = async({email, emailType, userId}: SendEmailOptions): Promise<nodemailer.SentMessageInfo> => {

    try {
       
        // TODO: configure mail for usage. 

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            // port: 587,
            port: 465,
            secure: true, // Use `true` for port 465, `false` for all other ports
            auth: {
              user: "maddison53@ethereal.email",
              pass: "jn7jnAPss4f63QBp6D",
            },
          });
           
        const mailOptions = {
            from: 'priyanka@universe.ai', // sender address
            to: email, // list of receivers
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password", // Subject line // emailType kon sa hai verify of password change
            // text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        }

       const mailResponse =  await transporter.sendMail(mailOptions)
       return mailResponse;

    } catch (error: any) {
        console.error('Error sending email:', error.message);
        throw new Error(error.message);
    }
}