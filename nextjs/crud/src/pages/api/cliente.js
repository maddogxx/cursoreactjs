import Cliente from "../../core/Cliente";
import RepositorioCliente from "../../backend/RepositorioCliente";

export default function handler(req, res) {
  const repo = new RepositorioCliente();
  if (req.method === "GET") {
    const cli = [];

    repo.salvar(new Cliente("Amanda", 15));

    repo.consultarTodos().then(c => {
      cli.push(c);
    })

    res.status(200).json({clientes: cli[0]});
  } else {
    res.status(200).json({ name: 'John Doe' })
  }

}
