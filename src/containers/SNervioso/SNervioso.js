import React from 'react'
import Footer from '../../components/Footer/Footer'
import SistemaNervioso from '../../components/SistemaNervioso/SistemaNervioso'
import BotonAtras from '../../components/BotonAtras/BotonAtras'
import BotonFinalizarA from '../../components/BotonFinalizarA/BotonFinalizarA'

const SNervioso = () => {
    return (
        <div>
        <BotonAtras />
        <SistemaNervioso />
        <BotonFinalizarA />
        <Footer />
    </div>
    )
}

export default SNervioso
