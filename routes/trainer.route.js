var express = require('express')
var router = express.Router()
var controller = require('../controller/trainer.controller')

router.get('/', controller.get);
module.exports = router