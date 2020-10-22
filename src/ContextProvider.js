// ESTADOS GLOBALES
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const context = createContext();

const ContextProvider = ({ children }) => {
    const [list, setList] = useState({});
    const ID = 'sapiss';

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

    const calificar = () => {
        // constructor(props){
        //     super(props);
        //     this.state = { value: '' };
        //     this.handleChange = this.handleChange.bind(this);
        //     this.handleSubmit = this.handleSubmit.bind(this);
        // }
        // const handleChange = (event) => {
        //     console.log(`Seleccionaste ${event.target.value}`);
        //     this.setState({ value: event.target.value });
        //     setTimeout(() => console.clear(), 1000);
        // }

        // const handleSubmit = (event) => {
        //     alert('Tu país es: ' + this.state.value);
        //     event.preventDefault();
        // }
    }

    return (
        <context.Provider value={{ list, getTasks, deleteStudent, selected, selectOnList, calificar }}>
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
