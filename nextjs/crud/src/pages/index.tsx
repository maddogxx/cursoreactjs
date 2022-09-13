import Botao from "../components/Botao";
import Layout from "../components/Layout";
//import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Formulario from "../components/Formulario";

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
        <div className="flex justify-end">
          <Botao cor="green" estilo="mb-4">Novo cliente</Botao>
        </div>
        {/*
        <Tabela 
          clientes={clientes} 
          clienteSelecionado={clienteSelecionado} 
          clienteExcluido={clienteExcluido} />
        */}
        <Formulario />        
      </Layout>
    </div>
  );
}
