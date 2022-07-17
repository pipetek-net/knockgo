import React from "react";

// Esta función es exportada al Template Engine, el contenido de la pagina
// va dentro de un elemento '<>' porque la exportación solo soporta un elemento.
function Descargas() {
  return (
    <>
    <main>
        <div className="container my-5">
            <div className="row">
                <div className="col-8">
                    <div className="row mb-4">
                        <h1>Servicio Remoto</h1>
                        <p>Nuestro servicio se basa en reparación remota (por internet) de dispositivos. Para esto es necesario que el cliente descargue el programa que utilizamos en Knock&Go.</p>
                        <p>Si necesitas ayuda instalando el programa, puedes guiarte con una de las guías a la derecha o seguir el siguiente video tutorial.</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/0Qd7dwmZpE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="mt-1"></iframe>
                    </div>
                    <div className="row">
                        <h1>Descargas</h1>
                        <p>A continuación podrá descargar el programa adecuado para el dispositivo que esta teniendo problemas.</p>
                        <div className="d-flex justify-content-between mt-2">
                            <div className="flex-grow-1 d-flex flex-column align-items-center">
                                <h4 className="text-center mb-3"><i className="fa-brands fa-windows fst-normal"></i> Windows</h4>
                                <a href="https://download.anydesk.com/AnyDesk.exe" className="btn btn-primary w-50" download>Descargar</a>
                            </div>
                            <div className="flex-grow-1 d-flex flex-column align-items-center border-start border-end">
                                <h4 className="text-center mb-3"><i className="fa-brands fa-apple fst-normal"></i> MacOS</h4>
                                <a href="https://download.anydesk.com/anydesk.dmg" className="btn btn-primary w-50" download>Descargar</a>
                            </div>
                            <div className="flex-grow-1 d-flex flex-column align-items-center">
                                <h4 className="text-center mb-3"><i className="fa-brands fa-linux fst-normal"></i> Linux</h4>
                                <a href="https://download.anydesk.com/linux/anydesk_6.2.0-1_amd64.deb" className="btn btn-primary w-50" download>Descargar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 border-start">
                    <div className="ms-1">
                        <h2>Links</h2>
                        <ul className="list-unstyled">
                            <li><a href="#">Instalación Windows.pdf</a></li>
                            <li><a href="#">Instalación MacOS.pdf</a></li>
                            <li><a href="#">Instalación Linux.pdf</a></li>
                            <hr className="mt-2 mb-1" />
                            <li><a href="#">Proceso de Conexión.pdf</a></li>
                            <li><a href="#">Política de Privacidad.pdf</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  );
}

export default Descargas;
