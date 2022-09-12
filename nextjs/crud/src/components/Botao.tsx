interface BotaoProps {
    //cor?: "green" | "blue" | "gray";
    children: any;
    estilo?: string
}

export default function Botao(props: BotaoProps) {
    //const cor = props.cor ?? 'gray';

    return (
        <button className={`
            bg-gradient-to-r from-green-400 to-green-700
            text-white px-4 py-2 rounded-md
            ${props.estilo}
        `}>
            {props.children}
        </button>
    );
}