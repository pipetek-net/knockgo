import React from 'react';

// Se importan las vistan parciales.
// El 'Outlet' es el contenido de la vista. E.G.: Inicio, Nosotros...
import {Outlet} from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;