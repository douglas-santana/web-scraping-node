const requestDatas = require('../request/requestDatas');

module.exports = async () => {
  const getDatas = await requestDatas();
  return clearScore(getDatas.score);
}

const clearScore = (scores) => {
  let scoreClean = [];

  for (let i = 0; i < scores.length; i++) {
    scoreClean.push(scores[i].replace('Score: ', ''));
  }

  return scoreClean;
}