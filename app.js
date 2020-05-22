var express = require('express');
var config = require('./config/general.config');
const mongoose = require('mongoose');
var userRoute = require('./routes/user.route');
var gymRoute = require('./routes/gym.route');
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/gym', gymRoute);
app.use('/user', userRoute);



mongoose.connect(config.MONGODB, { useNewUrlParser: true,useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log("Base de datos on line!");
});

module.exports = app;