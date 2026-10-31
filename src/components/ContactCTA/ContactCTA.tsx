import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ContactCTA.module.css";

type ContactCTAProps = {
    title: string;
    description: string;
}

function ContactCTA({title, description}: ContactCTAProps){
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
                threshold: 0.25,
            }
        );
        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return(
        <section
            ref={sectionRef}
            className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}
        >
            <div className={styles.cta}>
                <h2>{title}</h2>

                <p>{description}</p>

            <Link to="/kontakt" className={styles.ctaButton}>
                Zapytaj o wycenę
            </Link>
            </div>
        </section>
    );
}

export default ContactCTA;