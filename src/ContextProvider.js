// ESTADOS GLOBALES
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const context = createContext();

const ContextProvider = ({ children }) => {
    const [list, setList] = useState({});
    const ID = 'sapiss';
    const history = useHistory();

    const getTasks = () => {
        axios.get(`https://${ID}.firebaseio.com/alumno.json`)
            .then(({ data }) => { setList(data) })
            .catch(() => { setList({}) });
    }

    // Obtiene task al momento de cargar el componente
    useEffect(() => {
        getTasks();
    }, [])

    const deleteStudent = (id) => {
        let newList = { ...list };
        delete newList[id];
        setList(newList);
    }
    
    const [selected, setSelected] = useState({ position: null, name: '' });
    const selectOnList = () => {
        const ids = Object.keys(list);
        let position;
        const interval = setInterval(() => {
            position = Math.floor(Math.random() * ids.length);
            setSelected({ ...list[ids[position]], id: ids[position] });
            deleteStudent(ids[position]);
        }, 200);
        setTimeout(() => { clearInterval(interval); }, 200);
    }

    const [respuestasCorrectas, setrespuestasCorrectas] = useState('');
    const ShowSelected = () => {
        let cod1 = document.getElementById("exampleSelect1").value;
        let cod2 = document.getElementById("exampleSelect2").value;
        let cod3 = document.getElementById("exampleSelect3").value;
        let cod4 = document.getElementById("exampleSelect4").value;
        let cod5 = document.getElementById("exampleSelect5").value;
        let cod6 = document.getElementById("exampleSelect6").value;

        let nota1;
        let nota2;
        let nota3;
        let nota4;
        let nota5;
        let nota6;

        if (cod1 === '1') {
            nota1 = 1;
        } else {
            nota1 = 0;
        }

        if (cod2 === '1') {
            nota2 = 1;
        } else {
            nota2 = 0;
        }

        if (cod3 === '1') {
            nota3 = 1
        } else {
            nota3 = 0;
        }

        if (cod4 === '1') {
            nota4 = 1
        } else {
            nota4 = 0;
        }

        if (cod5 === '1') {
            nota5 = 1
        } else {
            nota5 = 0;
        }

        if (cod6 === '1') {
            nota6 = 1
        } else {
            nota6 = 0;
        }

        setrespuestasCorrectas(nota1 + nota2 + nota3 + nota4 + nota5 + nota6);
        const rcorrectas = nota1 + nota2 + nota3 + nota4 + nota5 + nota6;
        if ( rcorrectas >= 3 ) {
            alert('Felicidades!! ' + selected.nombre + ' Obtuviste ' + rcorrectas + ' de 6 respuestas correctas.✅ Lo hiciste muy bien.');
        } else {
            alert(selected.nombre + ' obtuviste ' + rcorrectas + ' de 6 respuestas correctas.📖 Hay que seguir estudiando.');
        }
    }

    const calificar = () => {

    }

    const notaSCirculatorio = () => {
        const actividad = 'scirculatorio';
        const idAlumno = selected.id;
        const correctas = respuestasCorrectas;
    
        const body = {
            nota: correctas + " respuestas correctas",
        }
        axios.patch(`https://${ID}.firebaseio.com/alumno/${idAlumno}/notas/${actividad}.json`, body)
            .then(() => {
                history.push(`/mostrarnota`);
            })
            .catch(() => {
                console.log('Error')
            });
    }

    const notaSDigestivo = () => {
        const actividad = 'sdigestivo';
        const idAlumno = selected.id;
        const correctas = respuestasCorrectas;
    
        const body = {
            nota: correctas + " respuestas correctas",
        }
        axios.patch(`https://${ID}.firebaseio.com/alumno/${idAlumno}/notas/${actividad}.json`, body)
            .then(() => {
                history.push(`/mostrarnota`);
            })
            .catch(() => {
                console.log('Error')
            });
    }

    const notaSNervioso = () => {
        const actividad = 'snervioso';
        const idAlumno = selected.id;
        const correctas = respuestasCorrectas;
    
        const body = {
            nota: correctas + " respuestas correctas",
        }
        axios.patch(`https://${ID}.firebaseio.com/alumno/${idAlumno}/notas/${actividad}.json`, body)
            .then(() => {
                history.push(`/mostrarnota`);
            })
            .catch(() => {
                console.log('Error')
            });
    }

    const notaSRespiratorio = () => {
        const actividad = 'srespiratorio';
        const idAlumno = selected.id;
        const correctas = respuestasCorrectas;
    
        const body = {
            nota: correctas + " respuestas correctas",
        }
        axios.patch(`https://${ID}.firebaseio.com/alumno/${idAlumno}/notas/${actividad}.json`, body)
            .then(() => {
                history.push(`/mostrarnota`);
            })
            .catch(() => {
                console.log('Error')
            });
    }

    return (
        <context.Provider value={{ list, getTasks, deleteStudent, selected, selectOnList, calificar, ShowSelected, notaSCirculatorio, notaSDigestivo, notaSNervioso, notaSRespiratorio }}>
            {children}
        </context.Provider>
    )
}

ContextProvider.prototype = {
    children: PropTypes.node
}

ContextProvider.defaultProps = {
    children: null
}

export { ContextProvider, context };
