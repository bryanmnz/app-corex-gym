const config = require('../config/general.config');
const yup = require('yup');
const bcrypt = require("bcrypt");
const User = require('../model/user.model');

var response = config.GENERIC_RESPONSE;

exports.list = (req, res) => {
    User.find((err, list) => {
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
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        state: req.body.state
    });
    user.save((err, userdb) => {
        if (err) {
            response.code = "-1";
            response.message = "Failed";
            response.body = err;
            return res.status(400).json(response);
        }

        response.body = userdb;
        res.json(response);
    });
}

exports.login = (req, res) => {
    User.find({ email: req.body.email,state:true }, (err, userdb) => {
        if (err) {
            response.code = "-1";
            response.message = "Failed";
            response.body = err;
            return res.status(400).json(response);
        }
        var password = req.body.password
        if(password != userdb[0].password){
            response.code = "-2";
            response.message = "wrong data";
            response.body = {
                errors:{
                    general:[
                        "Usuario o contrasena invalido"
                    ]
                }
            };
        }else{            
            response.body = {user : userdb[0]};
        }
        
        res.json(response);
    });
}
