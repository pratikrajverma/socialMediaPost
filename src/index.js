import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from './context/profileContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Toaster />
        <ContextProvider>

            <App />

        </ContextProvider>

    </BrowserRouter>
);

