/* eslint-disable no-new-object */
import React, { useContext } from 'react';
import Footer from '../../components/Footer/Footer'
import MostrarAlumnoR from '../../components/MostrarAlumnoR/MostrarAlumnoR'
import Navbar from '../../components/Navigation/Navigation'
import SeleccionRandom from '../../components/SeleccionRandom/SeleccionRandom';
import { context } from '../../ContextProvider';

const Random = () => {

    const {list, getTasks, deleteStudent, selected, selectOnList } = useContext(context);

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
                selected={selected}
                selectOnList={selectOnList}
            />
            <Footer />
        </div>
    )
}

export default Random
