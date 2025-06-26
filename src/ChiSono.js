import React from "react";
import Navbar from "./Navbar";
import bio1 from "./images/biografia1.jpg"
import bio2 from "./images/biografia2.jpg"
import bio3 from "./images/biografia3.jpg"
import bio4 from "./images/bio4.jpg"
import "./ChiSono.css"
const ChiSono = () => {
    return (
        <div className="ChiSono">

            <header className="home-header">
                <Navbar />
            </header>


            <div className="max-w-4xl mx-auto px-6 py-12 text-lg leading-relaxed text-gray-800">
                <p className="mb-6">
                    Mi chiamo Mattia e questo è lo spazio dove la mia visione prende forma:
                    una galleria digitale che racconta la mia arte, che vive tra il
                    contemporaneo, l’astratto e il testurizzato.
                </p>
                <img src={bio1}/>
                <p className="mb-6">
                    Ogni quadro è il risultato di un dialogo introspettivo e fluido, un
                    momento di connessione tra ciò che sento, ciò che vivo e ciò che vedo.
                    Dipingere per me non è solo un gesto estetico, ma un atto liberatorio,
                    profondo, necessario. È il mio modo di elaborare la realtà e
                    restituirla in una forma nuova, libera da vincoli e definizioni.
                </p>
                <img src={bio2}/>

                <p className="mb-6">
                    La mia passione per la pittura ha radici lontane e nasce quando ero solo
                    un bimbo; più precisamente, quando mio nonno mi aprì le porte di un
                    mondo fatto di storia, cultura e arte. Fu lui il mio primo "maestro", il
                    primo a insegnarmi a osservare, a sentire, a lasciarmi ispirare.
                    Attraverso i suoi racconti, i luoghi visitati insieme, i libri d’arte
                    sfogliati con attenzione, ho imparato che l’arte è un linguaggio
                    universale, capace di parlare a chiunque sappia ascoltare.
                </p>
                <img src={bio3}/>

                <p className="mb-6">
                    Nei miei lavori troverai superfici materiche, colori intensi, forme che
                    suggeriscono senza definire. Ogni tela è pensata per evocare emozioni e
                    lasciare spazio all’interpretazione personale. Mi muovo in un terreno
                    dove l’astrazione incontra la realtà, dove le texture raccontano storie
                    quotidiane e al tempo stesso, immaginarie.
                </p>
                <img src={bio4}/>

                <p className="mb-6">
                    Ogni pezzo è unico, realizzato con cura e dedizione. Offro anche la
                    possibilità di realizzare lavori su commissione, per chi desidera
                    portare nella propria casa o nel proprio spazio un’opera personalizzata,
                    nata da un dialogo diretto con me.
                </p>
                <p>
                    Questo sito non vuole limitarsi ad essere una semplice vetrina, ma vuole
                    essere uno spazio di incontro, di scoperta e condivisione. Spero che,
                    esplorando i miei quadri, tu possa sentire un frammento di ciò che
                    sento io mentre dipingo: connessione, libertà e ricordo.
                </p>
            </div>

        </div>

    );
};

export default ChiSono;
