const port = 3003;

const prisma = require('@prisma/client');
const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');

const clientePrisma = new prisma.PrismaClient();

const servidor = express();

servidor.use(bodyParser.json());
servidor.use(allowCors);

servidor.get("/ciclos", async (req, res) => {
    const ciclos = await clientePrisma.cicloPagamento.findMany();

    res.status(200).json(ciclos);
});

servidor.get("/ciclos/:id", async (req, res) => {
    const { id } = req.params;
    const ciclo = await clientePrisma.cicloPagamento.findUnique({
        where: {
            id: id
        }
    });

    res.status(200).json(ciclo);
});

servidor.post("/ciclos", async (req, res) => {
    let {nome, mes, ano} = req.body;

    const novoCicloPagto = await clientePrisma.cicloPagamento.create({
        data: {
            nome: nome,
            mes: mes,
            ano: ano
        },
    });

    res.status(201).json(novoCicloPagto);
});

servidor.put("/ciclos/:id", async (req, res) => {
    const { id } = req.params;
    let {nome, mes, ano, creditos} = req.body;

    let creditosCriados = [];
    let creditosAlterados = [];
    creditos.forEach(c => {
        const {id, nome, valor} = c;

        if (id) {
            creditosAlterados.push(c);
        } else {
            creditosCriados.push(c);
        }

    });

    console.log(creditosCriados);

    await clientePrisma.cicloPagamento.update({
        where: {
            id: +id
        },
        data: {
            nome: nome,
            mes: mes,
            ano: ano
        }
    });


    const novoCicloPagto = await clientePrisma.cicloPagamento.findUnique({
        where: {
            id: +id
        },
        include: {
            creditos: true,
            debitos: true
        }
    }) ;

    res.status(201).json(novoCicloPagto);
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