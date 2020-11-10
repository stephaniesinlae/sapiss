import React, { useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import SistemaDigestivo from '../../components/SistemaDigestivo/SistemaDigestivo'
import BotonAtras from '../../components/BotonAtras/BotonAtras'
import { context } from '../../ContextProvider';


const SDigestivo = () => {

    const { list, getTasks, deleteStudent, selected, selectOnList, ShowSelected, notaSDigestivo, ShowSelectedPrueba  } = useContext(context);

    return (
        <div>
            <BotonAtras
                list={list}
                deleteStudent={deleteStudent}
                getTasks={getTasks}
                selected={selected}
                selectOnList={selectOnList}
            />
            <SistemaDigestivo 
            list={list}
            deleteStudent={deleteStudent}
            getTasks={getTasks}
            selected={selected}
            selectOnList={selectOnList}
            ShowSelected={ShowSelected}
            notaSDigestivo={notaSDigestivo}
            ShowSelectedPrueba={ShowSelectedPrueba}
            />
            <Footer />
        </div>
    )
}

export default SDigestivo
