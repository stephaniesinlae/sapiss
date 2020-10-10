import React, { useEffect, useState } from 'react';
import AlumnoR from '../AlumnoR/AlumnoR';
import axios from 'axios';
import '../Alumno/Alumno.css'

const MostrarAlumnoR = () => {
    const [tasks, setTasks] = useState(undefined);
    const ID = 'sapiss';

    const getTasks = () => {
        axios.get(`https://${ID}.firebaseio.com/alumno.json`)
            .then(({ data }) => {setTasks(data)})      
            .catch(()=> {setTasks(undefined)});
    }
    // Obtiene task al momento de cargar el componente
    useEffect(() => {
        getTasks();
    }, []);

    return (
        <div className="pad centrarAll fondoC">
            <div className="card">
                <div className="card-body">
                    <div className="card-header text-white bg-info centrarT letraG" style={{ maxWidth: 30 + 'rem' }}>
                        Listado de Alumno Ingresados</div>
                    <br />
                    {tasks && Object.keys(tasks).map((id) =>
                        <AlumnoR
                            key={id}
                            id={id}
                            nombre={tasks[id].nombre}
                            apellido={tasks[id].apellido}
                            getTasks={getTasks}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default MostrarAlumnoR
