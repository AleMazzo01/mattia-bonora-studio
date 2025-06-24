import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { Mail } from 'lucide-react'; // Usa Lucide per l'icona email
import Navbar from './Navbar.js';
import "./Contatti.css";

function Contatti() {
    const lastPostUrl = 'https://www.instagram.com/p/DK4g3VHok_O/?img_index=1';
    const email = 'mattiabonora.studio@gmail.com'; // mettere email

    return (
        <main >
            <header className="home-header">
                <Navbar />
            </header>

            <main className="contatti-section p-4">
                <a
                    href={`mailto:${email}`}
                    className="contact-info flex items-center gap-3 text-blue-600 hover:underline text-lg"
                    style={{ textDecoration: 'none' }}
                >
                    <Mail className="w-6 h-6" />
                    {email}
                </a>

                <div className="instagram-container mb-6">
                    <h3 className="text-xl font-semibold mb-2">Ultimo Post Instagram</h3>
                    <InstagramEmbed
                        url={lastPostUrl}
                        width={320}
                        captioned={false}
                    />
                </div>
            </main>
        </main>
    );
}

export default Contatti;
