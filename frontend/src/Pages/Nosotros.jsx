import React from 'react';

// Se importan las variables que serán utilizadas en la pagina.
import portraitFritsch from '../img/nosotros/fritsch.jpg';
import portraitHering from '../img/nosotros/hering.jpg';
import portraitAravena from '../img/nosotros/aravena.jpg';
import portraitSalinas from '../img/nosotros/salinas.jpg';

// Esta función es exportada al Template Engine, el contenido de la pagina
// va dentro de un elemento '<>' porque la exportación solo soporta un elemento.
function Nosotros() {
    return(
        <>
        <main>
            <div className="container my-5">
                <h3 className="text-center">¿Quienes Somos?</h3>
                <p>Somos un equipo de cuatro estudiantes de Ingeniería en Informática de INACAP. Nos enorgullecemos por nuestro alto estándar de calidad y compromiso con la elegancia.</p>
                <p>La fortaleza de nuestro equipo viene de nuestra union y de nuestras diversas habilidades, que se complementan perfectamente para lograr las metas y objetivos que nos proponemos.</p>
            </div>
            <div style={{backgroundColor: "#f0f0f0"}}>
                <div className="container">
                    <div className="d-flex align-items-center gap-5 py-5">
                    <img src={portraitHering} alt="" srcset="" />
                        <div className="flex-grow-1">
                            <h3>Sebastián Hering Emilfork</h3>
                            <h5>Líder de Proyecto</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor: "#e8e8e8"}}>
                <div className="container">
                    <div className="d-flex align-items-center gap-5 py-5">
                    <div className="flex-grow-1 text-end">
                            <h3>Bastián Aravena Huenuanca</h3>
                            <h5>Diseñador Gráfico</h5>
                        </div>
                        <img src={portraitAravena} alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#e0e0e0"}}>
                <div className="container">
                    <div className="d-flex align-items-center gap-5 py-5">
                        <img src={portraitSalinas} alt="" srcset="" />
                        <div className="flex-grow-1">
                            <h3>Giovanni Salinas Villas</h3>
                            <h5>Coordinador Back-End</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor: "#d8d8d8"}}>
                <div className="container">
                    <div className="d-flex align-items-center gap-5 py-5">
                        <div className="flex-grow-1 text-end">
                            <h3>Joaquín Fritsch Santis</h3>
                            <h5>Coordinador Front-End</h5>
                        </div>
                       <img src={portraitFritsch} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Nosotros;