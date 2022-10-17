const nodeMailer = require("nodemailer");
const config = require("./../config");

const listemail = [
  `noreply@${config.DOMAIN.replace("https://", "")}`,
  `no-reply@${config.DOMAIN.replace("https://", "")}`,
];

const adminEmail = config.MAIL_USERNAME;
const adminPassword = config.MAIL_PASSWORD;
const emailHost = config.MAIL_HOST;
const emailPort = config.MAIL_PORT;
const emailService = config.MAIL_SERVICE;
const debug = config.DEBUG;

const sendMail = (to, subject, htmlContent) => {
  const rd = Math.floor(Math.random() * 2);
  const transporter = nodeMailer.createTransport({
    service: emailService,
    host: emailHost,
    port: emailPort,
    secure: false,
    secureConnection: false,
    tls: {
      ciphers: "SSLv3",
    },
    debug: debug,
    requireTLS: false,
    auth: {
      user: adminEmail,
      pass: adminPassword,
    },
  });
  const options = {
    from: `${config.TITLE_SITE} <${listemail[rd]}>`,
    to: to,
    subject: subject,
    html: htmlContent,
  };
  return transporter.sendMail(options);
};
module.exports = {
  sendMail,
};
