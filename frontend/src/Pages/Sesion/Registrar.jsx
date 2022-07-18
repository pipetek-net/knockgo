import React from "react";
import axios from "axios";
import Swal from 'sweetalert2';

// Esta función se encarga de enviar los datos del formulario por POST al backend.
function RegisterAxios() {
    const usrFirstName = document.getElementById('userFullName').value;
    const usrLastName = document.getElementById('userFullLastname').value;
    const usrEmail = document.getElementById('userEmail').value;
    const usrPass = document.getElementById('userPass').value;

    const user = {
        nombre: usrFirstName,
        apellido: usrLastName,
        correo: usrEmail,
        contraseña: usrPass
    };

    axios.post('/register', user).then(res => SweetAlert(res.data.mensaje));
};

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
function SesionRegistrar() {
    const onSubmit = (e) => {e.preventDefault()}; // Evita que los forms recarguen la pagina.

    return (
        <>
        <main className="flex-grow-1">
            <div className="container d-flex flex-column my-5" style={{maxWidth: "35em"}}>
                <div>
                    <h1 className="text-center">Registrarse</h1>
                    <form onSubmit={onSubmit}>
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
                            <label htmlFor="userEmail" className="form-label">Correo electrónico:</label>
                            <input type="email" id="userEmail" className="form-control" name="userEmail" />
                        </div>
                        <div className="my-3">
                            <label htmlFor="userPass" className="form-label">Ingrese una contraseña segura:</label>
                            <input type="password" id="userPass" className="form-control" name="userPass" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <button type="submit" className="btn btn-primary" onClick={RegisterAxios}>Registrarse</button>
                            <a href="/sesion/iniciar" className="link-secondary text-decoration-none">Iniciar Sesión</a>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        </>
    )
}

export default SesionRegistrar;