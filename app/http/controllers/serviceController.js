function serviceController() {
    return {
        service(req, res) {
            return res.render('service');
        },
        doctors(req, res) {
            return res.render('doctors');
        }
    }
}

module.exports = serviceController