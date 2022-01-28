const express = require('express');
require('dotenv').config();

const app = express();

const router = require('./controller')
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));