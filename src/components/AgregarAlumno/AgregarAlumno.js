/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './AgregarAlumno.css'

const AgregarLista = () => {
    const ID = 'sapiss';

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleApellido = (e) => {
        setApellido(e.target.value);
    }

    const createTask = () => {
        if (nombre.length > 0 && apellido.length > 0) {
            const objeto = {
                scirculatorio: 'Sin responder',
                sdigestivo: 'Sin responder',
                snervioso: 'Sin responder',
                srespiratorio: 'Sin responder',
            }
            const body = {
                nombre: nombre,
                apellido: apellido,
                notas: objeto,
                habilitado: "si",
            }
            axios.post(`https://${ID}.firebaseio.com/alumno.json`, body)
                .then(() => {
                    history.push('/lista');
                    setNombre('');
                    setApellido('');
                    window.location.reload(true);
                })
                .catch(() => {
                    setError("Ocurrió un error de conexión");
                });
        } else {
            setError('Por favor, ingresar todos los datos del alumno.');
        }
    }


    return (
        <div className="card fondoY">
            <div className="container">
                <br />
                <h1 className="centrarT letraTitulo">Ingreso de Estudiantes</h1>
                <div className="form-group">
                    <label htmlFor="{id}" className="letraP">Ingresa los nombres del alumno/a.</label>
                    <input onChange={handleNombre} placeholder="Nombres" value={nombre} className="form-control letraP" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="{id}" className="letraP">Ingresa los apellidos del alumno/a.</label>
                    <input onChange={handleApellido} placeholder="Apellidos" value={apellido} className="form-control letraP" type="text" />
                </div>
                <div class="text-danger margenB">
                    {error}
                </div>
                <div className="centrarAll">
                    <button onClick={() => createTask()} type="submit" className=" letraP btn btn-primary">😄Agregar Alumno</button>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}

export default AgregarLista
