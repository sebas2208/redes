import React, { Component } from 'react'
import logo from '../Components/public/image/maxresdefault.jpg';

class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1>Hola, soy Sebastian </h1>
                    <p id="paragarph1"> Estudiante de Ingeniería de Sistemas</p> 
                    
            </section>
        )
    }
}

export default Banner


