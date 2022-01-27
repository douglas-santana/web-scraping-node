const requestDatas = require('../controller/requestDatas');

module.exports = async () => {
  const getDatas = await requestDatas();
  console.log(validCPF(getDatas.CPF));
}

const validCPF = (strCPF) => {
  let cpfClean = [];

  for (let i = 0; i < strCPF.length; i++) {
    cpfClean.push(strCPF[i].replace(/\.|\-/g, ''));
  }

  return cpfClean;
  
  /* let sum = 0;
  let rest = 0;

  // primeiro digito verificador, apenas primeiro CPF
  sum += Number(cpfClean[0].substring(-1, 0)) * 11;
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest !== Number(cpfClean[0].substring(9, 10))) return false;
  sum = 0;

  // primeiro digito verificador, demais CPFs
  for (let i = 1; i <= 9; i++) {
    sum += Number(cpfClean[i -1].substring(i -1, i)) * (11 - i);
    rest = (sum * 10) % 11;
    if (rest == 10 || rest == 11) rest = 0;
    if (rest !== Number(cpfClean[0].substring(9, 10))) return false;
    sum = 0;
  }

  // segundo digito verificador, apenas primeiro CPF
  sum += Number(cpfClean[0].substring(-1, 0)) * 12;
  rest = (sum * 10) % 11;
  if (rest == 10 || rest == 11) rest = 0;
  if (rest !== Number(cpfClean[0].substring(10, 11))) return false;

  // segundo digito verificador, demais CPFs
  for (let i = 1; i <= 10; i++) {
    sum += Number(cpfClean[i -1].substring(i-1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    if (rest == 10 || rest == 11) rest = 0;
    if (rest !== Number(cpfClean[i -1].substring(10, 11))) return false;
  }
  return true; */
}

// Tentei fazer a validação de todos os CPFs do array, porém no momento não consegui e vou seguir adiante.
// Função validCPF, fonte: https://devarthur.com/javascript/funcao-javascript-para-validar-cpf/ , adaptado.
// regex da linha 11, fonte: https://pt.stackoverflow.com/questions/16860/limpar-cep-com-javascript