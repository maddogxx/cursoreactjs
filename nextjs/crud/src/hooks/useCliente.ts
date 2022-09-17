import { useEffect, useState } from "react";

import Cliente from "../core/Cliente";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useCliente() {
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);
    
    const {
        formularioVisivel, 
        tabelaVisivel, 
        exibirTabela,
        exibirFormulario
    } = useTabelaOuForm();
    
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
      exibirTabela();
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
      exibirFormulario();
    }
    
    async function clienteExcluido(cliente: Cliente) {
      await excluirDadosCliente(cliente);
      obterListaClientes();
    }
    
    function novoCliente() {
      setCliente(Cliente.vazio());
      exibirFormulario();
    }
  
    async function salvarCliente(cliente: Cliente) {
      await salvarDadosCliente(cliente);
      obterListaClientes();
    }

    return {
        cliente,
        clientes,
        clienteSelecionado,
        clienteExcluido,
        novoCliente,
        salvarCliente,
        exibirTabela,
        tabelaVisivel
    };
}