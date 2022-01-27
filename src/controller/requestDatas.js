const axios = require('axios');
const cheerio = require('cheerio');

let numberOfPage = 1;
const urlCPF = `https://sample-university-site.herokuapp.com/approvals/${numberOfPage}`;

const CPF = [];
const name = [];
const score = [];

const cpfDatas = async () => {
  for (let i = 0; i < CPF.length; i++) {
    const urlCandidate = `https://sample-university-site.herokuapp.com/candidate/${CPF[i]}`
      try {
        const { data } = await axios.get(urlCandidate)
        const $ = cheerio.load(data)
        
        $('body').each((index, element) => {
          const Name = $(element).children().next().first().text();
          name.push(Name)
          const Score = $(element).children().last().text();
          score.push(Score)
        })
      } catch (error) {
        console.log('erro ao obter os dados do cpf');
      }
    }
    const datas = { CPF, name, score };
    return datas;
}

module.exports = async () => {
  try {
    const { data } = await axios.get(urlCPF)
    const $ = cheerio.load(data)

    $('li').each((index, element) => {
      const getCPF = $(element).children('a').text();
      CPF.push(getCPF);
    })

    return cpfDatas();
  } catch (error) {
    console.log('Algo deu errado');
  }
}