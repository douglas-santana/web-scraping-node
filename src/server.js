const express = require('express');
const treatedCPF = require('./service/treatCPF');
const treateName = require('./service/treateName');

const app = express();

// treatedCPF();
treateName();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));