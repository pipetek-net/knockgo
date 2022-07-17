import React from 'react';

// Se importan las variables que serán utilizadas en la pagina.
import bannerKnockGo from '../img/banner/knockgo.jpg';
import bannerPipeTek from '../img/banner/pipetek.jpg';
import bannerPetinder from '../img/banner/petinder.png';
import review1 from '../img/review-1.jpg';
import review2 from '../img/review-2.jpg';
import review3 from '../img/review-3.jpg';

// Esta función es exportada al Template Engine, el contenido de la pagina
// va dentro de un elemento '<>' porque la exportación solo soporta un elemento.
function Inicio() {
    return (
        <>
        <main>
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bannerKnockGo} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Knock&Go</h2>
                            <p>Servicio de reparación remota, ¡en tu pantalla!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bannerPipeTek} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>PipeTek</h2>
                            <p>Dedicado grupo de estudiantes en soluciones informáticas.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={bannerPetinder} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Próximamente...</h2>
                            <p>Adopta a un animal, con la punta de tu dedo.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container my-5">
                <div className="mb-5">
                    <h2>¿Tienes un dispositivo electrónico y <strong>necesitas ayuda</strong>?</h2>
                    <p>Knock&Go es un servicio de reparación remota de dispositivos. Sin la necesidad de salir de tu casa o de invitar a alguien a ella. ¿Interesado? ¡Puedes informarte sobre las mentes creadoras <a href="/nosotros">aquí!</a></p>
                    <div>
                        <h3>Diagnóstico</h3>
                        <p>Si te interesa saber mas sobre el problema que podría estar afectando tu dispositivo, puedes buscar una solución con nuestra herramienta de diagnostico, <strong>¡no requiere registro y es completamente gratuita!</strong></p>
                    </div>
                    <div>
                        <h3>Reparación Remota</h3>
                        <p>Si deseas ir un paso mas allá, nosotros podemos encargarnos del resto. Tras hacer el diagnostico, puedes contratar nuestro servicio y agendar una hora con alguno de nuestros técnicos.</p>
                    </div>
                </div>
                <div>
                    <h2>¡Psst! ¿Todavía no estas seguro?</h2>
                    <p>¡Échale un vistazo a lo que nuestros clientes dicen de nosotros!</p>
                    <div className="d-flex justify-content-between mb-5">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={review1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Mauricio Rojas</h5>
                                <p className="card-text">Recibí un excelente servicio, muy buena atención.</p>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src={review2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Andrea Araneda </h5>
                                <p className="card-text">Solucionaron mi problema muchas gracias, los recomendare con mis amigos.</p>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src={review3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Chang Bizagi</h5>
                                <p className="card-text">Muy bueno el servicio entregado y el precio bastante justo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}

export default Inicio;