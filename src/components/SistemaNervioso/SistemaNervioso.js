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


const SistemaNervioso = () => {
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
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect">
                                <option>Central y Periférico</option>
                                <option>Encéfalo y Médula</option>
                                <option>Cerebro y Cerebelo</option>
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
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect">
                                <option>Verdadero</option>
                                <option>Falso</option>
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
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect">
                                <option>Verdadero</option>
                                <option>Falso</option>
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
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect">
                                <option>Verdadero</option>
                                <option>Falso</option>
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
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect">
                                <option>Verdadero</option>
                                <option>Falso</option>
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
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect">
                                <option>La médula Espinal</option>
                                <option>La médula Osea</option>
                                <option>Neuronas</option>
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

export default SistemaNervioso
