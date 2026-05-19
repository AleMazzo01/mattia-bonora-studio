    import { useState, useRef, useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import './Navbar.css';
    import { useNavigate } from 'react-router-dom';

    function Navbar() {
        const [isOpen, setIsOpen] = useState(false);
        const [isGalleryOpen, setIsGalleryOpen] = useState(false);
        const menuRef = useRef(null);
        const location = useLocation();
        const navigate = useNavigate();
        const galleryMenuRef = useRef(null);


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
            if (isOpen) {
                setIsGalleryOpen(false);
            }
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

        const toggleGallery = (e) => {
            e.stopPropagation();

            if (!isGalleryOpen) {
                setIsGalleryOpen(true);
            } else {
                if (galleryMenuRef.current) {
                    const h = galleryMenuRef.current.scrollHeight;
                    galleryMenuRef.current.style.height = `${h}px`;

                    requestAnimationFrame(() => {
                        if (galleryMenuRef.current) {
                            galleryMenuRef.current.style.height = "0px";
                        }
                    });
                }

                setIsGalleryOpen(false);
            }
        };

        useEffect(() => {
            if (isOpen && menuRef.current) {
                const scrollHeight = menuRef.current.scrollHeight;
                menuRef.current.style.height = `${scrollHeight}px`;
                menuRef.current.style.marginTop = `${20}px`;

            }
        }, [isOpen]);

        useEffect(() => {
            if (isGalleryOpen && galleryMenuRef.current) {
                const h = galleryMenuRef.current.scrollHeight;
                galleryMenuRef.current.style.height = `${h}px`;
            }
        }, [isGalleryOpen]);

        let pageTitle = "Mattia Bonora";
        switch (location.pathname) {
            case "/":
                pageTitle = "Mattia Bonora";
                break;
            case "/galleria":
                pageTitle = "Galleria";
                break;
            case "/Persone":
                pageTitle = "Persone";
                break;
            case "/ChiSono":
                pageTitle = "Biografia";
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
                    <li onClick={() => handleNavigation("/")}>Home</li>
                    
                    
                    
                    <li>
                        <div onClick={toggleGallery} className="menu-item">
                            Galleria
                        </div>

                            <ul 
                                ref={galleryMenuRef}
                                className={`submenu ${isGalleryOpen ? "open" : ""}`}
                            >
                                <li onClick={() => handleNavigation("/galleria?year=2025")}>2025</li>
                                <li onClick={() => handleNavigation("/galleria?year=2026")}>2026</li>
                                <li onClick={() => handleNavigation("/galleria?tutti=true")}>Tutti</li>
                            </ul>
                    </li>


                    <li onClick={() => handleNavigation("/contatti")}>Contatti</li>
                    <li onClick={() => handleNavigation("/Persone")}>Persone</li>
                    <li onClick={() => handleNavigation("/ChiSono")}>Biografia</li>

                </ul>
            </nav>
        );
    }

    export default Navbar;
