import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js'
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
                        <h2 className="about-title">Chi sono</h2>

                        <p className="about-text">
                            Sono un artista visivo che lavora tra tradizione e sperimentazione. Questo spazio è un archivio digitale delle mie opere e del mio percorso.
                        </p>


                        <img
                            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRoHDdcekKSGl-5gzbOJNeVbtgpqdwhljlrkYDIw9I58UA2r81dnE_Pof4_E5IQhzLpM5PMKsKP5OIR4aAZwz8zpg" // metti il path corretto dell'immagine
                            alt="Mattia Bonora"
                            className="about-image"
                        />

                        <p className="about-text">
                            Sono un artista visivo che lavora tra tradizione e sperimentazione. Questo spazio è un archivio digitale delle mie opere e del mio percorso.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Home;
