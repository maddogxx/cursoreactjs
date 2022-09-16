import RepositorioCliente from "../../backend/RepositorioCliente";

export default async function handler(req, res) {
  const repo = new RepositorioCliente();
  if (req.method === "GET") {
    let cli = [];

    cli = await repo.consultarTodos();
    
    res.status(200).json(cli);
  } else if (req.method === "POST") {
    
    
    //repo.salvar(new Cliente("Amanda", 15));
    res.status(200).json({ name: 'John Doe' })
  }

}
