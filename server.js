const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const router = require('./routes/index')
const handlebars = require('hbs')
const hbs = require('hbs');
const hbsutils = require('hbs-utils')(hbs);
const bodyParser = require('body-parser')

app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
// app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/',router)

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

handlebars.registerPartials(__dirname + '/views/partials');
hbsutils.registerPartials('./views/partials');
hbsutils.registerWatchedPartials('./views/partials');

app.listen(port)