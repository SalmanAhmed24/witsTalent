import nextConnect from "next-connect";
import multer from "multer";

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method "${req.method}" Not Allowed` });
  },
});

apiRoute.use(multer().any());

apiRoute.post((req, res) => {
  console.log("!!!!!", req.body); // Your form data
  // Any logic with your data here
  var nodemailer = require("nodemailer");
  var transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    auth: { user: "info@staffhunter.io", pass: "reactive_007" },
    secure: true,
  });
  var mailOptions = {
    from: "info@staffhunter.io",
    to: "info@staffhunter.io",
    subject: "Get Started as Company",
    html: `<h3>Name:</h3><p>${req.body.f_name}</p><h3>Email:</h3><p>${req.body.email}</p><h3>Phone:</h3><p>${req.body.phone}</p><h3>Hiring For:</h3><p>${req.body.hiringFor}</p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ data: "success" });
    }
  });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
// const handler = async (req, res) => {
//   console.log("this is req", req.body);
// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
// 	host: 'smtp.hostinger.com',
// 	port: 465,
// 	auth: { user: 'info@eminentconsultingandservices.com', pass: 'Eminent@654321' },
// 	secure: true
// });
// var mailOptions = {
// 	from: 'info@eminentconsultingandservices.com',
// 	to: 'info@eminentconsultingandservices.com',
// 	subject: 'Contact Form Submitted from website',
// 	html: `<h3>Name:</h3><p>${req.body.name}</p><h3>Email:</h3><p>${req.body.email}</p><h3>Phone:</h3><p>${req.body
// 		.phone}</p><h3>Service:</h3><p>${req.body.service}</p><h3>Message:</h3><p>${req.body.message}</p>`
// };

// transporter.sendMail(mailOptions, function(error, info) {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log('Email sent: ' + info.response);
// 		res.json({ status: 'OK' });
// 	}
// });
// };
// export default handler;
