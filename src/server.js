const express = require('express');
const treatedCPF = require('./service/treatCPF');

const app = express();

treatedCPF();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));