import React from 'react';

// Esta función es exportada al Template Engine, el contenido de la pagina forma parte
// del Footer (parte inferior) de la pagina final.
function Footer() {
    return (
        <footer className="bg-dark text-white w-100 py-2">
            <div className="w-100 d-flex justify-content-center">
                Copyright © 2022 PipeTek, todos los derechos reservados.
            </div>
        </footer>
    )
}

export default Footer;