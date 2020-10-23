import React, { useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import SistemaNervioso from '../../components/SistemaNervioso/SistemaNervioso'
import BotonAtras from '../../components/BotonAtras/BotonAtras'
import { context } from '../../ContextProvider';


const SNervioso = () => {

    const { list, getTasks, deleteStudent, selected, selectOnList, ShowSelected, notaSNervioso } = useContext(context);

    return (
        <div>
            <BotonAtras
                list={list}
                deleteStudent={deleteStudent}
                getTasks={getTasks}
                selected={selected}
                selectOnList={selectOnList}
            />
            <SistemaNervioso
                list={list}
                deleteStudent={deleteStudent}
                getTasks={getTasks}
                selected={selected}
                selectOnList={selectOnList}
                ShowSelected={ShowSelected}
                notaSNervioso={notaSNervioso}
            />
            <Footer />
        </div>
    )
}

export default SNervioso
