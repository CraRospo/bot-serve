var express = require('express');
var router = express.Router();
const memberController = require('../controllers/memberController')

/* GET users listing. */
router.get('/account', memberController.getMemberBanlance);

module.exports = router;
