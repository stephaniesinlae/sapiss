/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../Alumno/Alumno.css';

const AlumnoNota = ({ id, nombre, apellido, getTasks }) => {
    const PROJECT = 'sapiss';

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

    return (
        <div className="card text-black fondoBoton mb-2" style={{ maxWidth: 40 + 'rem' }}>
            <div className="card-body columna centrarT">
    <h6 className="letraP">{apellido}, {nombre}</h6>
            </div>
        </div>
    )
}

export default AlumnoNota
