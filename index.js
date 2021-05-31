const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require('./db')
var flash = require('connect-flash');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./controller/customercontroller');

app.use(flash())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
