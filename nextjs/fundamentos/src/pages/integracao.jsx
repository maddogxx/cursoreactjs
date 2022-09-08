import { useState } from "react";
import Layout from "../components/Layout";

export default function Integracao() {
    const [codigo, setCodigo] = useState(1);
    const [cliente, setCliente] = useState({});

    async function obterCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
        const dados = await resp.json();
        setCliente(dados);

        // fetch(`http://localhost:3000/api/clientes/${codigo}`)
        //     .then(resp => resp.json())
        //     .then(dados => setCliente(dados));
    }

    return (
        <Layout titulo="Integracao com API #01">
            <div>
                <div>
                    <input type="number" className="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                    <button className="btn" onClick={obterCliente}>Consultar</button>
                </div>
                <ul>
                    <li>Codigo: {cliente.id ?? ""}</li>
                    <li>Nome: {cliente.nome ?? ""}</li>
                    <li>E-mail: {cliente.email ?? ""}</li>
                </ul>
            </div>
        </Layout>
    );
}