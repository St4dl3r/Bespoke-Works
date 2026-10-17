import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar() {
    const navItems = [
        { label: "Strona Główna", path: "/" },
        { label: "Druk 3D", path: "/druk-3d" },
        { label: "CAD Skanowanie", path: "/cad-skanowanie-3d" },
        { label: "Frezowanie CNC", path: "/frezowanie-cnc" },
        { label: "Grawerowanie Laserowe", path: "/grawerowanie-laserowe" },
        { label: "Realizacje", path: "/realizacje" },
        { label: "Kontakt", path: "/kontakt" },

    ];
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <NavLink to="/">Bespoke Works</NavLink>
            </div>
            <ul className={styles.navList}>
                {navItems.map((item) => (
                    <li key={item.path}>
                        <NavLink to={item.path}>{item.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Navbar;