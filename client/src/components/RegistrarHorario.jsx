import React from "react";
import "./ExpandirBloqueHorario.css";



function RegistrarHorario(props) {
    return props.trigger ? (
        <div className="expandir-horario">
            <div className="expandir-inner">
                <button
                    className="close-button"
                    onClick={() => props.setTrigger(false)}
                > cerrar
                </button>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
                <form style={{ display: 'block', textAlign: 'center'}}>
                    <div style={{marginBottom: '20px'}}>
                        <label for="rut">RUT:</label>
                        <input
                            type="text"
                            id="rut"
                            placeholder="Ingrese RUT del paciente"
                            required
                        />
                    </div>
                    <div style={{marginBottom: '20px'}}>
                        <label for="name">Nombre:</label>
                        <input
                            type="name"
                            id="name"
                            placeholder="Ingrese nombre del paciente"
                            required
                        />
                    </div>
                    <div style={{marginBottom: '20px'}}>
                        <label for="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ingrese correo electrónico del paciente"
                            required
                        />
                    </div>
                    <div style={{marginBottom: '20px'}}>
                        <label for="number">Teléfono:</label>
                        <input
                            type="text"
                            id="number"
                            placeholder="Ingrese número del paciente"
                            required
                        />
                    </div>
                </form>
                </div>
                <button onClick={() => {
                    props.setTrigger(false);
                    alert('¡Usuario registrado con éxito!'); 
                    }}>Submit</button>
            </div>
        </div>
    ) : ("");
}

export default RegistrarHorario;