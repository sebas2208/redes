import React, { Component } from 'react'
import Foto from './public/image/Foto.png'

class About extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>Sobre Mi</h1> 

                    <img src={Foto} width="180" height="220" alt="foto"/>
                    <p>Mi nombre es Sebastian David Cubillos Medina, me encuentro cursando sexto semestre de Ingeniería de Sistema. Me gusta estar en un constante aprendizaje en donde 
                        desarrollo nuevas habilidades.
                    </p>
                
            </section>
        )
    }
}

export default About
