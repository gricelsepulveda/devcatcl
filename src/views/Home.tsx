//IMPORTS
import React, {useState} from "react"
import "../styles/home.scss"

const Home = () => {
    const [openalert, setOpenAlert] = useState(false);
    const sentMethod = () => {
        setOpenAlert(true)
    }
    return (
        <>
            <nav className="devc-nav">
                <a href="#" className="devc-logo-a">
                    <img 
                        className="devc-logo-img"
                        src="https://gricel.sfo2.digitaloceanspaces.com/devcat/devcatcl/devcatcl-logo.svg"
                        alt="logo devcat"
                    />
                </a>
            </nav>
            <section className="devc-hero">
                <h1 className="devc-hero-h1-title-claim">
                    <span className="devc-hero-h1-title-claim-one">SOMOS UN EQUIPO DE &#62;GATOS&#60;</span>
                    <p className="devc-hero-h1-title-claim-two">Que aman programar <span>y diseñar</span></p>
                    <p className="devc-hero-h1-title-claim-three">creamos, mejoramos y apoyamos tus ideas</p>
                    <span className="devc-hero-h1-title-claim-four">en la era de la digitalización</span>
                </h1>
                <a href="#contact" className="devc-button-a">
                    <button type="button" className="devc-button">
                        <div className="devc-button-before"></div>
                        <div className="devc-button-after">
                            <img 
                                className="devc-button-caret"
                                src="https://gricel.sfo2.digitaloceanspaces.com/devcat/devcatcl/devcatcl-caret.svg"
                                alt="caret button"
                            />
                            Escríbenos
                        </div> 
                    </button>
                </a>
                <img 
                    className="devc-decoration"
                    src="https://gricel.sfo2.digitaloceanspaces.com/devcat/devcatcl/devcatcl-decoration.svg"
                    alt="decoration"
                />
            </section>
            <section id="contact" className="devc-contact">
                <h1 className="devc-h1" >Contacto</h1>
                <form className="devc-form">
                    <div className="devc-input">
                        <div className="devc-input-before"></div>
                        <input className="devc-input-after" type="email" placeholder="Tu correo"/>
                    </div>
                    <div className="devc-textarea">
                        <div className="devc-textarea-before"></div>
                        <textarea className="devc-textarea-after" placeholder="Escribe tu mensaje"></textarea>
                    </div>
                    <button type="button" onClick={() => sentMethod() } className="devc-button">
                        <div className="devc-button-before"></div>
                        <div className="devc-button-after">
                            <img 
                                className="devc-button-caret"
                                src="https://gricel.sfo2.digitaloceanspaces.com/devcat/devcatcl/devcatcl-caret.svg"
                                alt="caret button"
                            />
                            Enviar
                        </div> 
                    </button>
                </form>
            </section>
            <footer className="devc-footer">
                <div className="devc-footer-text">
                    <h2 className="devc-h2">Consultorías de desarrollo y automatización DEVCAT</h2>
                    <a className="devc-email" href="mailto:contacto@devcat.cl">contacto@devcat.cl</a>
                </div>
                <a href="#" className="devc-logo-a">
                    <img 
                        className="devc-logo-img"
                        src="https://gricel.sfo2.digitaloceanspaces.com/devcat/devcatcl/devcatcl-logo.svg"
                        alt="logo devcat"
                    />
                </a>
            </footer>
            {
                openalert ?
                    <div className="devc-alert">
                        <div className="devc-alert-body">
                            <p>¡Mensaje enviado!</p>
                            <span>Te responderemos durante las próximas horas</span>
                            <button onClick={() => setOpenAlert(false)} type="button" className="devc-button">
                                <div className="devc-button-before"></div>
                                <div className="devc-button-after">
                                    Cerrar
                                </div> 
                            </button>
                        </div>
                    </div>
                : null
            }
        </>
    )
}

export default Home