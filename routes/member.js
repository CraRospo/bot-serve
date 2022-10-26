var express = require('express');
var router = express.Router();
const memberController = require('../controllers/memberController')

/* GET users listing. */
router.get('/account', memberController.getMemberBanlance);

router.post('/settle', memberController.settleAccount)

router.post('/reward', memberController.getDailyReward)

module.exports = router;
