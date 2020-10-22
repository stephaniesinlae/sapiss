/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Alumno/Alumno.css'
import '../SeleccionarActividad/SeleccionarActividad.css'

const BotonFinalizarA = () => {
    const history = useHistory();
    return (
        <div className="alineadoD fondoC">
          <button type="submit" value="Submit" onClick={() => history.push(`/mostrarnota`)} className=" letraP btn fondoBoton text-white ">✅FINALIZAR ACTIVIDAD</button>
        </div>
    )
}

export default BotonFinalizarA
