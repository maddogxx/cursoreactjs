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
    const ciclos = await clientePrisma.cicloPagamento.findMany({
        include: {
            creditos: true,
            debitos: true
        }
    });

    res.status(200).json(ciclos);
});

servidor.get("/ciclos/:id", async (req, res) => {
    const { id } = req.params;
    const ciclo = await clientePrisma.cicloPagamento.findUnique({
        where: {
            id: +id
        },
        include: {
            creditos: true,
            debitos: true
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
    let {nome, mes, ano} = req.body;

    const novoCicloPagto = await clientePrisma.cicloPagamento.update({
        where: {
            id: +id
        },
        data: {
            nome: nome,
            mes: mes,
            ano: ano
        }
    });

    res.status(200).json(novoCicloPagto);
});

servidor.delete("/ciclos/:id", async (req, res) => {
    const { id } = req.params;

    const novoCicloPagto = await clientePrisma.cicloPagamento.delete({
        where: {
            id: +id
        }
    });

    res.status(200).json(novoCicloPagto);
});

servidor.post("/ciclos/:id/creditos", async (req, res) => {
    const { id } = req.params;
    const {nome, valor} = req.body;

    const novoCredito = await clientePrisma.credito.create({
        data: {
            nome: nome,
            valor: +valor,
            idCicloPagamento: +id
        },
    });

    res.status(201).json(novoCredito);
});

servidor.put("/ciclos/creditos/:id", async (req, res) => {
    const { id } = req.params;
    const {nome, valor} = req.body;

    const novoCredito = await clientePrisma.credito.update({
        where: {
            id: +id
        },
        data: {
            nome: nome,
            valor: +valor,
        },
    });

    res.status(200).json(novoCredito);
});

servidor.delete("/ciclos/creditos/:id", async (req, res) => {
    const { id } = req.params;

    const novoCredito = await clientePrisma.credito.delete({
        where: {
            id: +id
        }
    });

    res.status(200).json(novoCredito);
});

servidor.post("/ciclos/:id/debitos", async (req, res) => {
    const { id } = req.params;
    const {nome, valor, status} = req.body;

    const novoDebito = await clientePrisma.debito.create({
        data: {
            nome: nome,
            valor: +valor,
            status: status,
            idCicloPagamento: +id
        },
    });

    res.status(201).json(novoDebito);
});

servidor.put("/ciclos/debitos/:id", async (req, res) => {
    const { id } = req.params;
    const {nome, valor, status} = req.body;

    const novoDebito = await clientePrisma.debito.update({
        where: {
            id: +id
        },
        data: {
            nome: nome,
            valor: +valor,
            status: status
        },
    });

    res.status(200).json(novoDebito);
});

servidor.delete("/ciclos/debitos/:id", async (req, res) => {
    const { id } = req.params;

    const novoDebito = await clientePrisma.debito.delete({
        where: {
            id: +id
        }
    });

    res.status(200).json(novoDebito);
});

servidor.listen(port, function() {
    console.log(`BACKEND ONLINE na porta ${port}`);
});