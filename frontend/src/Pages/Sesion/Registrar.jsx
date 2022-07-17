import React from "react";

// Esta función es exportada al Template Engine, el contenido de la pagina
// va dentro de un elemento '<>' porque la exportación solo soporta un elemento.
function SesionRegistrar() {
    return (
        <>
        <main>
            <div className="container d-flex flex-column my-5" style={{maxWidth: "35em"}}>
                <div>
                    <h1 className="text-center">Registrarse</h1>
                    <form action="" method="post">
                        <div className="d-flex justify-content-between gap-3 flex-wrap mb-3">
                            <div className="flex-grow-1">
                                <label htmlFor="userFullName" className="form-label">Nombre:</label>
                                <input type="text" id="userFullName" className="form-control" name="userFullName" />
                            </div>
                            <div className="flex-grow-1">
                                <label htmlFor="userFullLastname" className="form-label">Apellido:</label>
                                <input type="text" id="userFullLastname" className="form-control" name="userFullLastname" />
                            </div>
                        </div>
                        <div className="my-3">
                            <label htmlFor="userEmail" className="form-label">Correo electronico:</label>
                            <input type="email" id="userEmail" className="form-control" name="userEmail" />
                        </div>
                        <div className="d-flex justify-content-between gap-3 flex-wrap my-3">
                            <div className="flex-grow-1">
                                <label htmlFor="userPass" className="form-label">Ingrese una contraseña segura:</label>
                                <input type="password" id="userPass" className="form-control" name="userPass" />
                            </div>
                            <div className="flex-grow-1">
                                <label htmlFor="userPassCheck" className="form-label">Repita la contraseña:</label>
                                <input type="password" id="userPassCheck" className="form-control" name="userPassCheck" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <button type="submit" className="btn btn-primary">Registrarse</button>
                            <a href="/sesion/iniciar" className="link-secondary text-decoration-none">Iniciar Sesion</a>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        </>
    )
}

export default SesionRegistrar;