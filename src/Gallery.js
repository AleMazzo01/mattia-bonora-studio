import Navbar from './Navbar.js'
import './Gallery.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import quattro_elementi from "./images/4_elementi.JPG";
import occhio1 from "./images/occhio1.jpg"
import cinque1 from "./images/528_1.jpg"
import rio1 from "./images/rio1.jpg"
import granada from "./images/granadajpg/granada (2).jpg"
import babele from "./images/babeleverdejpg/babele1.jpg"
import sous from "./images/sousbuavertjpg/sousbuavert1.jpg"
import altrove from "./images/altrovejpg/altrove.jpg"
import colatablu from "./images/abissoblujpg/abissoblu (3).jpg"
import sahaara from "./images/nottteSahaara/notteSahaara (1).jpg"
import pianoquin from "./images/pianoQuin/pianoQuin (1).jpg"
import interno from "./images/infernoRossoJpg/infernoRosso (1).jpg";
import alba from "./images/albajpg/alba (1).jpg"
import ctrl1 from "./images/CTRL/CTRL (1).jpg";
import mareaRosa from "./images/marearosaJPG/rosa (1).jpg"
import onirico1 from "./images/oniricojpg/onorico1.jpg";
import naturaViva from "./images/naturaVivaJPG/naturaViva (1).jpg"
import nevermind1 from "./images/nevermindJPG/nevermind (1).jpg";
import pinkfloyd from "./images/pinkfloyjpg/pinkfloyd (2).jpg";
import splendere from "./images/splendereAlTramonto/splendere (5).jpg";
import elena from "./images/elena_JPG/elena (1).jpg";
import nebulosa from "./images/nebulosa/nebulosa (2).jpg";
import rpm from "./images/33jpg/33rpm (1).jpg";
import brut from "./images/brutalismo3.0jpg/brutalismo3 (2).jpg";
import palestina from "./images/SUMUD_jpg/palestina (1).jpg";


function Gallery() {

    const artworks = [
        {
            src: occhio1,
            title: 'L’OCCHIO DI ŚAKTI',
            size: '20x20 cm',
            status: 'Acquistabile',

        },
        {
            src: pinkfloyd,
            title: 'TH3 D4RK S1D3 0F TH3 M00N',
            size: '40x50 cm',
            status: 'Venduto',

        },
        {
            src: brut,
            title: 'BRUTALISMO 3.0',
            size: '58x78 cm',
            status: 'Venduto',

        },
        {
            src: splendere,
            title: 'SPLENDERE AL TRAMONTO',
            size: '60x30 cm',
            status: 'Venduto',

        },
        {
            src: quattro_elementi,
            title: 'ETERE',
            size: '80x60 cm',
            status: 'Venduto',

        },
        {
            src: colatablu,
            title: 'ABISSO BLU',
            size: '30x24 cm',
            status: 'Acquistabile',

        },

        {
            src: pianoquin,
            title: 'PIANO QUINQUENNALE',
            size: '78x58 cm',
            status: 'Acquistabile',

        },
        {
            src: elena,
            title: 'Ἑλένη',
            size: '58x78 cm',
            status: 'Acquistabile',

        },
        {
            src: rpm,
            title: '33 RPM',
            size: '50x20 cm',
            status: 'Acquistabile',

        },
        {
            src: alba,
            title: 'ALBA LISERGICA',
            size: '50x40 cm',
            status: 'Acquistabile',

        },
        {
            src: nebulosa,
            title: 'NGC 4972 – NEBULOSA KAELIS',
            size: '',
            status: 'Acquistabile',

        },
        {
            src: rio1,
            title: 'RIO ESPERANZA',
            size: '78x58 cm',
            status: 'Venduto',
        },
        {
            src: mareaRosa,
            title: 'MAREA ROSA',
            size: '24x18 cm',
            status: 'Venduto',

        },
        {
            src: granada,
            title: 'I VICOLI DI UNA VECCHIA GRANADA',
            size: '78x58 cm',
            status: 'Acquistabile',

        },
        {
            src: sous,
            title: 'SOUS-BOIS VERT',
            size: '50x50 cm',
            status: 'Acquistabile',

        },
        {
            src: palestina,
            title: 'SUMUD',
            size: '80x60 cm',
            status: 'Acquistabile',

        },

        {
            src: cinque1,
            title: '528 HZ',
            size: '80x60 cm',
            status: 'Acquistabile',

        },
        {
            src: babele,
            title: 'BABELE VERDE',
            size: '78x58 cm',
            status: 'Venduto',
        },
        {
            src: onirico1,
            title: 'TEATRO ONIRICO IN TRE FASI',
            size: '80x60 cm',
            status: 'Acquistabile',

        },
        {
            src: interno,
            title: 'INTERNO ROSSO',
            size: '58x78 cm',
            status: 'Acquistabile',

        },
        {
            src: naturaViva,
            title: 'NATURA VIVA',
            size: '29x24',
            status: 'Acquistabile',

        },
        {
            src: sahaara,
            title: 'NOTTE CAPOVOLTA NEL SAHARA',
            size: '60x30 cm',
            status: 'Acquistabile',

        },
        {
            src: altrove,
            title: 'ALTROVE',
            size: '20x20 cm',
            status: 'Acquistabile',
        },
        {
            src: nevermind1,
            title: 'NEVER MIND THE BOLLOCKS (OMAGGIO)',
            size: '50x70 cm',
            status: 'Acquistabile',
        },
        {
            src: ctrl1,
            title: 'CTRL+ALT+?',
            size: '24x29 cm',
            status: 'Acquistabile',

        },

    ];

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

                    {artworks.map((art, index) => (
                        <Link to={`/opera/${index}`} key={index}>
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
