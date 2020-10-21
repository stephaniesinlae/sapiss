/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import AlumnoR from '../AlumnoR/AlumnoR';
import './SeleccionRandom.css';
import 'firebase';

const SeleccionRandom = ({ list, getTasks, selected, selectOnList }) => {
console.log(selected.nombre);
  return (
    <div className="centrarAll fondoRandom">
      <div>
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
  )
}

export default SeleccionRandom;