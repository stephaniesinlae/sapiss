/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import AlumnoR from '../AlumnoR/AlumnoR';
import './SeleccionRandom.css';
import 'firebase';

const SeleccionRandom = ({list, deleteStudent, getTasks}) => {
  const [selected, setSelected] = useState({ position: null, name: '' });

  const selectOnList = () => {
  
    const ids = Object.keys(list);
    let position;
    const interval = setInterval(() => {
      position = Math.floor(Math.random() * ids.length);
      setSelected({...list[ids[position]], id: ids[position]});
      deleteStudent(ids[position]);
    }, 200);
    setTimeout(() => { clearInterval(interval); }, 200);
  }

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