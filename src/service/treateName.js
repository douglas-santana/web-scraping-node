const requestDatas = require('../request/requestDatas');

module.exports = async () => {
  const getDatas = await requestDatas();
  return clearName(getDatas.name);
}

const clearName = (names) => {
  let namesClean = [];

  for (let i = 0; i < names.length; i++) {
    namesClean.push(names[i].replace('Name: ', ''));
  }

  return namesClean;
}