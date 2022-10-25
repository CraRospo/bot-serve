const Member = require('../models/member')

exports.getMemberBanlance = function(req, res, next) {
  Member
    .findOne({ nickName: req.query.name })
    .exec(function (err, data) {
      if (err) { return next(err) }
      //Successful, so render
      console.log(data)
      res.send(data)
    });
}

exports.settleAccount = function(req, res, next) {
  console.log(req.body)
  Member
    .findOne({ nickName: req.body.nickName })
    .exec((err, member) => {
      let settleBalance = member.balance + req.body.settleType * req.body.bet
      settleBalance = settleBalance <= 0 ? 0 : settleBalance

      Member.where({ nickName: req.body.nickName }).updateOne({ balance: settleBalance  }).exec(err => {
        if (err) {
          return next(err)
        } else {
          console.log(123)
        }
      })
    })
  
}