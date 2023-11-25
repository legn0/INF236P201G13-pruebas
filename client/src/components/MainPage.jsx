import React, {useState} from 'react';
import "./MainPage.css";
import { Link, Routes, Route } from "react-router-dom";
import Calendar from './Calendar';
import RegistrarHorario from './RegistrarHorario';

function Button(text, Formulario) {
    if (text === "Registrar paciente") {
        return (
            <button className='btn primary' onClick={() => Formulario(true)}>
                {text}
            </button>
        );
    }

    return (
        <Link to='/calendar'>
            <button className='btn primary'>
                {text}
            </button>
        </Link>
    );
}

const MainPage = () => {

    const [button, Formulario] = useState(false);

    return (
        <div>
            <h1 style={{ padding: '50px', textAlign: 'center', fontSize: '50px' }}>Página Principal</h1>
            <div style={{ justifyContent: 'center', display: 'flex', padding: '50px' }}>
                {Button("E1")}
                {Button("E2")}
                {Button("E3")}
            </div>
            
                <Routes>
                    <Route exact path='/calendar' element={<Calendar />} />
                </Routes>
            
            <div style={{ textAlign: "center" }}> {Button("Registrar paciente", Formulario)}
                <RegistrarHorario trigger={button} setTrigger={Formulario}/>
            </div>
        </div>
    );
}

export default MainPage;
