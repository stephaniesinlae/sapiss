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
// import { Picker, OptionBox } from 'react-picker';
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
                            {/* <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="respuesta1">
                                <option value="venasyarterias">Venas y Arterias</option>
                                <option value="0">Intestinos</option>
                                <option value="0">Pulmones y Corazón</option>
                                <option value="0">Huesos</option>
                            </Input> */}
                            {/* <div className="edit">
                                <Picker
                                    ref="fruitSelection"
                                    value={fruit}
                                    options={['Mango', 'Orange', 'Avocado', 'Pineapple', 'Jack Fruit', 'Durian', 'Apricot', 'Carambola', 'Dateplum Persimmon', 'Megranate']}
                                    onChange={this._handleFruitChange}
                                >
                                    <OptionBox value={fruit} onClick={this._handleClickFruit} />
                                </Picker>
                            </div> */}
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
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="respuesta2">
                                <option value="0">Pulmones</option>
                                <option value="0">Venas</option>
                                <option value="0">Arterias</option>
                                <option value="corazon">Corazón</option>
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
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="respuesta3">
                                <option value="verdadero">Verdadero</option>
                                <option value="0">Falso</option>
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
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="respuesta4">
                                <option value="sangre">Sangre</option>
                                <option value="0">Agua</option>
                                <option value="0">Arterias</option>
                                <option value="0">Bacterias</option>
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
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="respuesta5">
                                <option value="0">Vena Cardiaca Magna </option>
                                <option value="0">Vena Cardiaca Menor</option>
                                <option value="arteriaaorta">Arteria Aorta</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={globulos} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Quiénes se encargan de transportar oxígeno desde los pulmones a todas las partes del cuerpo?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="respuesta6">
                                <option value="globulosrojos">Glóbulos Rojos</option>
                                <option value="0">Glóbulos Blancos</option>
                                <option value="0">Plaquetas</option>
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

export default SistemaCirculatorio;
