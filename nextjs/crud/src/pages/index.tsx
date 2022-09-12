import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

function clienteSelecionado(cliente: Cliente) {
  console.log(`Alterar ${cliente.nome}`);
}

function clienteExcluido(cliente: Cliente) {
  console.log(`Excluir ${cliente.nome}`);
}

export default function Home() {
  const clientes = [
    new Cliente("Ana", 15, "1"),
    new Cliente("Ken", 26, "2"),
    new Cliente("Rui", 45, "3")
  ]

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  );
}
