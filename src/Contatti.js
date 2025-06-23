import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

function Contatti() {
    const lastPostUrl = 'https://www.instagram.com/p/DK4g3VHok_O/?img_index=1'; // sostituisci con l'URL reale

    return (
        <section className="contatti-section">
            <h2>Contatti</h2>
            <div className="instagram-container">
                <h3>Ultimo Post Instagram</h3>
                <InstagramEmbed
                    url={lastPostUrl}
                    width={320}
                    captioned={false}
                />
            </div>
            {/* Inserisci qui indirizzo, email, ecc */}
        </section>
    );
}

export default Contatti;
