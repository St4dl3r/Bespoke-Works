import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import ProcessTimeLine from "../components/ProcessTimeLine/ProcessTimeLine";
import styles from "./Kontakt.module.css";

function Kontakt(){

    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                },
                {
                    threshold: 0.2,
                }
            );

            observer.observe(section);

            return () => observer.disconnect();
}, []);

    return(
    <div className={styles.contactBackground}>
        <div className={styles.contactPage}>
            <section 
                ref={sectionRef}
                className={`${styles.contactLayout} ${
                    isVisible ? styles.visible : ""
                }`}
            >
                <div className={styles.contactIntro}>
                    <h1>Porozmawiajmy o Twoim projekcie.</h1>
            
                    <p> 
                        Opisz nam, co chcesz wykonać, a omówimy
                        możliwości realizacji.
                    </p>

                    <a 
                        href="mailto:bespokeworkseu@gmail.com"
                        className={styles.contactButton}
                    >
                        Napisz do nas
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>  
            <div className={styles.contactPanel}>
                <a 
                    href="tel:+48730292461"
                    className={styles.contactRow}
                >
                    <div>
                        <span>Telefon</span>
                        <strong>730 292 461</strong>
                    </div>

                    <span className={styles.rowArrow} aria-hidden="true">
                        ↗
                    </span>
                </a>

                <a 
                    href="mailto:bespokeworkseu@gmail.com"
                    className={styles.contactRow}
                >
                    <div>
                        <span>E-mail</span>
                        <strong>bespokeworkseu@gmail.com</strong>
                    </div>

                    <span className={styles.rowArrow} aria-hidden="true">
                        ↗
                    </span>
                </a>
            
            <div className={styles.socialSection}>
                <span>Media społecznościowe</span>

                <div className={styles.socialLinks}>
                    <a 
                        href="https://www.instagram.com/bespokeworkseu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram Bespoke Works"
                    >
                        <FaInstagram size={22}/>
                    </a>

                    <a 
                        href="https://www.facebook.com/profile.php?id=61590642021249&locale=pl_PL"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook Bespoke Works"
                    >
                        <FaFacebookF size={22} />
                    </a>
                </div>
            </div>
            </div>
            </section>
            <ProcessTimeLine />
        </div>
        </div>
    );
}

export default Kontakt