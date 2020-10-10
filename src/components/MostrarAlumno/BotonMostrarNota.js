/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Alumno/Alumno.css'

const BotonMostrarNota = () => {
    
    const history = useHistory();

    return (
        <div className="alineadoD fondoC">
          <button onClick={() => history.push(`/mostrarnota`)} className=" letraP btn fondoBoton text-white ">👀Mostrar Notas de Alumnos</button>
          {/* <button onclick={() => window.print()}>Imprimir pantalla con otro ejemplo</button> */}
          <div>
            {}
          </div>
        </div>
    )
}

export default BotonMostrarNota
