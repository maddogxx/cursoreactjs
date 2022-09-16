import { PrismaClient } from '@prisma/client'
import { Cliente as ClienteDB } from ".prisma/client";

import Cliente from "../core/Cliente";
import RepositorioClienteInterface from "./RepositorioClienteInterface";

const prisma = new PrismaClient();
export default class RepositorioCliente implements RepositorioClienteInterface {

    async salvar(cliente: Cliente): Promise<ClienteDB> {
        const novoCliente = cliente.id ? (
            await prisma.cliente.update({
                where: {
                    id: `${cliente.id}`
                },
                data: {
                    nome: cliente.nome,
                    idade: cliente.idade
                }
            })
        ):(
            await prisma.cliente.create({
                data: {
                    id: `${Date.now()}`,
                    nome: cliente.nome,
                    idade: cliente.idade
                },
            })
        );
    
        return novoCliente;  
    }
    
    async excluir(cliente: Cliente): Promise<void> {
        if (cliente.id) {
            await prisma.cliente.delete({
                where: {
                    id: cliente.id
                },
            });            
        }
    }

    async consultarTodos(): Promise<ClienteDB[]> {
        let clientes: ClienteDB[] = [];

        clientes = await prisma.cliente.findMany();

        return clientes;
    }

}