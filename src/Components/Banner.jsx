import React, { Component } from 'react'
import saludo from '../Components/public/image/saludo.png';

class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={saludo}  width="200" height="200" alt="profilepic"/></a>
                    <h1>Hola, soy Sebastian </h1>
                    <p id="paragarph1"> Estudiante de Ingeniería de Sistemas</p> 
                    
            </section>
        )
    }
}

export default Banner


