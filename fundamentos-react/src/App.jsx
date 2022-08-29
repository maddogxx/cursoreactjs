import React from "react";

import Primeiro from './componentes/basicos/Primeiro'
import CompParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'

// Forma reduzida usando arrow function
export default () => (
    <div id="app">
        <h2>Fundamentos React</h2>
        <Fragmento/>
        <CompParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={5.3} />
        <Primeiro/>
    </div>
);