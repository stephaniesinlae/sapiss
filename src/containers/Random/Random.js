/* eslint-disable no-new-object */
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer'
import MostrarAlumnoR from '../../components/MostrarAlumnoR/MostrarAlumnoR'
import Navbar from '../../components/Navigation/Navigation'
import SeleccionRandom from '../../components/SeleccionRandom/SeleccionRandom';
import axios from 'axios';

const Random = () => {
    const [list, setList] = useState({});
    const ID = 'sapiss';

    const getTasks = () => {
        axios.get(`https://${ID}.firebaseio.com/alumno.json`)
            .then(({ data }) => { setList(data) })
            .catch(() => { setList({}) });
    }

    // Obtiene task al momento de cargar el componente
    useEffect(() => {
        getTasks();
    }, [])

    const deleteStudent = (id) => {
        let newList = {...list};
        delete newList[id];
        setList(newList);
    }

    return (
        <div>
            <Navbar />
            <MostrarAlumnoR
                list={list}
            />
            <SeleccionRandom
                list={list}
                deleteStudent={deleteStudent}
                getTasks={getTasks}
            />
            <Footer />
        </div>
    )
}

export default Random
