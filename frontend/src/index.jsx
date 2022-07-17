// Corazón del proyecto, este archivo reúne todo el código necesario para correr la pagina web.
import React from 'react';

// React-DOM y React-Router-DOM permiten el acceso mediante URL a las distintas vistas.
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout establece el "template" de la pagina web.
import Layout from './Layout';
import Inicio from './Pages/Inicio';
import Diagnostico from './Pages/Diagnostico';
import Descargas from './Pages/Descargas';
import Nosotros from './Pages/Nosotros';
import SesionIniciar from './Pages/Sesion/Iniciar';
import SesionRegistrar from './Pages/Sesion/Registrar';

// Se configuran las rutas de la pagina web.
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Inicio />} />
                    <Route path='diagnostico' element={<Diagnostico />} />
                    <Route path='descargas' element={<Descargas />} />
                    <Route path='nosotros' element={<Nosotros />} />
                    <Route path='/sesion/iniciar' element={<SesionIniciar />} />
                    <Route path='/sesion/registrar' element={<SesionRegistrar />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);