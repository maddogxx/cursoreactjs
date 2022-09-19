import { Atividade } from ".prisma/client";

import AtividadeRepository from "../../core/AtividadeRepository";

export default async function handler(req, res) {
    const repo = new AtividadeRepository();

    if (req.method === "GET") {
      let atividades = await repo.consultarTodos();
      
      res.status(200).json(atividades);
    } else if (req.method === "POST") {
      const corpo = req.body;

      let atividade: Atividade = {id: "", descricao: "", concluida: false, dataCriacao: new Date()};
      atividade.id = corpo?.id ?? null;
      atividade.descricao = corpo.descricao;
      atividade.concluida = corpo.concluida;
      atividade.dataCriacao = corpo.dataCriacao;
      
      let salvo = await repo.salvar(atividade);

      console.log(salvo);

      res.status(200).json(salvo);
    } else if (req.method === "DELETE") {
      const corpo = req.body;
      let atividade: Atividade = {id: "", descricao: "", concluida: false, dataCriacao: new Date()};
      atividade.id = corpo.id;
  
      await repo.excluir(atividade);
  
      res.status(200).json({msg: `Atividade  id(${corpo.id}) Apagada`});
    }
  
}
  