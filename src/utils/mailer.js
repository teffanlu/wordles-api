const nodemailer = require("nodemailer");
require('dotenv').config();

const mail = async (codigo, email) => {

  console.log(codigo, email);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'projectwordles@gmail.com',
      pass: 'cllh uenx ngao erib'
    },
  });

    // send mail with defined transport object
    await transporter.sendMail({
      from: '"Wordles" <'+ 'projectwordles@gmail.com' +'>', 
      to: email, 
      subject: "Hola!. Bienvenido a Wordles! ✔",
      text: "\nTu clave de acceso es: "+codigo
    });

  return 0;
}

module.exports = {
  mail
};