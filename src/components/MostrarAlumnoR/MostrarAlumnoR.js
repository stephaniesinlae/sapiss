import React, { useEffect } from 'react';
import AlumnoR from '../AlumnoR/AlumnoR';
import '../Alumno/Alumno.css';

const MostrarAlumnoR = ({list, getTasks}) => {

    useEffect(() => {
        console.log(list)
    }, [list])

    return (
        <div className="pad centrarAll fondoC">
            <div className="card">
                <div className="card-body">
                    <div className="card-header text-white bg-info centrarT letraG" style={{ maxWidth: 30 + 'rem' }}>
                        Listado de Alumno Ingresados</div>
                    <br />
                    {list && Object.keys(list).map((id) =>
                        <AlumnoR
                            key={id}
                            id={id}
                            nombre={list[id].nombre}
                            apellido={list[id].apellido}
                            getTasks={getTasks}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default MostrarAlumnoR
