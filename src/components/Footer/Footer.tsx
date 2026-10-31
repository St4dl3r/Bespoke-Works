import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <section className={styles.company}>
                    <h2>Bespoke Works</h2>
                    <p>Tutaj bedzie adres firmy</p>
                </section>
            
            
          
                <nav className={styles.navigation} aria-label="Nawigacja w stopce">
                    <h2>Nawigacja</h2>

                    <NavLink to="/">Strona Główna</NavLink>
                    <NavLink to="/realizacje">Realizacje</NavLink>
                    <NavLink to="/kontakt">Kontakt</NavLink>
                </nav>
            
            
            
                <section className={styles.contact}>
                    <h2>Kontakt</h2>
                    <a href="tel:+48730292461">730 292 461</a>
                    <a href="mailto:bespokeworkseu@gmail.com">E-Mail</a>
                    <a href="https://www.instagram.com/bespokeworkseu/">Instagram</a>
                    <a href="https://www.facebook.com/profile.php?id=61590642021249&locale=pl_PL">Facebook</a>
                </section>
            </div>
            
            <div className={styles.footerBottom}>
                © {new Date().getFullYear()} Bespoke Works. 
                Wszelkie prawa zastrzeżone.
                
                </div>
            
        </footer>
    );
}

export default Footer;