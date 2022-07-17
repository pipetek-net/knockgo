import React from 'react';

// Esta función es exportada al Template Engine, el contenido de la pagina forma parte
// del Header/Nav (parte superior) de la pagina final.
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand mb-0 h1">Knock&Go</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-grow-1 justify-content-between">
                        <div className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/diagnostico">Diagnóstico</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/descargas">Descargas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/nosotros">Nosotros</a>
                            </li>
                        </div>
                        <div className="navbar-nav">
                            <li>
                                <a className="nav-link" href="/sesion/iniciar">Iniciar Sesion</a>
                            </li>
                            <li>
                                <a className="nav-link" href="/sesion/registrar">Registrarse</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;