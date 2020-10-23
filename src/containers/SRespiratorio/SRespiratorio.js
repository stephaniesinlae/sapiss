import React, { useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import SistemaRespiratorio from '../../components/SistemaRespiratorio/SistemaRespiratorio'
import BotonAtras from '../../components/BotonAtras/BotonAtras'
import { context } from '../../ContextProvider';

const SRespiratorio = () => {

    const { list, getTasks, deleteStudent, selected, selectOnList, ShowSelected, notaSRespiratorio } = useContext(context);

    return (
        <div>
            <BotonAtras
                list={list}
                deleteStudent={deleteStudent}
                getTasks={getTasks}
                selected={selected}
                selectOnList={selectOnList}
            />
            <SistemaRespiratorio
                list={list}
                deleteStudent={deleteStudent}
                getTasks={getTasks}
                selected={selected}
                selectOnList={selectOnList}
                ShowSelected={ShowSelected}
                notaSRespiratorio={notaSRespiratorio}
            />
            <Footer />
        </div>
    )
}

export default SRespiratorio