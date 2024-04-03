const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASS
    }
});

const sendMail = (department,doctor,name,email,date,time) => {

    var mailOptions = {
        from: `${email}`,
        to: 'subratabauri2014@gmail.com',
        subject: `Appointment from ${name}`,
        html: `<h2>Doctor Name: ${doctor}</h2><br><h2>Department: ${department}</h2><br>
                <h2>Patient Name: ${name}</h2><br>
                <h2>Patient Email: ${email}</h2><br>
                <h2>Date & Time: ${date} ${time}</h2>`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Email sent: ' + info.response)
        }
    })
}

module.exports = sendMail;