/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import Alumno from '../Alumno/Alumno';
import axios from 'axios';
import './SeleccionRandom.css';
import 'firebase';
// import { useFirebaseApp } from 'reactfire';

const SeleccionRandom = () => {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState({ position: null, name: '' });
  const ID = 'sapiss';
  // const firebase = useFirebaseApp();

  const getTasks = () => {
    axios.get(`https://${ID}.firebaseio.com/alumno.json`)
      .then(({ data }) => { setList(data) })
      .catch(()=> {setList([])});
  }

  // Obtiene task al momento de cargar el componente
  useEffect(() => {
    getTasks();
  }, [])

  const selectOnList = () => {
    let position;
    const interval = setInterval(() => {
      position = Math.floor(Math.random() * list.length);
      setSelected({ position, name: list[position] });
    }, 200);
    setTimeout(() => { clearInterval(interval); }, 500);
  }

  // const selectOnList = () => {
  //   const randomIndex = Math.floor(Math.random() * list.length);
  //   var ref = firebase.database().ref('alumno');
  //   ref.limitToFirst(randomIndex).limitToLast(1).once('value').then(snapshot => {
  //     setSelected = snapshot.val();
  //     // do something with the user data
  //   });
  // }

  return (
    <div className="centrarAll fondoRandom">
      <div>
        <button onClick={selectOnList} type="submit" className=" letraP btn btn-primary">🎉¡RAAANDOOM!</button>
        <div>
          {list && Object.keys(selected.name).map((id) =>
            <Alumno
              key={id}
              id={id}
              nombre={list[id].nombre}
              apellido={list[id].apellido}
              getTasks={getTasks}
            />)}
        </div>
      </div>
    </div>
  )
}

export default SeleccionRandom;