import React from 'react'
import Footer from '../../components/Footer/Footer'
import SistemaRespiratorio from '../../components/SistemaRespiratorio/SistemaRespiratorio'
import BotonAtras from '../../components/BotonAtras/BotonAtras'
import BotonFinalizarA from '../../components/BotonFinalizarA/BotonFinalizarA'


const SRespiratorio = () => {
    return (
        <div>
            <BotonAtras />
            <SistemaRespiratorio />
            <BotonFinalizarA />
            <Footer />
        </div>
    )
}

export default SRespiratorio