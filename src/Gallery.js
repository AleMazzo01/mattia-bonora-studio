import Navbar from './Navbar.js'
import './Gallery.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import quattro_elementi from "./images/4_elementi.JPG";
import caos from "./images/Caos.JPG";
import regaloPapa from "./images/papaBonny.JPG"
import pastaVerde from "./images/pasta_verde.JPG"
import quadroElena from "./images/Quadro elena.JPG"
import movimentoCircolareInDueFasi from "./images/movimento_circolare_in_due_fasi.JPG"
import occhio1 from "./images/occhio1.jpg"
import cinque1 from "./images/528_1.jpg"
import rio1 from "./images/rio1.jpg"
import granada from "./images/granadajpg/granada (2).jpg"
import babele from "./images/babeleverdejpg/babele1.jpg"
import sous from "./images/sousbuavertjpg/sousbuavert1.jpg"
import altrove from "./images/altrovejpg/altrove.jpg"
import colatablu from "./images/abissoblujpg/abissoblu (3).jpg"

function Gallery() {

    const artworks = [
        {
            src: occhio1,
            title: 'L’OCCHIO DI ŚAKTI',
            size: '20x20 cm',
        },
        {
            src: quattro_elementi,
            title: 'ETERE',
            size: '80x60 cm',
        },
        {
            src: babele,
            title: 'BABELE VERDE',
            size: '78x58 cm',
        },
        {
            src: granada,
            title: 'I VICOLI DI UNA VECCHIA GRANADA',
            size: '78x58 cm',
        },
        {
            src: cinque1,
            title: '528 HZ',
            size: '80x60 cm',
        },
        {
            src: colatablu,
            title: 'ABISSO BLU',
            size: '30x24 cm',
        },
        {
            src: rio1,
            title: 'Rio Esperanza',
            size: '78x58 cm',
        },
        {
            src: regaloPapa,
            title: 'fascia blu su sfondo nero',
            size: '80x60 cm',
        },
        {
            src: sous,
            title: 'SOUS-BOIS VERT',
            size: '50x50 cm',
        },
        {
            src: altrove,
            title: 'ALTROVE',
            size: '20x20 cm',
        },
        {
            src: quadroElena,
            title: 'quadro a cazzo di cane ',
            size: '50x50 cm',
        },
        {
            src: movimentoCircolareInDueFasi,
            title: 'Movimento circolare in due fasi',
            size: '80x60 cm',
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
                                <img src={art.src} alt={art.title}  className="artwork-image" loading="lazy"  />
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
