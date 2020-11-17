import React from 'react'
//Unicamenta para nuestra Nav 
import logo from '../img/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div id="parte2">
            <div className="bg colocar">
                <a href="https://github.com/stephaniesinlae">
                    <img className="footerLogo" src={logo} alt="Logo sapiss" />
                </a>
                <div className="footer margenA">
                    <p style={{ color: "grey" }}>With <span role='img' aria-label='emoji'>♥</span> by
                    <a href="https://stephanie.netlify.app/" target="_blank" without rel="noopener noreferrer"> Ing. Stephanie Sandoval</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
