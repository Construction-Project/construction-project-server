
const nodemailer = require('nodemailer');
// https://support.google.com/mail/answer/185833?hl=iw


const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user:  process.env.USER_MAIL,
    pass: process.env.PASSWORD_MAIL
  }
});
var requestNum,user
var mailOptions = {

  from: process.env.USER_MAIL,
  to: '36214087579@mby.co.il, 36213341860@mby.co.il,36213331556@mby.co.il',
  subject: `A new request #${requestNum} from ${user}`,
  text: 'Brachi veinfeild!',
};

var sendEmail=(requestId,initiatorsEmails,name,email,phone,addressProject,comments)=>{
  name==undefined?name=email:name;
  const content=`A new request was received from: ${name||''} email:  ${email||''} phone: ${phone||''} address of project: ${addressProject||''} comments: ${comments||''}`;
  mailOptions.subject=`A new request #${requestId} from ${name}`
  mailOptions.text=content;
  mailOptions.to=initiatorsEmails.toString();
  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})};

// https://support.google.com/mail/answer/185833?hl=iw


module.exports=sendEmail