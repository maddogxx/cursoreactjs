const port = 3003;

const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');

const CicloPagamentoService = require('../api/ciclopagamento/cicloPagamentoService');

const servidor = express();

servidor.use(bodyParser.json());
servidor.use(allowCors);

servidor.get("/ciclos", async (req, res) => {
    const ciclos = await CicloPagamentoService.consultar();

    res.status(200).json(ciclos);
});

/*
servidor.post("/atividade", async (req, res) => {
    const { descricao } = req.body;

    const atividade = await clientePrisma.atividade.create({
        data: {
          id: uuidv4(),
          descricao: descricao,
          dataCriacao: new Date()
        },
    });

    res.status(201).json(atividade);
});

servidor.put("/atividade/:id", async (req, res) => {
    const { id } = req.params;
    const { descricao, concluida } = req.body;

    const atividade = await clientePrisma.atividade.update({
        where: {
            id: id
        },
        data: {
          descricao: descricao,
          concluida: concluida
        },
    });

    res.status(200).json(atividade);
});

servidor.delete("/atividade/:id", async (req, res) => {
    const { id } = req.params;

    const operacao = await clientePrisma.atividade.delete({
        where: {
            id: id
        }
    });

    res.status(200).json(operacao);
});
*/

servidor.listen(port, function() {
    console.log(`BACKEND ONLINE na porta ${port}`);
});