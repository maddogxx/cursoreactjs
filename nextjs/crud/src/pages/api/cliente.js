import RepositorioCliente from "../../backend/RepositorioCliente";
import Cliente from "../../core/Cliente";

export default async function handler(req, res) {
  
  const repo = new RepositorioCliente();
  if (req.method === "GET") {
    let cli = await repo.consultarTodos();
    
    res.status(200).json(cli);
  } else if (req.method === "POST") {
    const corpo = req.body;
    
    let salvo = repo.salvar(new Cliente(corpo.nome, corpo.idade, corpo?.id));
    res.status(200).json(salvo);
  } else if (req.method === "DELETE") {
    const corpo = req.body;

    repo.excluir(new Cliente(corpo.nome, corpo.idade, corpo.id));

    res.status(200).json("{msg: Salvo}");
  }

}
