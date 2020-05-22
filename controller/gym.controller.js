const config = require('../config/general.config');
const yup = require('yup');
const bcrypt = require("bcrypt");
const Gym = require('../model/gym.model');

var response = config.GENERIC_RESPONSE;

exports.get = (req, res) => {
    Gym.find((err, list) => {
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

exports.create = (req, res) => {
    let gym = new Gym({
        name:       req.body.name,
        email:      req.body.email,
        password:   req.body.password,
        image:      req.body.image,
        role:       req.body.role,
        state:      req.body.state,
        city:       req.body.city,
        locality:   req.body.locality,
        address:    req.body.address,
        location:   req.body.location,
        rate:       req.body.rate,
        areas:      req.body.areas
    });
    gym.save((err, gymdb) => {
        if (err) {
            response.code = "-1";
            response.message = "Failed";
            response.body = err;
            return res.status(400).json(response);
        }
        response.code = "0";
        response.message = "success";
        response.body = gymdb;
        res.json(response);
    });
}