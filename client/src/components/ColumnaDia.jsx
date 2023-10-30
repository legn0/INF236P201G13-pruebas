import MiniaturaBloqueHorario from "./MiniaturaBloqueHorario";
import BotonReservarHora from "./BotonReservarHora";
import "./ColumnaDia.css";

function ColumnaDia(prop) {
  //datos falsos que en teoria se reciben
  //si hay 8 bloques totales
  let bloques_totales;
  switch (prop.tipoExamen) {
    case "Radiografia":
    case "Ecografia":
      bloques_totales = [
        "8:30",
        "9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
      ];
      break;
    case "Scanner":
      bloques_totales = ["8:30", "9:30", "10:30"];
      break;
    case "Resonancia":
      bloques_totales = ["8:30", "10:00", "11:30"];
      break;
    default:
      bloques_totales = ["8:00"];
  }

  //aqui idealmente agarraria esto con la fecha desde la base de datos
  const bloques_usados = ["8:30", "11:00"];

  const getBloque = (index) => {
    if (bloques_usados.includes(index)) {
      return (
        <MiniaturaBloqueHorario
          disponibilidadInicial={5}
          disponilidadTotal={8}
        />
      );
    } else {
      return (
        <MiniaturaBloqueHorario
          disponibilidadInicial={8}
          disponilidadTotal={8}
        />
      );
    }
  };

  return (
    <div className="columna-dia">
      <ul className="lista-horarios">
        {bloques_totales.map((item) => (
          <li key={item} className="block-container">
            {getBloque(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColumnaDia;
