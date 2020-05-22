var express = require('express')
var router = express.Router()
var controller = require('../controller/user.controller')

router.get('/', controller.list);
//router.get('/find/:id', controller.list);
router.post('/login', controller.login);
router.post('/create', controller.create);
module.exports = router