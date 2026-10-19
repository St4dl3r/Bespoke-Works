import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import logo from "../../assets/images/logo-symbol.png";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const lastScrollY = useRef(0)

    const navItems = [
        { label: "Strona Główna", path: "/" },
        { label: "Druk 3D", path: "/druk-3d" },
        { label: "CAD Skanowanie", path: "/cad-skanowanie-3d" },
        { label: "Frezowanie CNC", path: "/frezowanie-cnc" },
        { label: "Grawerowanie Laserowe", path: "/grawerowanie-laserowe" },
        { label: "Realizacje", path: "/realizacje" },
        { label: "Kontakt", path: "/kontakt" },

    ];

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const difference = currentScrollY - lastScrollY.current;

            if (currentScrollY <= 80){
                setIsNavbarVisible(true);
            } else if (difference !== 0) {
                setIsNavbarVisible(difference < 0);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true});

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return(
        <nav className={`${styles.navbar} ${
            isNavbarVisible || isMenuOpen ? "" : styles.navbarHidden
            }`}
        >
            <div className={styles.logo}>
                <NavLink to="/">
                    <img src={logo} alt="Bespoke Works - Strona główna" />
                </NavLink>
            </div>
            <button
                type="button"
                className={styles.menuButton}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
            >
                {isMenuOpen ? "✕" : "☰"}
            </button>
            <ul 
                id="mobile-navigation"
                className={`${styles.navList} ${isMenuOpen ? styles.navOpen : ""}`}
            >
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                            `${styles.navLink} ${isActive ? styles.active : ""}`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Navbar;