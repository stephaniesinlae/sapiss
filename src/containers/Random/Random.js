import React from 'react';
import Footer from '../../components/Footer/Footer'
import MostrarAlumnoR from '../../components/MostrarAlumnoR/MostrarAlumnoR'
import Navbar from '../../components/Navigation/Navigation'
import SeleccionRandom from '../../components/SeleccionRandom/SeleccionRandom';

const Random = () => {
    return (
        <div>
            <Navbar />
            <MostrarAlumnoR />
            <SeleccionRandom />
            <Footer />
        </div>
    )
}

export default Random
