import React, { Component } from 'react'

import inventario from '../Components/public/image/inventario.png';
import chefini from '../Components/public/image/chefini.png';




class Portfolio extends Component {
    render() {
        return (
            
            <section className="projects">
                  <h1 id='Portfolio'>Portafolio</h1>
                  <p>Proyectos realizados</p>

                    <div className="container">
                        <a href="https://github.com/sebas2208/SistemaInventario-Frontend.git"><img src={inventario} width="300" height="200" alt="Pybot"/><p>Sistema de inventario de una drogueria</p></a>
                        <a href="https://github.com/sebas2208/Proyecto_Cheffini.git"><img src={chefini} width="300" height="200" alt="Pybot"/><p>Cheffini App</p></a>
                    </div>
                       
            </section>
        )
    }
}

export default Portfolio


