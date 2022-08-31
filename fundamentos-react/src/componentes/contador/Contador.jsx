import "./contador.css";
import React from "react";

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    incrementar = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            numero: this.state.numero -this.state.passo
        })
    }

    alterarPasso = (e) => {
        this.setState({
            passo: +e.target.value
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.alterarPasso} />
                </div>
                <button onClick={this.incrementar}>+</button>
                <button onClick={this.decrementar}>-</button>
            </div>
        );
    };
}