import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import App from './App';
import Home from './Home';
import Gallery from './Gallery';
import Work from './Work';
import Contatti from './Contatti';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AnimatePresence mode="wait">

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/galleria" element={<Gallery />} />
                    <Route path="/opera/:id" element={<Work />} />
                    <Route path="/contatti" element={<Contatti />} />

                    {/* aggiungi altre rotte qui */}
                </Routes>
            </AnimatePresence>

        </BrowserRouter>
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
