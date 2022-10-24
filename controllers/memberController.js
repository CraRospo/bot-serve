const Member = require('../models/member')

exports.getMemberBanlance = function(req, res, next) {
  console.log(req.query.name)
  Member
    .findOne({ nickName: req.query.name })
    .exec(function (err, data) {
      if (err) { return next(err) }
      //Successful, so render
      console.log(data)
    });
}