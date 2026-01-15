import React from "react";
import "./Persone.css";
import Navbar from "./Navbar";

import badbunny from "./images/persone/Carlotta con DEBI TIRAR MAS FOTOS.jpg";
import bruno from "./images/persone/Bruno con ÔÇ£Forme, Flussi, FenomeniÔÇØ (2_3).jpg"
import etere from "./images/persone/Andrea con ETERE.jpg";
import Claudia from "./images/persone/Claudia con ÔÇ£There Is a Light That Never Goes OutÔÇØ.jpg";
import Cristian from "./images/persone/Cristian con ÔÇ£Steel and SoulÔÇØ.jpg";

import elena from "./images/persone/Elena con Acqua dolce, acqua salata.jpg";
import Eleonora from "./images/persone/Eleonora con ÔÇ£AguaÔÇØ.jpg";
import EleBaldo from "./images/persone/Eleonora e Baldo con ÔÇ£Forme, Flussi, FenomeniÔÇØ (1_3).jpg";


import federica from "./images/persone/Federico con Il bombarolo.jpg";
import federico from "./images/persone/Federico con Marea rosa.jpg";
import fiore from "./images/persone/Fiore con Axis Mundi Argenteo.jpg";
import giulia from "./images/persone/Giulia con Marea azzurra e Movimento circolare rosa.jpg";
import matteo from "./images/persone/Giulia e Matteo con Frequenze vegetali.jpg";

import Giuseppe from "./images/persone/Giuseppe con ÔÇ£Piano QuinquennaleÔÇØ.jpg";
import ilaria from "./images/persone/Ilaria con ÔÇ£LÔÇÖocchio di S╠üaktiÔÇØ.jpg";


import marco from "./images/persone/Marco con TH3 D4RK S1D3 0F TH3 M00N.jpg";
import mazzo from "./images/persone/Mazzo con Alba acida a Tehuantepec.jpg";
import mazzoC from "./images/persone/Mazzo con ÔÇ£C4L1F0RN14 V1B3SÔÇØ.jpg";
import Milena from "./images/persone/Milena con ÔÇ£Fioritura salinaÔÇØ.jpg";

import paolo from "./images/persone/Paolo con Babele verde.jpg";
import paolo2 from "./images/persone/Paolo con Stati di ritorno.jpg";
import raffo from "./images/persone/Raffo con Orizzonte arancio e Movimento circolare blu.jpg";
import rugegro from "./images/persone/Ruggero con Rio Esperanza.jpg";
import Sandro from "./images/persone/Sandro con ÔÇ£Form, Flussi, FenomeniÔÇØ (3_3).jpg";


import seba from "./images/persone/Seba con Mosaico Peruviano.JPG";
import seba1 from "./images/persone/Seba con Splendere al tramonto.jpg";
import silvio from "./images/persone/Silvio con Terra di Siena.jpg";
import veronica from "./images/persone/Veronica con ÔÇ£VisceraleÔÇØ e ÔÇ£EnergiaÔÇØ.jpg";

function Persone() {
    const immagini = [
        { src: etere, titolo: "Andrea con \"ETERE\"" },
        { src: bruno, titolo: "Bruno con \"Forme, flussi fenomeni\"" },
        { src: badbunny, titolo: "Carlotta con \"DEBI TIRAR MAS FOTOS\"" },
        { src: Claudia, titolo: "Claudia con \"There Is a Light That Never Goes Out\"" },
        { src: Cristian, titolo: "Cristian con \"Steel and Soul\"" },

        { src: elena, titolo: "Elena con \"Acqua dolce, acqua salata\"" },
        { src: Eleonora, titolo: "Eleonora con \"Agua\"" },
        { src: EleBaldo, titolo: "Eleonora e Baldo con \"Forme, Flussi, Fenomeni\"" },

        { src: federica, titolo: "Federico con \"Il bombarolo\"" },
        { src: federico, titolo: "Federico con \"Marea rosa\"" },
        { src: fiore, titolo: "Fiore con \"Axis Mundi Argenteo\"" },
        { src: giulia, titolo: "Giulia con \"Marea azzurra e Movimento circolare rosa\"" },
        { src: matteo, titolo: "Giulia e Matteo con \"Frequenze vegetali\"" },

        { src: Giuseppe, titolo: "Giuseppe con \"Piano Quinquennale\"" },
        { src: ilaria, titolo: "Ilaria con \"Occhio di ŚAKTI\"" },


        { src: marco, titolo: "Marco con \"TH3 D4RK S1D3 0F TH3 M00N\"" },
        { src: mazzo, titolo: "Mazzo con \"Alba acida a Tehuantepec\"" },
        { src: mazzoC, titolo: "Mazzo con \"C4L1F0RN14 V1B3S\"" },
        { src: Milena, titolo: "Milena con \"Fioritura salina\"" },

        { src: paolo, titolo: "Paolo con \"Babele verde\"" },
        { src: paolo2, titolo: "Paolo con \"Stati di ritorno\"" },
        { src: raffo, titolo: "Raffo con \"Orizzonte arancio e Movimento circolare blu\"" },
        { src: rugegro, titolo: "Ruggero con \"Rio Esperanza\"" },
        { src: Sandro, titolo: "Sandro con \"Forme, Flussi, Fenomeni\"" },



        { src: seba, titolo: "Seba con \"Mosaico Peruviano\"" },
        { src: seba1, titolo: "Seba con \"Splendere al tramonto\"" },
        { src: silvio, titolo: "Silvio con \"Terra di Siena\"" },
        { src: veronica, titolo: "Veronica con \"Viscerale\" e \"Energia\"" },

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
