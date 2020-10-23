import React from 'react'
import Footer from '../../components/Footer/Footer'
import MostrarNotaAlumno from '../../components/MostrarNotaAlumno/MostrarNotaAlumno'
import Navbar from '../../components/Navigation/Navigation'

const Notas = () => {
    return (
        <div>
            <Navbar />
            <MostrarNotaAlumno />
            <Footer />
        </div>
    )
}

export default Notas
