/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react'
import '../Alumno/Alumno.css'
import { useUser } from 'reactfire';
import axios from 'axios';
import AlumnoNota from '../AlumnoNota/AlumnoNota';
import Nota from '../Nota/Nota';
import { useHistory } from 'react-router-dom';

const GenerarReporte = () => {
    const history = useHistory();
    const user = useUser();
    const [tasks, setTasks] = useState(undefined);
    const ID = 'sapiss';

    const getTasks = () => {

        axios.get(`https://${ID}.firebaseio.com/alumno.json`)
            .then(({ data }) => { setTasks(data) })
            .catch(() => { setTasks(undefined) });
    }

    useEffect(() => {
        getTasks();
    }, []);

    let fecha = new Date();
    let mesok = new Array(12);
    mesok[0] = "Enero";
    mesok[1] = "Febrero";
    mesok[2] = "Marzo";
    mesok[3] = "Abril";
    mesok[4] = "Mayo";
    mesok[5] = "Junio";
    mesok[6] = "Julio";
    mesok[7] = "Agosto";
    mesok[8] = "Septiembre";
    mesok[9] = "Octubre";
    mesok[10] = "Noviembre";
    mesok[11] = "Diciembre";

    let dia = new Array(7);
    dia[0] = "Domingo";
    dia[1] = "Lunes";
    dia[2] = "Martes";
    dia[3] = "Miercoles";
    dia[4] = "Jueves";
    dia[5] = "Viernes";
    dia[6] = "Sabado";

    return (
        <div className="pad">
            <div id="parte1">
                <button onClick={() => history.push(`/lista`)} className=" letraP btn fondoBoton text-white ">
                    🔙REGRESAR
                </button>
                <br/>
            </div>
            <div id="printable">
                <div className="text-black centrarT letraG">
                    Informe sobre las Notas Obtenidas por los Alumnos.
                </div>
                <br />
                <div className="centrarWPad">
                    <div className="pad fila">
                        <div className="card-body">
                            <div className="card-header text-black fondoW centrarT" >Apellidos <br />y Nombres</div>
                            {tasks && Object.keys(tasks).map((id) =>
                                <AlumnoNota
                                    key={id}
                                    id={id}
                                    nombre={tasks[id].nombre}
                                    apellido={tasks[id].apellido}
                                    getTasks={getTasks}
                                />)}
                        </div>
                        <div className="card-body">
                            <div className="card-header text-black fondoW centrarT">Actividad 1<br />Sistema Circulatorio</div>
                            {tasks && Object.keys(tasks).map((id) =>
                                <Nota
                                    key={id}
                                    id={id}
                                    nota={tasks[id].notas.scirculatorio.nota}
                                    getTasks={getTasks}
                                />)}
                        </div>
                        <div className="card-body">
                            <div className="card-header text-black fondoW centrarT">Actividad 2 <br />Sistema Digestivo</div>
                            {tasks && Object.keys(tasks).map((id) =>
                                <Nota
                                    key={id}
                                    id={id}
                                    nota={tasks[id].notas.sdigestivo.nota}
                                    getTasks={getTasks}
                                />)}
                        </div>
                        <div className="card-body">
                            <div className="card-header text-black fondoW centrarT">Actividad 3<br />Sistema Nervioso</div>
                            {tasks && Object.keys(tasks).map((id) =>
                                <Nota
                                    key={id}
                                    id={id}
                                    nota={tasks[id].notas.snervioso.nota}
                                    getTasks={getTasks}
                                />)}
                        </div>
                        <div className="card-body">
                            <div className="card-header text-black fondoW centrarT">Actividad 4<br />Sistema Respiratorio</div>
                            {tasks && Object.keys(tasks).map((id) =>
                                <Nota
                                    key={id}
                                    id={id}
                                    nota={tasks[id].notas.srespiratorio.nota}
                                    getTasks={getTasks}
                                />)}
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="text-black derechaT letraP">
                    Reporte generado por:
                <strong><i>{user.email}</i>.</strong>
                </div>
                <div className="text-black izquierdaT letraTime">
                    Impreso en fecha: {dia[fecha.getDay()]}, {fecha.getDate()} de {mesok[fecha.getMonth()]} del {fecha.getFullYear()}.
                <br />
                Hora: {fecha.getHours()}: {fecha.getMinutes()}: {fecha.getSeconds()}.
                </div>
            </div>
            <br />
            <div id="parte1">
                <button onClick={() => window.print()} className=" letraP btn fondoBoton text-white ">
                    🖨️Imprimir Notas</button>
            </div>
            <br />
        </div>
    )
}

export default GenerarReporte
