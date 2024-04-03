function contactController() {
    return {
        contact(req, res) {
            return res.render('contact');
        },
        postContact(req, res) {
            const { name, email, phone, message } = req.body
            if(!name || !email || !phone || !message) {
                return res.redirect('/contact')
            }
            const contact = new Contact({
                name,
                email,
                subject,
                message
            })

            contact.save().then((contact) => {
                return res.redirect('/contact')
            }).catch(err => {
                
            })
        },
    }
}

module.exports = contactController