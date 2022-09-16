import Cliente from "../core/Cliente";
import { Cliente as ClienteDB } from ".prisma/client";

export default interface RepositorioClienteInterface {
    salvar(cliente: Cliente): Promise<ClienteDB>;
    excluir(cliente: Cliente): Promise<void>;
    consultarTodos(): Promise<ClienteDB[]>;
}