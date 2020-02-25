//Define Dependencies
const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//Connect to DB
mongoose.connect(
    'mongodb+srv://admin:admin@cluster0-ujs1s.mongodb.net/test?retryWrites=true&w=majority',
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//import file routes
const users = require('./Api/Routes/users.route');
const articles = require('./Api/Routes/articles.route');
const profiles = require('./Api/Routes/profiles.route');
const tags = require('./Api/Routes/tags.route');
const login = require('./Api/Controllers/auth.controller');
//Routes
app.use('/users', users);
app.use('/profile', profiles);
app.use('/article', articles);
app.use('/tags', tags);
// Catch 404 errors and forward
app.use((req, res, next) => {
    const err = new Error('Not found!');
    res.status(404);
    next(err);
});

//Module exports
module.exports = app;