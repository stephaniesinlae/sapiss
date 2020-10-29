import React, { useState } from 'react';
//Unicamenta para nuestra Nav 
import { Link, useHistory } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import logo from '../img/logo.png';
import './Navbar.css'
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const firebase = useFirebaseApp();
    const history = useHistory();

    const cerrarS = async () => {
        await firebase.auth().signOut();
        alert('Cierre de Sesión con éxito');
        history.push('./');
        // window.location.reload(true);
    }

    return (
        <Navbar
            className="navbar navbar-dark navColor tipografia tGrande"
            expand="md">
            <img src={logo} alt="logo sappis" className="navbar-img" />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/lista" style={{ color: "#EF476F " }} className="mar tipografia">Agregar Alumno</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/random" style={{ color: "white " }} className="mar tipografia">Seleccionar Alumno</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/seleccionaractividad" style={{ color: "#EF476F " }} className="mar tipografia">Seleccionar Actividad</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} onClick={cerrarS} style={{ color: "white " }} className="mar derecha tipografia">Cerrar Sesión</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>)
}


export default Navigation
