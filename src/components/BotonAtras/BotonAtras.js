/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Alumno/Alumno.css'
import '../SeleccionarActividad/SeleccionarActividad.css'

const BotonAtras = () => {
    const history = useHistory();

    return (
        <div className="alineadoI fondoC">
          <button onClick={() => history.push(`/seleccionaractividad`)} className=" letraP btn fondoBoton text-white ">🔙ATRAS</button>
          <div className="text-black letraTodo">Está Contestando:</div>
          {/* <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" /> */}
        </div>
    )
}

export default BotonAtras
