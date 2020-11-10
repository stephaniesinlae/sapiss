/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Alumno/Alumno.css'
import '../SeleccionarActividad/SeleccionarActividad.css'
import AlumnoR from '../AlumnoR/AlumnoR';
import { useUser } from 'reactfire';
import { Alert } from '@material-ui/lab';

const BotonAtras = ({ list, getTasks, selected }) => {
  const history = useHistory();
  const user = useUser();

  return (
    <div>{
      !selected.id &&
      <div>
        <Alert severity="warning">
          No hay un alumno seleccionado, estás en <strong>MODO PRUEBA.</strong>
        </Alert>
        <div className="alineadoI fondoC">
          <button onClick={() => history.push(`/seleccionaractividad`)} className=" letraP btn fondoBoton text-white ">🔙ATRAS</button>
          <div className="text-black letraContestando">Está Contestando:
        <p>{user.email}</p>
          </div>
        </div>
      </div>
    }
      {
        selected.id &&
        <div>
          <Alert severity="success">
            Si hay un alumno seleccionado — <strong>Ya puede trabajar!</strong>
          </Alert>
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
          </div>
        </div>
      }
    </div>

  )
}

export default BotonAtras
