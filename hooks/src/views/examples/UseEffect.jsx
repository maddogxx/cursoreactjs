import React, {useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    let numero = parseInt(n);

    if (numero < 0) {
        return -1;
    }

    if (numero === 0) {
        return 1;
    } else {
        return calcFatorial(numero - 1) * numero;
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    useEffect(function() {
        setFatorial(calcFatorial(number));

    }, [number]);

    useEffect(function() {
        if (fatorial > 10000) {
            document.title = "ALTERADO";
        } else {
            document.title = "React App";
        }
    }, [fatorial]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial < 0 ? "Não Existe" : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02"/>

        </div>
    )
}

export default UseEffect
