import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Formulario from "../components/Formulario";

import useCliente from "../hooks/useCliente";

export default function Home() {

  const {
    cliente, 
    clientes, 
    clienteSelecionado, 
    clienteExcluido,
    novoCliente,
    salvarCliente,
    exibirTabela,
    tabelaVisivel
  } = useCliente();

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
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
            cancelado={exibirTabela}/>
        )}

      </Layout>
    </div>
  );
}
