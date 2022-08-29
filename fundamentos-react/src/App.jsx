import "./App.css";

import React from "react";

import Primeiro from './componentes/basicos/Primeiro'
import CompParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'
import Aleatorio from "./componentes/basicos/Aleatorio";
import Card from "./componentes/layout/Card";
import Familia from "./componentes/basicos/Familia";


// Forma reduzida usando arrow function
export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Lancaster"/>
            </Card>

            <Card titulo="#04 - Desafio Número Aleatório" color="#FA6900">
                <Aleatorio min={-10} max={10} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento/>
            </Card>

            <Card titulo="#02 - Com Parametros" color="#E8B71A">
                <CompParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={5.3} />
            </Card>
            
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro/>
            </Card>
        </div>
    </div>
);