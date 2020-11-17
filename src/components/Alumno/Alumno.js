/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Alumno.css'

const Alumno = ({ id, nombre, apellido, habilitado }) => {
    const PROJECT = 'sapiss';
    const [desabilitado, setDesabilitado] = useState("no");
    const history = useHistory();

    const handleChange = () => {
        const body = {};
        body[id] = {
            nombre: nombre,
            apellido: apellido
        }
        axios.patch(`https://${PROJECT}.firebaseio.com/alumno.json`, body)
            .then(() => {
                history.push('/lista');
            })
            .catch(err => console.log(err));
    }

    const anularAlumno = () => {
        const body = {
            habilitado: desabilitado,
        }
        axios.patch(`https://${PROJECT}.firebaseio.com/alumno/${id}/habilitado.json`, body)
            .then(data => setDesabilitado(desabilitado),
                alert('Alumno Desabilitado con Exito!'),
                history.push('/lista'),
                window.location.reload(true))
            .catch(err => console.log(err));
        
    }

    return (
        <div>
            { habilitado === "si" &&
                <div className="card text-white bg-warning mb-2" style={{ maxWidth: 40 + 'rem' }}>
                    <div className="card-body columna centrarT">
                        <h6 className="letraP">{apellido}, {nombre}</h6>
                        <button onClick={() => anularAlumno()}
                            type="button" className="btn btn-primary">❌ Anular</button>
                    </div>
                </div>
            }
        </div>

    )
}

export default Alumno;