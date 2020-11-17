import React, { useContext } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navigation/Navigation'
import GenerarReporte from '../../components/GenerarReporte/GenerarReporte'
import { context } from '../../ContextProvider';

const GenerarReportes = () => {
    const { list, getTasks, deleteStudent, selected, selectOnList, calificar, ShowSelected, notaSCirculatorio, notaSDigestivo, notaSNervioso, notaSRespiratorio, ShowSelectedPrueba } = useContext(context);
    return (
        <div>
            <Navbar />
            <GenerarReporte 
            list={list}
            getTasks={getTasks}
            deleteStudent={deleteStudent}
            selected={selected}
            selectOnList={selectOnList}
            calificar={calificar}
            ShowSelected={ShowSelected}
            notaSCirculatorio={notaSCirculatorio}
            notaSDigestivo={notaSDigestivo}
            notaSNervioso={notaSNervioso}
            notaSRespiratorio={notaSRespiratorio}
            ShowSelectedPrueba={ShowSelectedPrueba}
            />
            <Footer />
        </div>
    )
}

export default GenerarReportes
