import React, { useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import SistemaCirculatorio from '../../components/SistemaCirculatorio/SistemaCirculatorio'
import BotonAtras from '../../components/BotonAtras/BotonAtras'
import BotonFinalizarA from '../../components/BotonFinalizarA/BotonFinalizarA'
import { context } from '../../ContextProvider';

const SCirculatorio = () => {

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
            <SistemaCirculatorio />
            <BotonFinalizarA />
            <Footer />
        </div>
    )
}

export default SCirculatorio;