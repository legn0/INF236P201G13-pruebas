import React from "react";
import "./ExpandirBloqueHorario.css";
import MiniaturaExamen from "./MiniaturaExamen";

function ExpandirBloqueHorario(props) {
  return props.trigger ? (
    <div className="expandir-horario">
      <div className="expandir-inner">
        <button
          className="close-button"
          onClick={() => props.setTrigger(false)}
        >
          cerrar
        </button>
        <div className="bloque-contenido">
          <h2>Bloque hora xd de la mana</h2>
          <MiniaturaExamen nombrepaciente="pepe" medicotartante="juan" />
          <MiniaturaExamen nombrepaciente="pedro" medicotartante="Juanito" />
          <MiniaturaExamen nombrepaciente="peri" medicotartante="kilos" />
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ExpandirBloqueHorario;
