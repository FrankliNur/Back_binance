import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App_temp';
//import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container); // Crear la raíz con createRoot

root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);

// Si quieres medir el rendimiento de tu aplicación, puedes pasar una función a reportWebVitals (por ejemplo, console.log) o enviar los resultados a un endpoint de análisis.
// Más información: https://bit.ly/CRA-vitals
//reportWebVitals();