import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Kontakt(){
    return(
        <div>
            <section>
            <h1>Skontaktuj się z nami</h1>
            <p> Masz pomysł na projekt lub potrzebujesz indywidualnej wyceny?
    Skontaktuj się z nami, aby omówić szczegóły współpracy.</p>
            <div>
            <article>
                <h2>Telefon</h2>
                <a href="tel:+48730292461">730292461</a>
            </article>
            <article>
                <h2>E-mail</h2>
                <a href="mailto:bespokeworkseu@gmail.com">bespokeworkseu@gmail.com</a>
            </article>
            <article>
                <a href="https://www.facebook.com/profile.php?id=61590642021249&locale=pl_PL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Bespoke Works">
                <FaFacebookF size={28} />
                </a>
            </article>
            <article>
                <a href="https://www.instagram.com/bespokeworkseu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Bespoke Works">
                <FaInstagram size={28} />
                </a>
            </article>
            </div>
            </section>
        </div>
    );
}

export default Kontakt