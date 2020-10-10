import React from 'react'
import Footer from '../../components/Footer/Footer'
import SistemaDigestivo from '../../components/SistemaDigestivo/SistemaDigestivo'
import BotonAtras from '../../components/BotonAtras/BotonAtras'
import BotonFinalizarA from '../../components/BotonFinalizarA/BotonFinalizarA'

const SDigestivo = () => {
    return (
        <div>
        <BotonAtras />
        <SistemaDigestivo />
        <BotonFinalizarA />
        <Footer />
    </div>
    )
}

export default SDigestivo
