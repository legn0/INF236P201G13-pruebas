import React from "react";
import "./DetalleExamen.css";

function DetalleExamen(props) {
  return props.trigger ? (
    <div className="detalle-examen">
      <div className="detalle-inner">
        <button
          className="close-button"
          onClick={() => props.setTrigger(false)}
        >
          cerrar
        </button>
        <div className="detalle-contenido">
          aqui pon lo que vaya aqui adentro ajio ajio
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default DetalleExamen;
