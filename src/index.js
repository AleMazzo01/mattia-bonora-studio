import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter, Routes, Route } from 'react-router-dom';  // <-- importa HashRouter
import { AnimatePresence } from 'framer-motion';

import App from './App';
import Home from './Home';
import Gallery from './Gallery';
import Work from './Work';
import Contatti from './Contatti';
import ChiSono from './ChiSono';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter> {/* <-- sostituisci BrowserRouter con HashRouter */}
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/galleria" element={<Gallery />} />
                    <Route path="/opera/:id" element={<Work />} />
                    <Route path="/contatti" element={<Contatti />} />
                    <Route path="/chisono" element={<ChiSono />} />

                </Routes>
            </AnimatePresence>
        </HashRouter>
    </React.StrictMode>
);

reportWebVitals();
