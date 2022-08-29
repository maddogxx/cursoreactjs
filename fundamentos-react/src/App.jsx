import "./App.css";

import React from "react";

import Primeiro from './componentes/basicos/Primeiro'
import CompParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'
import Aleatorio from "./componentes/basicos/Aleatorio";
import Card from "./componentes/layout/Card";


// Forma reduzida usando arrow function
export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#04 - Desafio Número Aleatório">
                <Aleatorio min={-10} max={10} />
            </Card>

            <Card titulo="#03 - Fragmento">
                <Fragmento/>
            </Card>

            <Card titulo="#02 - Com Parametros">
                <CompParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={5.3} />
            </Card>
            
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro/>
            </Card>
        </div>
    </div>
);