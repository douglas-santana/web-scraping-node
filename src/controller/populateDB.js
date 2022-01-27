const { ApprovedCandidate } = require('../sequelize/models')

const treatedCPF = require('../service/treatCPF');
const treateName = require('../service/treateName');
const treatScore = require('../service/treatScore');

module.exports = async (req, res) => {
  try {
    const dataCPF = await treatedCPF();
    const dataName = await treateName();
    const dataScore = await treatScore();

    for (i = 0; i < dataCPF.length; i++) {
      await ApprovedCandidate.create({
        cpf: dataCPF[i],
        name: dataName[i],
        score: dataScore[i],
      });
    }
    res.status(201).json({ message: 'Dados inseridos no banco de dados MySQL' });
    } catch (error) {
      res.status(500).json({ message: 'Não foi possivel inserir os dados' });
  }
}