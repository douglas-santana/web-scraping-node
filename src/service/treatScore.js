const requestDatas = require('../controller/requestDatas');

module.exports = async () => {
  const getDatas = await requestDatas();
  console.log(clearScore(getDatas.score));
}

const clearScore = (scores) => {
  let scoreClean = [];

  for (let i = 0; i < scores.length; i++) {
    scoreClean.push(scores[i].replace('Score: ', ''));
  }

  return scoreClean;
}