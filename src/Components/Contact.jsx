import React, { Component } from 'react'
import mailme from '../Components/public/image/mailmeimg.png';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">
                <svg width="180" height="180" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h4>Correo: sebas2208c@gmail.com</h4>
                <a id="mail"href="mailto:sebas2208c@gmail.com?Subject="><img id="mailmelogo" src={mailme} alt="mail me"/>Enviar correo electrónico</a>
                <h4>Celular: 3165358003</h4>

                
                
                        <a href="https://www.facebook.com/sebastiandavid.cubillosmedina">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://twitter.com/sebasc2208?t=FMqnohsx0OvXJIB7U1v3RQ&s=09" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://github.com/sebas2208">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com/in/sebastian-cubillos-b64863228/">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                
            </section>
        )
    }
}

export default Contact
