import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Corrija para importar de 'react-router-dom'
import App from './App'; // Use App, que contém as rotas

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
);
