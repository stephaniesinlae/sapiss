import React, { useState } from 'react'
import logow from '../img/bienvenido.png'
import userr from '../img/usuario.png'
import pass from '../img/password.png'
import { useHistory } from 'react-router-dom';
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';
import '../../containers/MainContainer/MainContainer.css'


const Welcome = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    // const create = async () => {
    //     await firebase.auth().createUserWithEmailAndPassword(email, password);
    // }

    const login = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)

        } catch (error) {
            alert(error);
        }
    }

    const cerrarS = async () => {
        try {
            await firebase.auth().signOut();

        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>{
            !user &&
            <div className="fondo centrarDiv">
                <div className="card text-black border-primary mb-3 tarjetagrande" style={{ maxWidth: 18 + 'rem' }}>
                    <div className="card-header centrartexto">Iniciar Sesión</div>
                    <label for="basic-url" className="margenA">
                        <img src={userr} alt="icon user" className="icono margenI margenD" />Correo Electronico
                </label>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control margenI margenD" id="email" aria-describedby="basic-addon3" onChange={(ev) => setEmail(ev.target.value)} />
                    </div>
                    <label for="basic-url">
                        <img src={pass} alt="icon password" className="icono margenI margenD" /> Contraseña
                </label>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control margenI margenD" id="password" aria-describedby="basic-addon3" onChange={(ev) => setPassword(ev.target.value)} />
                    </div>
                    <button onClick={login} type="button" className="btn btn-primary boton">Ingresar</button>
                </div>
                <img src={logow} alt="logo sappis" className="logo" />
            </div>
        }
            {
                user &&
                <div className="fondo centrarDiv">
                    <div className="card text-black border-primary mb-3 tarjetagrande" style={{ maxWidth: 18 + 'rem' }}>
                        <div className="card-header centrartexto">Sesión Iniciada</div>
                        <label for="basic-url" className="margenA">
                            <img src={userr} alt="icon user" className="icono margenI margenD" />Correo Electronico
                </label>
                        <div className="input-group mb-3 centrartexto">
                            {user.email}
                        </div>
                        <button onClick={() => history.push(`/lista`)} type="button" className="btn btn-primary boton">Empezar a Trabajar</button>
                        <label for="basic-url" className="margenA centrartexto ">¿No eres tú?</label>
                        <button onClick={cerrarS} type="button" className="btn btn-primary boton">Cerrar Sesion</button>
                    </div>
                    <img src={logow} alt="logo sappis" className="logo" />
                </div>
            }
        </div>
    )
}

export default Welcome
