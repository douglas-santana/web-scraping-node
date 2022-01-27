const express = require('express');
const treatedCPF = require('./service/treatCPF');
const treateName = require('./service/treateName');
const treatScore = require('./service/treatScore');

const app = express();

// treatedCPF();
// treateName();
treatScore();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));