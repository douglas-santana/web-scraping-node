const requestDatas = require('../controller/requestDatas');

module.exports = async () => {
  const getDatas = await requestDatas();
  console.log(clearName(getDatas.name));
}

const clearName = (names) => {
  let namesClean = [];

  for (let i = 0; i < names.length; i++) {
    namesClean.push(names[i].replace('Name: ', ''));
  }

  return namesClean;
}