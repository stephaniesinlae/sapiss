/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import cancionActividad from '../img/cancionActividad.mp3'
import venas from '../img/venas.gif'
import corazon2 from '../img/corazon.gif'
import corazon from '../img/corazon2.gif'
import aorta from '../img/aorta.gif'
import sangre from '../img/sangre.gif'
import globulos from '../img/globulos.gif'
import {
    NavItem,
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';
import '../SeleccionarActividad/SeleccionarActividad.css'

const SistemaCirculatorio = () => {
    return (
        <div className="fondoSistemas">
            <div className="text-black letraA">Sistema Circulatorio</div>
            <br></br>
            <div className="columnaa">
                <audio src={cancionActividad} autoplay="autoplay" loop="loop"></audio>
                <div>
                    <NavItem className="padd">
                        <img src={venas} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Quienes transportan la sangre por el organismo del ser humano?🩸</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect">
                                <option>Venas y Arterias</option>
                                <option>Intestinos</option>
                                <option>Pulmones y Corazón</option>
                                <option>Huesos</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={corazon2} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Quién es el encargado de bombear la sangre, al resto del cuerpo?🩸</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect">
                                <option>Pulmones</option>
                                <option>Venas</option>
                                <option>Arterias</option>
                                <option>Corazón</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={corazon} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿El corazón es el músculo que bombea la sangre rica en oxígeno y nutrientes a los tejidos del cuerpo a través de los vasos de la sangre?💗</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect">
                                <option>Verdadero</option>
                                <option>Falso</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                </div>
                <div>
                    <NavItem className="padd">
                        <img src={sangre} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Cómo se le llama al fluido que circula por todo el organismo a través del sistema circulatorio?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect">
                                <option>Sangre</option>
                                <option>Agua</option>
                                <option>Arterias</option>
                                <option>Bacterias</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={aorta} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Cómo se llama la Arteria más importante del cuerpo humano?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect">
                                <option>Vena Cardiaca Magna </option>
                                <option>Vena Cardiaca Menor</option>
                                <option>Arteria Aorta</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={globulos} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Quiénes se encargan de transporta oxígeno desde los pulmones a todas las partes del cuerpo?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect">
                                <option>Glóbulos Rojos</option>
                                <option>Glóbulos Blancos</option>
                                <option>Plaquetas</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                </div>
                    <br></br>
                    <br></br>
            </div>
        </div>
    )
}

export default SistemaCirculatorio
