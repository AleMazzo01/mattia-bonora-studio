import { useParams } from 'react-router-dom';
import { artworks } from './artWorksData';
import './Work.css';
import Navbar from './Navbar.js';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Work() {
    const { id } = useParams();
    const opera = artworks[parseInt(id)];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 75);
    }, []);

    if (!opera) return <div className="opera-not-found">Opera non trovata</div>;

    const images = Array.isArray(opera.src) ? opera.src : [opera.src];

    const changeImage = (direction) => {
        setCurrentImageIndex((prev) => {
            if (direction === 'next') {
                return prev === images.length - 1 ? 0 : prev + 1;
            } else {
                return prev === 0 ? images.length - 1 : prev - 1;
            }
        });
    };

    return (
        <main className="opera-detail-container animated-slide-in">
            <header className="home-header">
                <Navbar />
            </header>

            <main className="opera-detail-container">
                <div className="carousel-container">
                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                    >
                        {images.map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={opera.title}
                                className="carousel-image"
                            />
                        ))}
                    </div>

                    {images.length > 1 && (
                        <>
                            <button className="nav-button left" onClick={() => changeImage('prev')}>
                                <ChevronLeft size={32} />
                            </button>
                            <button className="nav-button right" onClick={() => changeImage('next')}>
                                <ChevronRight size={32} />
                            </button>
                        </>
                    )}
                </div>

                <div className="opera-info">
                    <h1 className="opera-title">{opera.title}</h1>
                    {opera.descrizione && (
                        <p className="opera-description">{opera.descrizione}</p>
                    )}
                    <p className="opera-detail">
                        <strong>Dimensioni:</strong> {opera.size}
                    </p>
                    <p className="opera-detail">
                        <strong>Tecnica:</strong> {opera.tecnica}
                    </p>
                    <p className="opera-detail">
                        <strong>Supporto:</strong> {opera.supporto}
                    </p>
                    <p className="opera-detail">
                        <strong>Realizzazione:</strong> {opera.realizzazione}
                    </p>
                    <p className="opera-detail">
                        <strong>Disponibilita:</strong> {opera.disponibilita}
                    </p>
                </div>
            </main>
        </main>
    );
}

export default Work;
