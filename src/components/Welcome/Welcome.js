import React from 'react'
import logow from '../img/bienvenido.png'
import user from '../img/usuario.png'
import pass from '../img/password.png'

const Welcome = () => {
    return (
        <div className="centrarDiv">
            <div className="card text-black border-primary mb-3 tarjetagrande" style={{ maxWidth: 18 + 'rem' }}>
                <div className="card-header centrartexto">Iniciar Sesión</div>
                <label for="basic-url" className="margenA">
                    <img src={user} alt="icon user" className="icono margenI margenD"/>Correo Electronico
                </label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control margenI margenD" id="basic-url" aria-describedby="basic-addon3" />
                </div>
                <label for="basic-url">
                    <img src={pass} alt="icon password" className="icono margenI margenD" /> Contraseña
                </label>
                <div className="input-group mb-3">
                    <input type="password" className="form-control margenI margenD" id="basic-url" aria-describedby="basic-addon3" />
                </div>
                <button type="button" className="btn btn-primary boton">Ingresar</button>
            </div>
            <img src={logow} alt="logo sappis" className="logo" />
        </div>
    )
}

export default Welcome
