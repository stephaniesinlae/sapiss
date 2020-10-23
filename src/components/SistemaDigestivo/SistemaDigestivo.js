/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import cancionActividad from '../img/cancionActividad.mp3'
import intestinoD from '../img/intestinoD.gif'
import absorcion from '../img/absorcion.gif'
import estomago from '../img/estomago.gif'
import boca from '../img/boca.gif'
import esofago from '../img/esofago.gif'
import eliminacion from '../img/eliminacion.gif'
import {
    NavItem,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import '../SeleccionarActividad/SeleccionarActividad.css'

const SistemaDigestivo = ({ ShowSelected, notaSDigestivo }) => {
    return (
        <div className="fondoSistemas">
            <div className="text-black letraA">Sistema Digestivo</div>
            <br></br>
            <div className="columnaa">
                <audio src={cancionActividad} autoplay="autoplay" loop="loop"></audio>
                <div>
                    <NavItem className="padd">
                        <img src={intestinoD} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >El Intestino Delgado mide 7 metros. ¡como 22 cuadernos alineados uno detrás de otro! 📕📗📘📙</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect1" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="1">Verdadero</option>
                                <option value="0">Falso</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={estomago} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿En dónde se almacena la comida que has ingerido?🍲</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect2" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="1">Estómago</option>
                                <option value="0">Intestinos</option>
                                <option value="0">Hígado</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={esofago} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿Quién conduce la comida desde la parte posterior de la garganta hasta el estómago.?</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect3" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="0">Intestino Grueso</option>
                                <option value="0">Intestino Delgado</option>
                                <option value="0">Hígado</option>
                                <option value="1">Esófago</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                </div>
                <div>
                    <NavItem className="padd">
                        <img src={boca} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >¿La boca, entra en el conjunto de órganos encargados del proceso de la digestión?👄</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect4" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="1">Verdadero</option>
                                <option value="0">Falso</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={absorcion} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >Consiste en el paso de los nutrientes desde el aparato digestivo a la sangre.🩸</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect5" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="1">La Absorción</option>
                                <option value="0">La Digestion</option>
                                <option value="0">La Eliminación de Desechos</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                    <br></br>
                    <br></br>
                    <NavItem className="padd">
                        <img src={eliminacion} className="sizeImg" alt="Sistema Circulatorio" />
                        <div className="text-black letraParrafo" style={{ maxWidth: 18 + 'rem' }} >La eliminación de desechos es la expulsión de las sustancias no digeridas de los alimentos.</div>
                        <br></br>
                        <FormGroup>
                            <Label for="exampleSelect" className=" negro" style={{ color: "#FFFFFF" }}>Haz clic aquí👇 y selecciona tu respuesta</Label>
                            <Input type="select" style={{ maxWidth: 18 + 'rem' }} name="select" id="exampleSelect6" onchange="ShowSelected()">
                                <option value="">Respuestas</option>
                                <option value="1">Verdadero</option>
                                <option value="0">Falso</option>
                            </Input>
                        </FormGroup>
                    </NavItem >
                </div>
                <br></br>
                <br></br>
            </div>
            <div className="centrarBot fondoC">
                <button type="submit" value="Submit" onClick={ShowSelected} className=" letraP btn fondoBoton text-white ">✅FINALIZAR ACTIVIDAD.</button>
            </div>   
            <div className="alineadoD fondoC">
                <button type="submit" value="Submit" onClick={notaSDigestivo} className=" letraP btn fondoBoton text-white ">📮 Guardar Notas de Alumno.</button>
            </div>
        </div>
    )
}

export default SistemaDigestivo
