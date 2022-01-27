module.exports = (sequelize, DataTypes) => {
  const ApprovedCandidate = sequelize.define('ApprovedCandidate', {
    cpf: DataTypes.STRING,
    name: DataTypes.STRING,
    score: DataTypes.STRING,
  }, {
    tableName: 'ApprovedCandidates',
    timestamps: false,
  });
  return ApprovedCandidate;
};