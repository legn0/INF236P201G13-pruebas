import ColumnaDia from "./components/ColumnaDia";
import "./App.css";
import MiniaturaExamen from "./components/MiniaturaExamen";

function App() {
  //datos de mentira
  let bloques_usados = ["8:30", "11:00"];
  return (
    <div className="planilla">
      <ColumnaDia
        className="columna-dia"
        tipoExamen="Radiografia"
        dia="Lunes"
        fecha="05-08-2024"
      />
      <ColumnaDia
        className="columna-dia"
        tipoExamen="Radiografia"
        dia="Martes"
        fecha="06-08-2024"
      />

      <MiniaturaExamen nombrepaciente="Juan" medicotratante="pepe" />
    </div>
  );
}

export default App;
