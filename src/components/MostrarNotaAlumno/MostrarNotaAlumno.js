/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react';
import AlumnoNota from '../AlumnoNota/AlumnoNota';
import Nota from '../Nota/Nota';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../Alumno/Alumno.css'

const MostrarNotaAlumno = () => {
    const [tasks, setTasks] = useState(undefined);
    const ID = 'sapiss';

    const getTasks = () => {
        axios.get(`https://${ID}.firebaseio.com/alumno.json`)
            .then(({ data }) => { setTasks(data) })
            .catch(() => { setTasks(undefined) });
    }

    // Obtiene task al momento de cargar el componente
    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div>
            <div className="pad fondoC fondoC">
                <div className="text-black centrarT letraG">
                    Listado de Notas de Alumno por Actividad</div>
                <br />
            </div>

            <div className="pad fondoM fila">
                <div className="card-body">
                    <div className="card-header text-black fondoW centrarT">👧Apellidos <br />y Nombres👦</div>
                    {tasks && Object.keys(tasks).map((id) =>
                        <AlumnoNota
                            key={id}
                            id={id}
                            nombre={tasks[id].nombre}
                            apellido={tasks[id].apellido}
                            getTasks={getTasks}
                        />)}
                </div>
                <div className="card-body">
                    <div className="card-header text-black fondoW centrarT">Actividad 1<br />💗Sistema Circulatorio🔄</div>
                    {tasks && Object.keys(tasks).map((id) =>
                        <Nota
                        // key={id}
                        // id={id}
                        // nombre={tasks[id].nombre}
                        // apellido={tasks[id].apellido}
                        // getTasks={getTasks}
                        />)}
                </div>
                <div className="card-body">
                    <div className="card-header text-black fondoW centrarT">Actividad 2 <br />🍔Sistema Digestivo😋</div>
                    {tasks && Object.keys(tasks).map((id) =>
                        <Nota
                        // key={id}
                        // id={id}
                        // nombre={tasks[id].nombre}
                        // apellido={tasks[id].apellido}
                        // getTasks={getTasks}
                        />)}
                </div>
                <div className="card-body">
                    <div className="card-header text-black fondoW centrarT">Actividad 3<br />🧠Sistema Nervioso🥴</div>
                    {tasks && Object.keys(tasks).map((id) =>
                        <Nota
                        // key={id}
                        // id={id}
                        // nombre={tasks[id].nombre}
                        // apellido={tasks[id].apellido}
                        // getTasks={getTasks}
                        />)}
                </div>
                <div className="card-body">
                    <div className="card-header text-black fondoW centrarT">Actividad 4<br /> 👃 Sistema Respiratorio🤧</div>
                    {tasks && Object.keys(tasks).map((id) =>
                        <Nota
                        // key={id}
                        // id={id}
                        // nombre={tasks[id].nombre}
                        // apellido={tasks[id].apellido}
                        // getTasks={getTasks}
                        />)}
                </div>
            </div>
            <div className="alineadoD fondoC">
                <button onClick={() => window.print()} className=" letraP btn fondoBoton text-white ">
                    🖨️Imprimir Notas</button>
                <div>
                    {}
                </div>
            </div>
        </div>
    )
}

export default MostrarNotaAlumno
