const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = ({ email }) => {
    const code = require('../utils/randomInt')()
    sgMail.send({
        to: email,
        from: 'no-reply@example.com',
        subject: 'Example Subject',
        text: `Welcome to Example Company! Your confirmation code is ${code}. Feel free to email me with feedback through the contact page and good luck training!`
    })
    return code
}

const sendCancelationEmail = ({ email }) => {
    const code = require('../utils/randomInt')()
    sgMail.send({
        to: email,
        from: 'no-reply@example.com',
        subject: 'Example Subject',
        text: `If there is something we could do better please let us know at reply@example.com. Your 4 digit code is ${code}.`
    })
    return code
}

const sendChangePasswordEmail = ({ email }) => {
    const code = require('../utils/randomInt')()
    sgMail.send({
        to: email,
        from: 'no-reply@workoutsharer.com',
        subject: 'Example Subject',
        text: `Your 4 digit code to change your password is ${code}.`
    })
    return code
}

const sendUsEmail = ({ email, subject, content }) => {
    sgMail.send({
        to: 'reply@example.com',
        from: email,
        subject: subject,
        text: content
    })
}

const sendEmail = ({ sender, recipient, subject, content }) => {
    sgMail.send({
        to: recipient,
        from: sender,
        subject: subject,
        text: content
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
    sendChangePasswordEmail,
    sendUsEmail,
    sendEmail
}