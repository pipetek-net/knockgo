import React from "react";
import axios from "axios";
import Swal from 'sweetalert2';

// Esta función se encarga de enviar los datos del formulario por POST al backend.
function LoginAxios() {
    const usrEmail = document.getElementById('userEmail').value;
    const usrPass = document.getElementById('userPass').value;

    const user = {
        correo: usrEmail,
        contraseña: usrPass
    };

    axios.post('/login', user).then(res => SweetAlert(res.data.mensaje));
}

// Esta función llama a la librería de mensajes popup.
function SweetAlert(input) {
    Swal.fire({
        title: 'Alerta',
        html: input,
        showCloseButton: true,
        showConfirmButton: false,
        focusConfirm: false,
    })
}

// Esta función es exportada al Template Engine, el contenido de la pagina
// va dentro de un elemento '<>' porque la exportación solo soporta un elemento.
function SesionIniciar() {
    const onSubmit = (e) => {e.preventDefault()}; // Evita que los forms recarguen la pagina.

    return (
        <>
        <main className="flex-grow-1">
            <div className="container d-flex flex-column my-5" style={{maxWidth: "25em"}}>
                <div>
                    <h1 className="text-center">Iniciar Sesión</h1>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="userEmail" className="form-label">Correo electrónico:</label>
                            <input type="email" id="userEmail" className="form-control" name="userEmail" />
                        </div>
                        <div className="my-3">
                            <label htmlFor="userPass" className="form-label">Contraseña:</label>
                            <input type="password" id="userPass" className="form-control" name="userPass" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <button type="submit" className="btn btn-primary" onClick={LoginAxios}>Iniciar Sesión</button>
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