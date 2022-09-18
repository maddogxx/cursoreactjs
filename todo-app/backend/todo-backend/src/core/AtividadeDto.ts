export default class AtividadeDto {
    #id: string;
    #descricao: string;
    #concluida: boolean;
    #dataCricao: Date;

    constructor(descricao: string, concluida: boolean = false, dataCriacao: Date = new Date(), id: string = "") {
        this.#descricao = descricao;
        this.#concluida = concluida;
        this.#dataCricao = dataCriacao;
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    get descricao() {
        return this.#descricao;
    }

    get concluida() {
        return this.#concluida;
    }

    get dataCriacao() {
        return this.#dataCricao;
    }
    
}