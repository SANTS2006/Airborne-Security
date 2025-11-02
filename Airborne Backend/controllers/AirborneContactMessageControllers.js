const nodeMailer = require('nodemailer');
const transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_NAME,
        pass: process.env.GMAIL_PASSWORD
    }
})

const postMessage = async(req, res) => {
    console.log('Post Message route hit');
    console.log('Req body ', req.body);
    const {FirstName, LastName, Email, Subject, Message} = req.body;
    try {
        await transporter.sendMail({
            from: process.env.GMAIL_EMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: `${Subject} --- ${FirstName} ${LastName}`,
            text: ` ${Message}`
        });
        await transporter.sendMail({
            from:'Airborne Security Company',
            to: Email,
            subject: 'Message received',
            text: `Dear ${FirstName} ${LastName}, your message has been received successfully`
        })
    res.status(200).json({message: 'Form data received thank you for submitting your message'});
    } 
    catch (mailError) {
        console.log(mailError);
        res.status(400).json({message: mailError.message});
    }
}

module.exports = {postMessage};