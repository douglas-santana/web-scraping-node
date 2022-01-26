const requestDatas = require('../controller/requestDatas');

module.exports = async () => {
  const treatCPF = await requestDatas();
  console.log(treatCPF.CPF);
}