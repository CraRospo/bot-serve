// Require Mongoose
const mongoose = require('mongoose');

// 定义一个模式
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  nickName: String,
  alias: String,
  balance: { type: Number, min: 0, default: 500 },
  chatId: String,
  isFreeze: { type: Boolean, default: false },
  hasGetReward: { type: Boolean, default: false },
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now }
})

// 导出函数来创建 "SomeModel" 模型类
module.exports = mongoose.model('Member', MemberSchema);