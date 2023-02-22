const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, //replace with your email provider
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_HOST_USER,
    pass: process.env.EMAIL_HOST_PASSWORD,
  },
});
// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.post('/call_request/', (req, res) => {

    const data = req.body;
    let emailTextBody = `<b>Имя:</b> ${data.name}<br> 
                        <b>Номер телефона:</b> ${data.phone}<br>
                        <b>Email:</b> ${data.email}<br>`

    const mail = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'British Bro: Заполнена форма обратной связи на сайте',
      text: emailTextBody,
      html: emailTextBody
    };

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.status(500).json({"message": "Something went wrong."});
      } else {
        res.status(200).json({'message': "OK!"});
      }
    });
})

export default {
  path: '/send/',
  handler: app
}