import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js'
import fotoBio from "./images/IMG_6277.jpg"
function Home() {
    return (
        <div className="home">
            <header className="home-header">
                <Navbar />
            </header>

            <Link to="/galleria">
                <section className="hero-section">
                    <div className="hero-overlay" />
                    <div className="hero-content">
                        <h2>opere</h2>
                    </div>
                </section>
            </Link>


            <section id="chi_sono" className="about-section-about">

                <div className="about-container">

                    <div className="about-text-container">
                        <h2 className="about-title">Presentazione</h2>

                        <p className="about-text">
                            Mi chiamo Mattia e attraverso le mie opere astratte, testurizzate e contemporanee, punto a dare forma a emozioni, ricordi e visioni interiori.
                            La mia passione per l’arte è nata da bambino, grazie a mio nonno, che mi ha trasmesso l’amore per la storia e la cultura.
                        </p>


                        <img
                            src={fotoBio} // metti il path corretto dell'immagine
                            alt="Mattia Bonora"
                            className="about-image"
                        />

                        <p className="about-text">
                            Ciascun quadro è un atto di connessione profonda con ciò che vivo, vedo e sento ogni giorno. È colore che respira, è il mio modo di sfogarmi.
                            Scopri le mie tele e lasciati trasportare in un viaggio sensoriale ed emotivo.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Home;
