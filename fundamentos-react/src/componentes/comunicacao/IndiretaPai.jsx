import React from "react";
import IndiretaFilho from "./IndiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    function fornecerInfo(nome, idade, nerd) {
        console.log(nome, idade, nerd);
    }

    return (
        <div>
            Pai
            <IndiretaFilho quandoClicar={ fornecerInfo } />
        </div>
    );
};