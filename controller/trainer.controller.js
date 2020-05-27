const config = require('../config/general.config');
const yup = require('yup');
const bcrypt = require("bcrypt");
const Trainer = require('../model/trainer.model');

var response = config.GENERIC_RESPONSE;

exports.get = (req, res) => {
    Trainer.find((err, list) => {
        if (err) {
            response.code = "-1";
            response.message = "Failed";
            response.body = err;
            return res.status(400).json(response);
        }
        response.body = list;
        res.json(response);
    });
}