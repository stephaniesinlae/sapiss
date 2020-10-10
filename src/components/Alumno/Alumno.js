/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Alumno.css'

const Alumno = ({ id, nombre, apellido, getTasks }) => {
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

    const deleteAlumno = () => {
        console.log(PROJECT, id)
        axios.delete(`https://${PROJECT}.firebaseio.com/alumno/${id}.json`)
            .then(() => getTasks())
    }

    return (
        <div className="card text-white bg-warning mb-2" style={{ maxWidth: 40 + 'rem' }}>
            <div className="card-body columna centrarT">
                <h6 className="letraP">{apellido}, {nombre}</h6>
                <button onClick={() => deleteAlumno()}
                    type="button" className="btn btn-primary">Eliminar 🔥</button>
            </div>
        </div>
    )
}

export default Alumno;