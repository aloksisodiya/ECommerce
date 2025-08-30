import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host:'smtp-relay.brevo.com',
    port:587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass:process.env.SMTP_PASS,
    },
});

// export default transporter;

// const transporter = nodemailer.createTransport(
//     {
//         secure:true,
//         host:"smtp.gmail.com",
//         port:465,
//         auth:{
//             user:"aloksisodiya30@gmail.com",
//             pass:"rznwdjoibuxntyht"
//         }
//     }
// );

// function sendMail(to,sub,msg){
//     transporter.sendMail({
//         to:to,
//         subject:sub,
//         html:msg
//     });
// }

// sendMail("aloksisodiya30@gmail.com","subject","Test message");

export default {transporter};