import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

import Formulario from "../components/Formulario";

import { useEffect, useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  
//  const clientes = [
//    new Cliente("Ana", 15, "1"),
//    new Cliente("Ken", 26, "2"),
//    new Cliente("Rui", 45, "3")
//  ];

  useEffect(() => {
    obterListaClientes();
  }, []);

  async function obterListaClientes() {
    let listaClientes: Cliente[] = [];
    const res = await fetch("/api/cliente");
    const dados = await res.json();

    dados.forEach(d => {
      listaClientes.push(new Cliente(d.nome, d.idade, d.id));
    });
  
    setClientes(listaClientes);
    setVisivel("tabela");
  }

  async function salvarDadosCliente(cliente: Cliente) {
    const idStr = cliente.id === null ? "": `"id": "${cliente.id}",`;

    let corpo: BodyInit = `{${idStr} "nome": "${cliente.nome}", "idade": ${cliente.idade}}`;

    const res = await fetch("/api/cliente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: corpo
    });
  }

  async function excluirDadosCliente(cliente: Cliente) {
    let corpo: BodyInit = `{
      "id": "${cliente.id}", 
      "nome": "${cliente.nome}",
      "idade": ${cliente.idade}}`;

    await fetch("/api/cliente", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: corpo
    });
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form");
  }
  
  async function clienteExcluido(cliente: Cliente) {
    await excluirDadosCliente(cliente);
    obterListaClientes();
  }
  
  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("form");
  }

  async function salvarCliente(cliente: Cliente) {
    await salvarDadosCliente(cliente);
    obterListaClientes();
  }

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
              <Botao 
                cor="gray" 
                estilo="mb-2" 
                noClick={novoCliente}>Novo cliente</Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado} 
              clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario 
            cliente={cliente} 
            clienteAlterado={salvarCliente}
            cancelado={() => setVisivel("tabela")}/>
        )}

      </Layout>
    </div>
  );
}
