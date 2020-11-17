import React, { useContext } from 'react'
import AgregarAlumno from '../../components/AgregarAlumno/AgregarAlumno'
import Footer from '../../components/Footer/Footer'
import BotonMostrarNota from '../../components/MostrarAlumno/BotonMostrarNota'
import MostrarAlumno from '../../components/MostrarAlumno/MostrarAlumno'
import Navbar from '../../components/Navigation/Navigation'
import { context } from '../../ContextProvider';

const Lista = () => {
    const { list, getTasks, deleteStudent, selected, selectOnList, ShowSelected } = useContext(context);
    return (
        <div>
            <Navbar />
            <AgregarAlumno/>
            <MostrarAlumno 
            list={list}
            getTasks={getTasks}
            deleteStudent={deleteStudent}
            selected={selected}
            selectOnList={selectOnList}
            ShowSelected={ShowSelected}
            />
            <BotonMostrarNota />
            <Footer />
        </div>
    )
}

export default Lista
