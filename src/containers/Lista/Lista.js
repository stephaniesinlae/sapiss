import React  from 'react'
import AgregarAlumno from '../../components/AgregarAlumno/AgregarAlumno'
import Footer from '../../components/Footer/Footer'
import BotonMostrarNota from '../../components/MostrarAlumno/BotonMostrarNota'
import MostrarAlumno from '../../components/MostrarAlumno/MostrarAlumno'
import Navbar from '../../components/Navigation/Navigation'

const Lista = () => {

    return (
        <div>
            <Navbar />
            <AgregarAlumno/>
            <MostrarAlumno />
            <BotonMostrarNota />
            <Footer />
        </div>
    )
}

export default Lista
