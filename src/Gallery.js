import Navbar from './Navbar.js'
import './Gallery.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import quattro_elementi from "./images/4_elementi.JPG";
import occhio1 from "./images/occhio1.jpg"
import rio1 from "./images/rio1.jpg"
import granada from "./images/granadajpg/granada (1).jpg"
import babele from "./images/babeleverdejpg/babele1.jpg"
import altrove from "./images/altrovejpg/altrove.jpg"
import colatablu from "./images/abissoblujpg/abissoblu (3).jpg"
import pianoquin from "./images/pianoQuin/pianoQuin (1).jpg"
import alba from "./images/albajpg/alba (1).jpg"
import ctrl1 from "./images/CTRL/CTRL (7).jpg";
import mareaRosa from "./images/marearosaJPG/rosa (1).jpg"
import naturaViva from "./images/naturaVivaJPG/naturaViva (1).jpg"
import nevermind1 from "./images/nevermindJPG/nevermind (1).jpg";
import pinkfloyd from "./images/pinkfloyjpg/pinkfloyd (2).jpg";
import splendere from "./images/splendereAlTramonto/splendere (5).jpg";
import elena from "./images/elena_JPG/elena (1).jpg";
import nebulosa from "./images/nebulosa/nebulosa (2).jpg";
import rpm from "./images/33jpg/33rpm (1).jpg";
import brut from "./images/brutalismo3.0jpg/brutalismo3 (2).jpg";
import palestina from "./images/SUMUD_jpg/palestina (1).jpg";
import mare from "./images/MARE D’INVERNO (L’EPILOGO)/maredinverno (1).jpg";
import ventiquattrok from "./images/24k/24k (1).jpg";
import mosaico from "./images/mosaicoliquido/mosaico (1).jpg"
import donot from "./images/donotconform/donotconform (1).jpg"
import origine from "./images/Origine/origine (1).jpg"
import california from "./images/californiavibes/california (1).jpg"
import steelandsoul from "./images/steelandsoul/steelandsoul (1).jpg"
import monster from "./images/monster/monster (1).jpg"
import axismundi from "./images/axismundi/axismundi (1).jpg"

import salina from "./images/salinajpg/salina (1).jpg"
import fenomeni from "./images/fenomeni/fenomeni (2).jpg"

import jazz from "./images/jazz/jazz (7).jpg"
import pattern99 from "./images/Pattern99/pattern99 (1).jpg"

import nirvana1 from "./images/nirvana/nirvana1.jpg";
import patternArgento from "./images/pattern175/patternArg (1).jpg";

import topologyArgento from "./images/emergedTop2/emArgento (1).jpg";
import emergedTop from "./images/emergedTopology/emerged (6).jpg";
import centoottanta from "./images/180/180 (3).jpg";

import { useLocation } from 'react-router-dom';


function Gallery() {

    const artworks = [
        {
            id: "sakti",
            src: occhio1,
            title: 'L’OCCHIO DI ŚAKTI',
            size: '20x20 cm',
            status: 'Venduto',
            anno: 2025,
        },
        {
            id: "PATTERN99: RADIAL TEXTURE STUDY",
            src: pattern99,
            title: 'PATTERN99: RADIAL TEXTURE STUDY',
            size: '90x60 cm',
            status: 'Venduto',
            anno: 2025,
        },

        {
            id: "TH3 D4RK S1D3 0F TH3 M00N",
            src: pinkfloyd,
            title: 'TH3 D4RK S1D3 0F TH3 M00N',
            size: '40x50 cm',
            status: 'Venduto',
            anno: 2025,
        },
        {
            id:"salina",
            src: salina ,
            title: 'FIORITURA SALINA',
            size: '55x75 cm',
            status: 'Venduto',
            anno: 2025,

        },
        {
            id:"donot",
            src: donot,
            title: 'DO NOT CONFORM',
            size: '75x55 cm',
            status: 'Acquistabile',
            anno: 2025,

        },
        {
            id:"elena",
            src: elena,
            title: 'Ἑλένη',
            size: '78x58 cm',
            status: 'Acquistabile',
            anno: 2025,

        },
        {
            id:"brutalismo",
            src: brut,
            title: 'BRUTALISMO 3.0',
            size: '58x78 cm',
            status: 'Venduto',
            anno: 2025,

        },
        {
            id:"MAREDINVERNO",
            src: mare,
            title: 'MARE D’INVERNO (L’EPILOGO)',
            size: '78x58 cm',
            status: 'Venduto',
            anno: 2025,

        },

        {
            id:"jazz",
            src: jazz,
            title: 'JAZZ AL CREPUSCOLO',
            size: '75x55 cm',
            status: 'Acquistabile',
            anno: 2025,

        },


        {
            id:"splendere",
            src: splendere,
            title: 'SPLENDERE AL TRAMONTO',
            size: '60x30 cm',
            status: 'Venduto',
            anno: 2025,

        },
        {
            id:"alba",
            src: alba,
            title: 'ALBA LISERGICA',
            size: '50x40 cm',
            status: 'Acquistabile',
            anno: 2025,

        },
        {
            id:"granada",
            src: granada,
            title: 'I VICOLI DI UNA VECCHIA GRANADA',
            size: '78x58 cm',
            status: 'Acquistabile',
            anno: 2025,

        },
        {
            id:"mareaRosa",
            src: mareaRosa,
            title: 'MAREA ROSA',
            size: '24x18 cm',
            status: 'Venduto',
            anno: 2025,

        },
        {
            id:"SUMUD",
            src: palestina,
            title: 'SUMUD',
            size: '80x60 cm',
            status: 'Acquistabile',
            anno: 2025,

        },
        {
            id:"FORME-FLUSSI-FENOMENI",
            src: fenomeni,
            title: 'FORME, FLUSSI, FENOMENI',
            size: '20x20 cm',
            status: 'Venduto',
            anno: 2025,

        },
        {
            id:"nevermind-the-bollocks",
            src: nevermind1,
            title: 'NEVER MIND THE BOLLOCKS (OMAGGIO)',
            size: '50x70 cm',
            status: 'Acquistabile',
            anno: 2025,

        },
        {
            id:"ETERE",
            src: quattro_elementi,
            title: 'ETERE',
            size: '50x50 cm',
            status: 'Venduto',
            anno: 2025,

        },
        {

            id:"PIANO-QUINQUENNALE",
            src: pianoquin,
            title: 'PIANO QUINQUENNALE',
            size: '78x58 cm',
            status: 'Venduto',
            anno: 2025,

        },

        {
            id:"ABISSO-BLU",
            src: colatablu,
            title: 'ABISSO BLU',
            size: '30x24 cm',
            status: 'Acquistabile',
            anno: 2025,

        },
        {
            id:"33-RPM",
            src: rpm,
            title: '33 RPM',
            size: '50x20 cm',
            status: 'Venduto',
            anno: 2025,

        },
        {
            id:"RIO",
            src: rio1,
            title: 'RIO ESPERANZA',
            size: '78x58 cm',
            status: 'Venduto',
            anno: 2025,

        },
        

        {
            id:"nebulosa",
            src: nebulosa,
            title: 'NGC 4972 – NEBULOSA KAELIS',
            size: '30x30',
            status: 'Acquistabile',
            anno: 2025,

        },
        {
            id:"ctrl",
            src: ctrl1,
            title: 'CTRL+ALT+?',
            size: '29x24 cm',
            status: 'Acquistabile',
            anno: 2025,

        },
        {
            id:"altrove",
            src: altrove,
            title: 'ALTROVE',
            size: '20x20 cm',
            status: 'Venduto',
            anno: 2025,

        },
        {
            id:"ORIGINE",
            src: origine,
            title: 'ORIGINE',
            size: '40x30 cm',
            status: 'Acquistabile',
            anno: 2025,

        },

        {
            id:"california",
            src: california,
            title: 'C4L1F0RN14 V1B3S',
            size: '40x30 cm',
            status: 'Venduto',
            anno: 2025,

        },
        {
            id:"steelandsoul",
            src: steelandsoul,
            title: 'STEEL AND SOUL',
            size: '58x78 cm',
            status: 'Venduto',
            anno: 2025,

        },

        {
            id:"NATURA-VIVA",
            src: naturaViva,
            title: 'NATURA VIVA',
            size: '29x24',
            status: 'Acquistabile',
            anno: 2025,

        },
        {
            id:"24K",
            src: ventiquattrok,
            title: '24K',
            size: '30x24 cm',
            status: 'Venduto',
            anno: 2025,

        },

        {
            id:"BABELE VERDE",
            src: babele,
            title: 'BABELE VERDE',
            size: '78x58 cm',
            status: 'Venduto',
            anno: 2025,

        },

        {
            id:"AXIS-MUNDI-ARGENTEO",
            src: axismundi,
            title: 'AXIS MUNDI ARGENTEO',
            size: '30x24 cm',
            status: 'Venduto',
            anno: 2025,

        },

        {
            id:"MONSTER",
            src: monster,
            title: 'MONSTER CORE',
            size: '78x58 cm',
            status: 'Venduto',
            anno: 2025,

        },
        {
            id:"MOSAICO-LIQUIDO",
            src: mosaico,
            title: 'MOSAICO LIQUIDO',
            size: '60x30 cm',
            status: 'Acquistabile',
            anno: 2025,

        },

        {
            id: "GEEKED SMILE",
            src: nirvana1,
            title: 'GEEKED SMILE',
            size: '60x30 cm',
            status: 'Acquistabile',
            anno: 2026,

        },
         {
            id: "PATTERN 175",
            src: patternArgento,
            title: 'PATTERN 175: RADIAL TEXTURE STUDY',
            size: '60x30 cm',
            status: 'Venduto',
            anno: 2026,

        },

        {
            id: "EMERGENT TOPOLOGY",
            src: topologyArgento,
            title: 'STF - 01: EMERGENT TOPOLOGY',
            size: '90x60 cm',
            status: 'Venduto',
            anno: 2026,

        },

        {
            id: "EMERGENT TOPOLOGY2",
            src: emergedTop,
            title: 'STF - 02: EMERGENT TOPOLOGY',
            size: '90x60 cm',
            status: 'Vnduto',
            anno: 2026,
        },

        {
            id: "180",
            src: centoottanta,
            title: '180',
            size: '60x30 cm',
            status: 'Acquistabile',
            anno: 2026,

        },




    ];

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const year = queryParams.get("year");

    const filteredArtworks = year
    ? artworks.filter(art => art.anno === Number(year))
    : artworks;

    // Variants per il container che gestisce lo stagger
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const artworkVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
            }
        },
    };


    return (
        <motion.div
            initial={{ opacity: 0.9, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1 }}
        >
            <div className="gallery">
                <header className="home-header">
                    <Navbar />
                </header>

                <motion.section
                    className="gallery-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    {filteredArtworks.map((art, index) => (
                        <Link to={`/opera/${art.id}`} key={art.id}>                            
                            <motion.div className="artwork" variants={artworkVariants}>
                                <div className="artwork-wrapper">
                                    <img src={art.src} alt={art.title} className="artwork-image" loading="lazy" />
                                    {art.status === 'Venduto' && (
                                        <div className="sold-overlay">VENDUTO</div>
                                    )}
                                </div>
                                <h3 className="artwork-title">{art.title}</h3>
                                <p className="artwork-size">{art.size}</p>
                            </motion.div>
                        </Link>
                    ))}
                </motion.section>
            </div>
        </motion.div>
    );
}

export default Gallery;
