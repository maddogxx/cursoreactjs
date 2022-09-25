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

async function 


module.exports = [
    consultar
]