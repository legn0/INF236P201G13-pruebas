import React, { useState } from "react";
import "./bloque-horario.css"; // Asegúrate de ajustar la ruta del archivo CSS según tu estructura de carpetas
import BotonReservarHora from "./BotonReservarHora";
import ExpandirBloqueHorario from "./ExpandirBloqueHorario";

function MiniaturaBloqueHorario({ disponibilidadInicial, disponilidadTotal }) {
  const [buttonPopup, setHorariosVisible] = useState(false);
  const [horasDisponibles, setHoraDisponible] = useState(disponibilidadInicial);
  const [horasOcupadas, setHOrasOcupadas] = useState(
    disponilidadTotal - disponibilidadInicial
  );

  function expandirHorarios() {
    setHorariosVisible(true);
  }

  function handleClick() {
    if (horasDisponibles > 0) {
      setHoraDisponible(horasDisponibles - 1);
      setHOrasOcupadas(horasOcupadas + 1);
    }
  }

  return (
    <div className="bloque-horario">
      <p>Horas disponibles: {horasDisponibles}</p>
      <p>Horas ocupadas: {horasOcupadas}</p>
      <div className="buttons-block">
        <BotonReservarHora
          isFullyAvailable={false}
          className="boton-agendar"
          agendarHora={handleClick}
        ></BotonReservarHora>
        <button
          className="boton-expandir"
          onClick={() => setHorariosVisible(true)}
        >
          Expandir
        </button>
        <ExpandirBloqueHorario
          trigger={buttonPopup}
          setTrigger={setHorariosVisible}
        ></ExpandirBloqueHorario>
      </div>
    </div>
  );
}

export default MiniaturaBloqueHorario;
