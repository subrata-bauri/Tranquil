const contactController = require('../app/http/controllers/contactController');
const homeaboutController = require('../app/http/controllers/homeaboutController');
const serviceController = require('../app/http/controllers/serviceController');

function initRoutes(app) {
    app.get('/', homeaboutController().index);
    app.post('/', homeaboutController().appointment);
    app.get('/about', homeaboutController().about);
    app.get('/contact', contactController().contact);
    app.post('/contact', contactController().postContact);
    app.get('/service', serviceController().service);
    app.get('/doctors', serviceController().doctors);
}

module.exports = initRoutes