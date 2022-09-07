import estilo from "../styles/estiloso.module.css";
import Link from "next/link";

export default function Estiloso() {
    return (
        <div className={estilo.roxo}>
            <h1>Estilo usando CSS Módulos</h1>
            <Link href="/">Voltar</Link>
        </div>
    );
}