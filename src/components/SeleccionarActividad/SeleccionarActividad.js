import React from 'react'
import sistema_circulatorio from '../img/sistema_circulatorio.png'
import sistema_digestivo from '../img/sistema_digestivo.png'
import sistema_nervioso from '../img/sistema_nervioso.png'
import sistema_respiratorio from '../img/sistema_respiratorio.png'
import cancion from '../img/cancion.mp3'
import { Link } from 'react-router-dom';
import {
    NavLink,
    NavItem,
} from 'reactstrap';
import './SeleccionarActividad.css'

const SeleccionarActividad = () => {
    return (
        <div className="fondoActividad">
            <br></br>
            <div className="text-white letraA">
                    Sistemas del Ser Humano</div>
        <div className="columnaa">
            <audio src={cancion} autoplay="autoplay" loop="loop"></audio>
            <div style={{ maxWidth: 35 + "rem" }} >
                <NavItem className="avatar">
                    <img src={sistema_circulatorio} className="sizeImg" alt="Sistema Circulatorio" />
                    <NavLink tag={Link} to="/sistemacirculatorio" style={{ color: "white" }} className="tLetra">Sistema Circulatorio</NavLink>
                </NavItem >
                <NavItem className="avatar">
                    <img src={sistema_digestivo} className="sizeImg" alt="Sistema Digestivo" />
                    <NavLink tag={Link} to="/sistemadigestivo" style={{ color: "white" }} className="tLetra">Sistema Digestivo</NavLink>
                    <br></br>
                    <br></br>
                </NavItem>
                <br></br>
            </div>
            <div style={{ maxWidth: 35 + "rem" }}>
                <br></br>
                <br></br>
                <NavItem className="avatar">
                    <img src={sistema_nervioso} className="sizeImg" alt="Sistema Nervioso" />
                    <NavLink tag={Link} to="/sistemanervioso" style={{ color: "white" }} className="tLetra">Sistema Nervioso</NavLink>
                </NavItem>
                <NavItem className="avatar">
                    <img src={sistema_respiratorio} className="sizeImg" alt="Sistema Respiratorio" />
                    <NavLink tag={Link} to="/sistemarespiratorio" style={{ color: "white" }} className="tLetra">Sistema Respiratorio</NavLink>
                    <br></br>
                    <br></br>
                </NavItem>
                <br></br>
                <br></br>
            </div>
        </div>
        </div>
    )
}

export default SeleccionarActividad
