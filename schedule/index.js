const schedule = require('node-schedule')
const { resetReward } = require('../controllers/memberController')
 //其他规则见 https://www.npmjs.com/package/node-schedule
 
async function resetRewardStatusSchedule() {
  // reset - time
  const time = {
    second: 0, 
    minute: 0,
    hour: 9,
    // date: 28,
    // month: 10,
    // year: 2022,
    // dayOfWeek: 0
  };

  schedule.scheduleJob(time, async () => {
    await resetReward()
  })
}

module.exports = {
  resetRewardStatusSchedule
}