import { uuid } from 'uuidv4';
import { Atividade, PrismaClient } from ".prisma/client";


import AtividadeRepositoryInterface from "./AtividadeRepositoryInterface";

const prisma = new PrismaClient();

export default class AtividadeRepository implements AtividadeRepositoryInterface {

    async salvar(atividade: Atividade): Promise<Atividade> {
        const novaAtividade = atividade.id ? (
            await prisma.atividade.update({
                where: {
                    id: `${atividade.id}`
                },
                data: {
                    descricao: atividade.descricao,
                    concluida: atividade.concluida
                }
            })
        ):(
            await prisma.atividade.create({
                data: {
                    id: uuid(),
                    descricao: atividade.descricao,
                    dataCriacao: new Date()
                },
            })
        );

        console.log(novaAtividade);
    
        return novaAtividade;  
    }

    async excluir(atividade: Atividade): Promise<void> {
        if (atividade.id) {
            await prisma.atividade.delete({
                where: {
                    id: atividade.id
                },
            });            
        }
    }

    async consultarTodos(): Promise<Atividade[]> {
        let atividades: Atividade[] = [];

        atividades = await prisma.atividade.findMany();

        return atividades;
    }

}