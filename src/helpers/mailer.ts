// import nodemailer from "nodemailer"
// import bcrypt from 'bcrypt'
// import User from "@/models/userModels";

// interface SendEmailOptions {
//     email: string;
//     emailType: string;
//     userId: string;
//   }

// export const sendEmail = async({email, emailType, userId}: SendEmailOptions): Promise<nodemailer.SentMessageInfo> => {

//     try {
       
//         // TODO: configure mail for usage. 

//         const hashedToken = await bcrypt.hash(userId.toString(), 10) // this hash is take care of special char too

//         if(emailType === "VERIFY") {
//           await User.findByIdAndUpdate(userId, {verifyToken: hashedToken,  verifyTokenExpiry: Date.now() + 3600000})
//         } 
//         else if(emailType === "VERIFY") {
//           await User.findByIdAndUpdate(userId, {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000})
//         }

//         // const transporter = nodemailer.createTransport({
//         //     host: "smtp.ethereal.email",
//         //     // port: 587,
//         //     port: 465,
//         //     secure: true, // Use `true` for port 465, `false` for all other ports
//         //     auth: {
//         //       user: "maddison53@ethereal.email",
//         //       pass: "jn7jnAPss4f63QBp6D",
//         //     },
//         //   });
         
//         const transport = nodemailer.createTransport({
//           host: "jhghjgj",
//           port: bvbnn,
//           auth: {
//             user: "tfytfhgfh",
//             pass: "jhghjgh"
//           }
//         });

//         const mailOptions = {
//             from: 'priyanka@universe.ai', // sender address
//             to: email, // list of receivers
//             subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password", // Subject line // emailType kon sa hai verify of password change
//             // text: "Hello world?", // plain text body
//             html: `<b> Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"} or copy and paste 
//             the link below in your browser <br>  ${process.env.DOMAIN}/verifyemail?token=${hashedToken} </b>`, // html body
//         }

//        const mailResponse =  await transport.sendMail(mailOptions)
//        return mailResponse;

//     } catch (error: any) {
//         console.error('Error sending email:', error.message);
//         throw new Error(error.message);
//     }
// }


import nodemailer from "nodemailer";
import bcrypt from 'bcrypt';
import User from "@/models/userModels";

interface SendEmailOptions {
    email: string;
    emailType: string;
    userId: string;
}

export const sendEmail = async({email, emailType, userId}: SendEmailOptions): Promise<nodemailer.SentMessageInfo> => {

    try {
        // Hash the userId to create a secure token
        const hashedToken = await bcrypt.hash(userId.toString(), 10);

        // Update the user record in the database with the appropriate token
        if(emailType === "VERIFY") {
            console.log("Verify Section")
         const updateUser =   await User.findByIdAndUpdate(userId, {
                $set: {
                    verifyToken: hashedToken,  
                    verifyTokenExpiry: Date.now() + 3600000 // Token expires in 1 hour
                }
            });
            console.log("Updated User for VERIFY", updateUser)
        } 
        else if(emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                $set: {
                    forgotPasswordToken: hashedToken, 
                    forgotPasswordTokenExpiry: Date.now() + 3600000 // Token expires in 1 hour
                }
            });
        }

        // Set up the mail transporter using environment variables
        const transport = nodemailer.createTransport({
            host: process.env.MAIL_HOST, // using environment variables
            port: Number(process.env.MAIL_PORT),
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        // Define the email options
        const mailOptions = {
            from: 'priyanka@universe.ai', // sender address
            to: email, // list of receivers
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password", // Subject line
            html: `<b> Click <a href="${process.env.DOMAIN}/pages/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"} or copy and paste 
            the link below in your browser <br>  ${process.env.DOMAIN}/pages/verifyemail?token=${hashedToken} </b>`, // html body
        }

        // Send the email and return the response
        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;

    } catch (error: any) {
        console.error('Error sending email:', error.message);
        throw new Error(error.message);
    }
};
