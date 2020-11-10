/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import cancionActividad from '../img/cancionActividad.mp3'
import comer from '../img/comer.gif'
import pez from '../img/pez.gif'
import nariz from '../img/nariz.gif'
import pajaro from '../img/pajaro.gif'
import respirar from '../img/respirar.gif'
import {
    NavItem,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import '../SeleccionarActividad/SeleccionarActividad.css'
import { useHistory } from 'react-router-dom';

const SistemaRespiratorio = ({ ShowSelected, notaSRespiratorio, selected, ShowSelectedPrueba }) => {
    const history = useHistory();

    return (
        <div className="fondoSistemas">
            <div className="text-black letraA">Sistema Respiratorio</div>
            <br></br>
            <div className="columnaa">
                <audio src={cancionActividad} autoplay="autoplay" loop="loop"></audio>
                <div>
                    <NavItem className="padd">
                        <img src={comer} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >Los tejidos del cuerpo, convierten a los nutrientes, en:</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect1" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="0">Nutrientes</option>
                                <option value="0">Agua</option>
                                <option value="1">Dióxido de Carbono</option>
                                <option value="0">Aire</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={nariz} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Por dónde respiran los humanos⛹?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect2" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="1">Nariz</option>
                                <option value="0">Branquias</option>
                                <option value="0">Pico</option>
                                <option value="0">Trompa</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={respirar} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Cómo se le llama al proceso, cuando el aire entra a los pulmones?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect3" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="1">Inspiración</option>
                                <option value="0">Expiración</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                </div>
                <div>
                    <NavItem className="padd">
                        <img src={pajaro} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Por dónde respiran las aves🐦?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect4" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="0">Nariz</option>
                                <option value="0">Trompa</option>
                                <option value="1">Pico</option>
                                <option value="0">Branquias</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={pez} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Por dónde respiran los Peces🐟?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect5" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="0">Pico</option>
                                <option value="0">Nariz</option>
                                <option value="0">Trompa</option>
                                <option value="1">Branquias</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={respirar} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Cómo se le llama al proceso, cuando el aire sale de los pulmones?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect6" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="0">Inspiración</option>
                                <option value="1">Expiración</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                </div>
                <br></br>
                <br></br>
            </div>
            <div>
                {
                    !selected.id &&
                    <div>
                        <div className="centrarBot fondoC">
                            <button type="submit" value="Submit" onClick={ShowSelectedPrueba} className=" letraP btn fondoBoton text-white ">✅FINALIZAR ACTIVIDAD.</button>
                        </div>
                        <div className="alineadoD fondoC">
                            <button type="submit" value="Submit" onClick={() => history.push(`/random`)} className=" letraP btn fondoBoton text-white ">🆗Seleccionar Alumno Aleatorio.</button>
                        </div>
                    </div>
                }{
                    selected.id &&
                    <div>
                        <div className="centrarBot fondoC">
                            <button type="submit" value="Submit" onClick={ShowSelected} className=" letraP btn fondoBoton text-white ">✅FINALIZAR ACTIVIDAD.</button>
                        </div>
                        <div className="alineadoD fondoC">
                            <button type="submit" value="Submit" onClick={notaSRespiratorio} className=" letraP btn fondoBoton text-white ">📮 Guardar Notas de Alumno.</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default SistemaRespiratorio
