const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const bodyParser = require('body-parser');
const handlebars = require('hbs');
const hbs = require('hbs');
const hbsutils = require('hbs-utils')(hbs);

// Import your routes
const router = require('../routes/index');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up static files
// Note: In Netlify Functions, we need to handle static files differently
app.use(express.static(path.join(__dirname, '../public')));

// Set up view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

// Register partials
handlebars.registerPartials(path.join(__dirname, '../views/partials'));
hbsutils.registerPartials(path.join(__dirname, '../views/partials'));

// Use your routes
app.use('/', router);

// Export the serverless function
module.exports = app;
module.exports.handler = serverless(app);
