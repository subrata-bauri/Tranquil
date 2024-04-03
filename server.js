require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs')
const favicon = require('serve-favicon');
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 3300;
const nodemailer = require("nodemailer");
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const sendMail = require('./routes/mail')

// Database connection
mongoose.connect(process.env.MONGO_CONNECTION_URL);
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error: "));
connection.once("open",() => {
  console.log("Database Connected...");
});


// assets path
app.use(express.static('public'));
// app.use(favicon(path.join(__dirname, './public/img/favicon.ico')));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());

// set template engine
const viewPath = path.join(__dirname, './views')
app.use(expressLayout);
app.set('views', viewPath);
app.set('view engine', 'ejs');

require('./routes/web')(app);

app.use((req, res) => {
  res.status(404).render('404')
})

// // nodemailer
// app.post('/', (req, res) => {
//   console.log('Data: ', req.body);
//   const { department, doctor, name, email, date, time } = req.body;
//   sendMail(
//     department, doctor, name, email, date, time
//   )
// })

const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});