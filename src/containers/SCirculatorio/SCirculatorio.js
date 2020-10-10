import React from 'react'
import Footer from '../../components/Footer/Footer'
import SistemaCirculatorio from '../../components/SistemaCirculatorio/SistemaCirculatorio'
import BotonAtras from '../../components/BotonAtras/BotonAtras'
import BotonFinalizarA from '../../components/BotonFinalizarA/BotonFinalizarA'

const SCirculatorio = () => {
    return (
        <div>
        <BotonAtras />
        <SistemaCirculatorio />
        <BotonFinalizarA />
        <Footer />
    </div>
    )
}

export default SCirculatorio
