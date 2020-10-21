/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Alumno/Alumno.css'
import '../SeleccionarActividad/SeleccionarActividad.css'
import AlumnoR from '../AlumnoR/AlumnoR';


const BotonAtras = ({ list, getTasks, selected }) => {
  const history = useHistory();

  return (
    <div>
      <div className="alineadoI fondoC">
        <button onClick={() => history.push(`/seleccionaractividad`)} className=" letraP btn fondoBoton text-white ">🔙ATRAS</button>
        <div className="text-black letraContestando">Está Contestando:
            <AlumnoR
              key={selected.id}
              id={selected.id}
              nombre={selected.nombre}
              apellido={selected.apellido}
              getTasks={getTasks}
            />
        </div>
        <div>
        </div>
      </div>
    </div>

  )
}

export default BotonAtras
