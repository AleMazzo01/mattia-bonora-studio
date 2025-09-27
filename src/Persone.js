import React from "react";
import "./Persone.css";
import Navbar from "./Navbar";

import badbunny from "./images/persone/Carlotta con DEBI TIRAR MAS FOTOS.jpg";
import etere from "./images/persone/Andrea con ETERE.jpg";
import elena from "./images/persone/Elena con Acqua dolce, acqua salata.jpg";
import federica from "./images/persone/Federico con Il bombarolo.jpg";
import federico from "./images/persone/Federico con Marea rosa.jpg";
import fiore from "./images/persone/Fiore con Axis Mundi Argenteo.jpg";
import giulia from "./images/persone/Giulia con Marea azzurra e Movimento circolare rosa.jpg";
import matteo from "./images/persone/Giulia e Matteo con Frequenze vegetali.jpg";
import marco from "./images/persone/Marco con TH3 D4RK S1D3 0F TH3 M00N.jpg";
import mazzo from "./images/persone/Mazzo con Alba acida a Tehuantepec.jpg";
import paolo from "./images/persone/Paolo con Babele verde.jpg";
import paolo2 from "./images/persone/Paolo con Stati di ritorno.jpg";
import raffo from "./images/persone/Raffo con Orizzonte arancio e Movimento circolare blu.jpg";
import rugegro from "./images/persone/Ruggero con Rio Esperanza.jpg";
import seba from "./images/persone/Seba con Mosaico Peruviano.JPG";
import silvio from "./images/persone/Silvio con Terra di Siena.jpg";

function Persone() {
    const immagini = [
        { src: etere, titolo: "Andrea con ETERE" },
        { src: badbunny, titolo: "Carlotta con DEBI TIRAR MAS FOTOS" },
        { src: elena, titolo: "Elena con Acqua dolce, acqua salata" },
        { src: federica, titolo: "Federico con Il bombarolo" },
        { src: federico, titolo: "Federico con Marea rosa" },
        { src: fiore, titolo: "Fiore con Axis Mundi Argenteo" },
        { src: giulia, titolo: "Giulia con Marea azzurra e Movimento circolare rosa" },
        { src: matteo, titolo: "Giulia e Matteo con Frequenze vegetali" },
        { src: marco, titolo: "Marco con TH3 D4RK S1D3 0F TH3 M00N" },
        { src: mazzo, titolo: "Mazzo con Alba acida a Tehuantepec.jpg" },
        { src: paolo, titolo: "Paolo con Babele verde" },
        { src: paolo2, titolo: "Paolo con Stati di ritorno" },
        { src: raffo, titolo: "Raffo con Orizzonte arancio e Movimento circolare blu" },
        { src: rugegro, titolo: "Ruggero con Rio Esperanza" },
        { src: seba, titolo: "Seba con Mosaico Peruviano" },
        { src: silvio, titolo: "Silvio con Terra di Siena" },

    ];

    return (

        <div className="persone-container">
            <header className="home-header">
                <Navbar />
            </header>

            {immagini.map((img, index) => (
                <div key={index} className="persone-item">
                    <img src={img.src} alt={img.titolo} loading="lazy" />
                    <div className="persone-titolo">{img.titolo}</div>
                </div>
            ))}
        </div>
    );
}

export default Persone;
