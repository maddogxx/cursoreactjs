const prisma = require('@prisma/client');

const clientePrisma = new prisma.PrismaClient();

async function consultar(id) {
    let resultado = null;

    if (id) {
        resultado = await clientePrisma.cicloPagamento.findUnique({
            where: {
                id: id
            }
        });
    } else {
        resultado = await clientePrisma.cicloPagamento.findMany();
    }

    return resultado;
}

async function salvar(cicloPagto) {
    let novoCicloPagto = null;
    let {id, nome, mes, ano} = cicloPagto;

    if (id) {

    } else {
        novoCicloPagto = await clientePrisma.cicloPagamento.create({
            data: {
                nome: nome,
                mes: mes,
                ano: ano
            },
        });
    }

    return novoCicloPagto;
}


module.exports = [
    consultar,
    salvar
]