import React, { useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import SistemaCirculatorio from '../../components/SistemaCirculatorio/SistemaCirculatorio'
import BotonAtras from '../../components/BotonAtras/BotonAtras'
import { context } from '../../ContextProvider';

const SCirculatorio = () => {

    const { list, getTasks, deleteStudent, selected, selectOnList, ShowSelected, notaSCirculatorio, ShowSelectedPrueba } = useContext(context);

    return (
        <div>
            <BotonAtras
                list={list}
                deleteStudent={deleteStudent}
                getTasks={getTasks}
                selected={selected}
                selectOnList={selectOnList}
            />
            <SistemaCirculatorio
                list={list}
                deleteStudent={deleteStudent}
                getTasks={getTasks}
                selected={selected}
                selectOnList={selectOnList}
                ShowSelected={ShowSelected}
                notaSCirculatorio={notaSCirculatorio}
                ShowSelectedPrueba={ShowSelectedPrueba}
            />
            <Footer />
        </div>
    )
}

export default SCirculatorio;