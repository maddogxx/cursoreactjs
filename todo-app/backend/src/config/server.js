const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');

const servidor = express();

servidor.use(bodyParser.json());
servidor.listen(port, function() {
    console.log(`BACKEND ONLINE na porta ${port}`);
});