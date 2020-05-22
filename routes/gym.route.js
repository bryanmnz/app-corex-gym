var express = require('express')
var router = express.Router()
var controller = require('../controller/gym.controller')

router.get('/', controller.get);
//router.get('/find/:id', controller.list);
router.post('/create', controller.create);
module.exports = router