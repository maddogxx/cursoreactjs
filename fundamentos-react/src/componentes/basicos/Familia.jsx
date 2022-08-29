import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={ props.sobrenome }/>
            <FamiliaMembro nome="Gustavo" { ...props }/>
            <FamiliaMembro nome="Sarah" sobrenome="Batista"/>
        </div>
    );
};