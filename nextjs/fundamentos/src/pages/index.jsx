import Navegador from "../components/Navegador";

export default function Inicio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100vh"
    }}>
      <Navegador destino="/exemplo" texto="Exemplo Componente" cor="crimson"/>
      <Navegador destino="/estiloso" texto="Texto com estilo" />
      <Navegador destino="/navegacao" texto="Navegação #01" cor="green"/>
      <Navegador destino="/cliente/123" texto="Navegação #02" cor="purple"/>
    </div>
  );
}