const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});

function sendEmail(to, from, subject, text, html, deliveryTime) {
    const emailData = {
        from,
        to,
        subject,
        text,
        html
    };

    if (deliveryTime) {
        emailData["o:deliverytime"] = deliveryTime;
    }

    return mg.messages.create(process.env.MAILGUN_DOMAIN, emailData)
    .then(response => {
        console.log('Email sent:', response);
        return response;
    })
    .catch(error => {
        console.error('Failed to send email:', error);
        throw error;
    });
}

module.exports = { sendEmail };