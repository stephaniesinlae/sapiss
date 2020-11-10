/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import cancionActividad from '../img/cancionActividad.mp3'
import cerebro from '../img/cerebro.gif'
import neurona from '../img/neurona.gif'
import ojos from '../img/ojos.gif'
import pezHumano from '../img/pezHumano.jpg'
import oreja from '../img/oreja.gif'
import medula from '../img/medula.jpg'

import {
    NavItem,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import '../SeleccionarActividad/SeleccionarActividad.css'
import { useHistory } from 'react-router-dom';

const SistemaNervioso = ({ ShowSelected, notaSNervioso , selected, ShowSelectedPrueba}) => {
    const history = useHistory();
    return (
        <div className="fondoSistemas">
            <div className="text-black letraA">Sistema Nervioso</div>
            <br></br>
            <div className="columnaa">
                <audio src={cancionActividad} autoplay="autoplay" loop="loop"></audio>
                <div>
                    <NavItem className="padd">
                        <img src={cerebro} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Cuáles son las dos divisiones principales del Sistema Nervioso🧠?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect1" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="1">Central y Periférico</option>
                                <option value="0">Encéfalo y Médula</option>
                                <option value="0">Cerebro y Cerebelo</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={ojos} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Los ojos forman parte de los órganos principales del Sistema Nervioso?👀</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect2" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="1">Verdadero</option>
                                <option value="0">Falso</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={oreja} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Los oídos forman parte de los órganos principales del Sistema Nervioso?👂</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect3" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="0">Falso</option>
                                <option value="1">Verdadero</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                </div>
                <div>
                    <NavItem className="padd">
                        <img src={pezHumano} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿El Sistema Nervioso del ser Humano y los Peces, son iguales?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect4" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="0">Verdadero</option>
                                <option value="1">Falso</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={neurona} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >La diferencia entre el Sistema Nervioso y el Sistema Endocrino es, que uno utiliza neuronas mientras el otro funciona a travez de hormonas.</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect5" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="1">Verdadero</option>
                                <option value="0">Falso</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={medula} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Cuál es la parte del sistema nervioso que transmite mensajes desde y hasta el cerebro?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect6" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="1">La médula Espinal</option>
                                <option value="0">La médula Osea</option>
                                <option value="0">Neuronas</option>
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
                            <button type="submit" value="Submit" onClick={notaSNervioso} className=" letraP btn fondoBoton text-white ">📮 Guardar Notas de Alumno.</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default SistemaNervioso
