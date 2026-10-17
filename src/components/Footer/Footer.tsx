import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
    return(
        <footer>
            <div className={styles.footerContent}>
                <section>
                    <h2>Firma</h2>
                    <p>krótki opis działaności</p>
                </section>
            
            
          
                <section>
                    <h2>Nawigacja</h2>
                    <NavLink to="/">Strona Główna</NavLink>
                    <NavLink to="/realizacje">Realizacje</NavLink>
                    <NavLink to="/kontakt">Kontakt</NavLink>
                </section>
            
            
            
                <section>
                    <h2>Kontakt</h2>
                    <a href="tel:+48730292461">730 292 461</a>
                    <a href="mailto:bespokeworkseu@gmail.com">E-Mail</a>
                    <a href="https://www.instagram.com/bespokeworkseu/">Instagram</a>
                    <a href="https://www.facebook.com/profile.php?id=61590642021249&locale=pl_PL">Facebook</a>
                </section>
            </div>
            
            <div>© 2026 Bespoke Works. Wszelkie prawa zastrzeżone.</div>
            
        </footer>
    );
}

export default Footer;