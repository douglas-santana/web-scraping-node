const express = require('express');
const requestCPF = require('./controller/requestCPF');

const app = express();

requestCPF();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));