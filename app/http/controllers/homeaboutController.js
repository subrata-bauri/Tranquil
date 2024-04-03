const sendMail = require('../../../routes/mail')

function homeaboutController() {
    return {
        index(req, res) {
            return res.render('index')
        },
        about(req, res) {
            return res.render('about');
        },
        appointment(req, res) {
            console.log('Data: ', req.body);
            const { department, doctor, name, email, date, time } = req.body;
            sendMail(
              department, doctor, name, email, date, time
            )
          }
    }
}

module.exports = homeaboutController