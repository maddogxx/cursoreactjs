import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Formulario from "../components/Formulario";
import { useState } from "react";

function clienteSelecionado(cliente: Cliente) {
  console.log(`Alterar ${cliente.nome}`);
}

function clienteExcluido(cliente: Cliente) {
  console.log(`Excluir ${cliente.nome}`);
}

function salvarCliente(cliente: Cliente) {
  console.log(cliente);
}

export default function Home() {
  const clientes = [
    new Cliente("Ana", 15, "1"),
    new Cliente("Ken", 26, "2"),
    new Cliente("Rui", 45, "3")
  ]

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao cor="gray" estilo="mb-2" noClick={() => setVisivel("form")}>Novo cliente</Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado} 
              clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario 
            cliente={clientes[0]} 
            clienteAlterado={salvarCliente}
            cancelado={() => setVisivel("tabela")}/>
        )}

      </Layout>
    </div>
  );
}
