/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import '../Alumno/Alumno.css'
import '../SeleccionarActividad/SeleccionarActividad.css'

const BotonFinalizarA = ({ ShowSelected, notaSCirculatorio }) => {


  return (
    <div className="alineadoD fondoC">
      <button type="submit" value="Submit" onClick={ShowSelected} className=" letraP btn fondoBoton text-white ">✅FINALIZAR ACTIVIDAD.</button>
      <br></br>
      <button type="submit" value="Submit" onClick={notaSCirculatorio} className=" letraP btn fondoBoton text-white ">📮 Guardar Notas de Alumno.</button>
    </div>
  )
}

export default BotonFinalizarA
