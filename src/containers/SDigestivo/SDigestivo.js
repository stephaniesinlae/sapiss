import React, { useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import SistemaDigestivo from '../../components/SistemaDigestivo/SistemaDigestivo'
import BotonAtras from '../../components/BotonAtras/BotonAtras'
import BotonFinalizarA from '../../components/BotonFinalizarA/BotonFinalizarA'
import { context } from '../../ContextProvider';


const SDigestivo = () => {

    const { list, getTasks, deleteStudent, selected, selectOnList } = useContext(context);

    return (
        <div>
            <BotonAtras
                list={list}
                deleteStudent={deleteStudent}
                getTasks={getTasks}
                selected={selected}
                selectOnList={selectOnList}
            />
            <SistemaDigestivo />
            <BotonFinalizarA />
            <Footer />
        </div>
    )
}

export default SDigestivo
