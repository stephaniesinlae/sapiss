import React, { useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import SistemaNervioso from '../../components/SistemaNervioso/SistemaNervioso'
import BotonAtras from '../../components/BotonAtras/BotonAtras'
import BotonFinalizarA from '../../components/BotonFinalizarA/BotonFinalizarA'
import { context } from '../../ContextProvider';


const SNervioso = () => {

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
        <SistemaNervioso />
        <BotonFinalizarA />
        <Footer />
    </div>
    )
}

export default SNervioso
