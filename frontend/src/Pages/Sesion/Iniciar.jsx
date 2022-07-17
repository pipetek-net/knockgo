import React from "react";

// Esta función es exportada al Template Engine, el contenido de la pagina
// va dentro de un elemento '<>' porque la exportación solo soporta un elemento.
function SesionIniciar() {
    return (
        <>
        <main>
            <div className="container d-flex flex-column my-5" style={{maxWidth: "25em"}}>
                <div>
                    <h1 className="text-center">Iniciar Sesion</h1>
                    <form action="" method="post">
                        <div className="mb-3">
                            <label htmlFor="userEmail" className="form-label">Correo electronico:</label>
                            <input type="email" id="userEmail" className="form-control" name="userEmail" />
                        </div>
                        <div className="my-3">
                            <label htmlFor="userPass" className="form-label">Contraseña:</label>
                            <input type="password" id="userPass" className="form-control" name="userPass" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
                            <a href="/sesion/registrar" className="link-secondary text-decoration-none">Registrarse</a>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        </>
    )
}

export default SesionIniciar;