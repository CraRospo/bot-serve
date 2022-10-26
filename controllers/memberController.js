const Member = require('../models/member')

// 获取账户详情
function getMemberBanlance(req, res, next) {
  Member
    .findOne({ nickName: req.query.nickName })
    .exec(function (err, data) {
      if (err) { return next(err) }
      res.send(data)
    });
}

// 结算账户
function settleAccount(req, res, next) {
  Member
    .findOne({ nickName: req.body.nickName })
    .exec(function (err, data) {
      if (err) { return next(err) } 
      let result = data.balance + req.body.type * req.body.count
      result = result <= 0 ? 0 : result

      Member
        .findOneAndUpdate(
          {nickName: req.body.nickName },
          { balance: result }
        )
        .exec(function(err) {
          if (err) { return next(err) } 
          res.send({ code: 0 })
        })
    })
}

// 领取低保
function getDailyReward(req, res, next) {
  console.log(req.body.nickName)
  Member
    .findOne({ nickName: req.body.nickName })
    .exec(function (err, data) {
      if (err) { return next(err) } 

      if (data.balance >= 1000) { return res.send({ code: -1 }) }

      if(!data.hasGetReward) {
        let result = data.balance + 100

        Member
          .findOneAndUpdate(
            { nickName: req.body.nickName },
            { balance: result,
              hasGetReward: true
            }
          )
          .exec(function(err) {
            if (err) { return next(err) } 
            res.send({ code: 0 })
          })
      } else {
        res.send({ code: 1 })
      }
    })
}

module.exports = {
  getMemberBanlance,
  settleAccount,
  getDailyReward
}