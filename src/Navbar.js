import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();


    const handleNavigation = (path) => {
        if (menuRef.current) {
            const currentHeight = menuRef.current.scrollHeight;
            menuRef.current.style.height = `${currentHeight}px`;
            void menuRef.current.offsetHeight;
            menuRef.current.style.height = '0px';
            menuRef.current.style.marginTop = '0px';

        }

        setIsOpen(false);

        // Naviga dopo la fine dell'animazione
        setTimeout(() => {
            navigate(path);
        }, 200); // Match con il tuo transition: 0.3s
    };

    const toggleMenu = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            // Chiusura fluida: imposta altezza attuale prima di chiudere
            if (menuRef.current) {
                const currentHeight = menuRef.current.scrollHeight;
                menuRef.current.style.height = `${currentHeight}px`; // forza l'altezza attuale
                // Forza reflow per permettere la transizione
                void menuRef.current.offsetHeight;
                menuRef.current.style.height = '0px';
                menuRef.current.style.marginTop = `5px`;
                menuRef.current.style.paddingBottom = '0px';

            }
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen && menuRef.current) {
            const scrollHeight = menuRef.current.scrollHeight;
            menuRef.current.style.height = `${scrollHeight}px`;
            menuRef.current.style.marginTop = `${20}px`;

        }
    }, [isOpen]);

    let pageTitle = "Mattia Bonora";
    switch (location.pathname) {
        case "/":
            pageTitle = "Mattia Bonora";
            break;
        case "/galleria":
            pageTitle = "Galleria";
            break;
        case "/contatti":
            pageTitle = "Contatti";
            break;
        default:
            pageTitle = "Mattia Bonora";
    }

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <button
                    className={`hamburger ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Apri menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <Link className="linkHome" to="/">
                    <h1 className="navbar-title">{pageTitle}</h1>
                </Link>
            </div>

            <ul
                ref={menuRef}
                className={`navbar-menu ${isOpen ? 'open' : ''}`}
            >
                <Link to="/"><li>Home</li></Link>
                <li onClick={() => handleNavigation("/galleria")}>Galleria</li>
                <li onClick={() => handleNavigation("/contatti")}>Contatti</li>
            </ul>
        </nav>
    );
}

export default Navbar;
