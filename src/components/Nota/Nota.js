/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../Alumno/Alumno.css';

const Nota = ({ id, nota, getTasks }) => {
const PROJECT = 'sapiss';

    const history = useHistory();

    const handleChange = () => {
        const body = {};
        body[id] = {
            nota: nota,
        }
        axios.patch(`https://${PROJECT}.firebaseio.com/alumno/${id}/nota.json`, body)
            .then(() => {
                history.push('/lista');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="card text-white bg-warning mb-2" style={{ maxWidth: 40 + 'rem' }}>
            <div className="card-body columna centrarT">
                <h6 className="letraP"> {nota} respuestas correctas.</h6>
            </div>
        </div>
    )
}

export default Nota
