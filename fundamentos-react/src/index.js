import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './componentes/basicos/Primeiro'
import CompParametro from './componentes/basicos/ComParametro'

ReactDOM.render(
    <div>
        <Primeiro/>
        <CompParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={5.3} />
    </div>,
    document.getElementById('root')
)