/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import AlumnoR from '../AlumnoR/AlumnoR';
import './SeleccionRandom.css';
import 'firebase';

const SeleccionRandom = ({ list, getTasks, selected, selectOnList }) => {

  const reload = () => {
    window.location.reload(true);

  }
  return (
    <div>
      <div className="centrarAll fondoRandom">
        <div>
          <br>
          </br>
          <br>
          </br>
          <button onClick={selectOnList} type="submit" className=" letraP btn btn-primary">🎉¡RAAANDOOM!</button>
          <div>
            {list && selected &&
              <AlumnoR
                key={selected.id}
                id={selected.id}
                nombre={selected.nombre}
                apellido={selected.apellido}
                getTasks={getTasks}
              />}
          </div>
        </div>
      </div>
      <div className="derecha fondoRandom">
        <button onClick={reload} type="submit" className=" letraP btn btn-primary">🔄Reiniciar Lista.</button>
      </div>
    </div>
  )
}

export default SeleccionRandom;