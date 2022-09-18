import { Atividade } from ".prisma/client";
import AtividadeDto from "./AtividadeDto";

export default interface AtividadeRepositoryInterface {
    salvar(atividade: AtividadeDto): Promise<Atividade>;
    excluir(atividade: AtividadeDto): Promise<void>;
    consultarTodos(): Promise<Atividade[]>;
}