import React from "react";

import Primeiro from './componentes/basicos/Primeiro'
import CompParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'
import Aleatorio from "./componentes/basicos/Aleatorio";


// Forma reduzida usando arrow function
export default () => (
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio min={-10} max={10} />
        <Fragmento/>
        <CompParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={5.3} />
        <Primeiro/>
    </div>
);