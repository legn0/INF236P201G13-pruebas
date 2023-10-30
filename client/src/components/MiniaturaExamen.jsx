import DetalleExamen from "./DetalleExamen";
import { useState } from "react";
import "./MiniaturaExamen.css";
const datos_falsos = ["Juan", "diego"];

function MiniaturaExamen(prop) {
  const [buttonPopup, setButtonPopup] = useState(false);

  //del prop viene el nombre, medico derivante y id del examen para la consulta del detalle
  return (
    <div className="miniatura-examen">
      <button onClick={() => setButtonPopup(true)} className="botoncito">
        <h4>Paciente: {prop.nombrepaciente}</h4>
        <h4>Medico tratante: {prop.medicotratante}</h4>
      </button>
      <DetalleExamen trigger={buttonPopup} setTrigger={setButtonPopup} />
    </div>
  );
}

export default MiniaturaExamen;
