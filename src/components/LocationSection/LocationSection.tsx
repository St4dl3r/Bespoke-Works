import { useEffect, useRef, useState } from "react";
import { company } from "../../data/company";
import styles from "./LocationSection.module.css";

function LocationSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const mapQuery = encodeURIComponent(
        `${company.address.street}, ${company.address.postalCode} ${company.address.city}, Polska`
    );

    useEffect(() => {
        const section = sectionRef.current;

        if(!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.7,
            }
        );
        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`${styles.locationSection} ${
                isVisible ? styles.visible : ""
            }`}
        >
            <div className={styles.heading}>
                <span>LOKALIZACJA</span>
                <h2>Gdzie możesz nas znaleźć?</h2>
            </div>

            
            <div className={styles.locationLayout}>
            <div className={styles.locationInfo}>
                <div className={styles.infoBlock}>
                    <h3>Adres</h3>
                    <p>{company.address.street}</p>
                    <p>
                        {company.address.postalCode} {company.address.city}
                    </p>
                </div>

                <div className={styles.infoBlock}>
                    <h3>Godziny otwarcia</h3>
                    <p>Poniedziałek – piątek</p>
                    <p>{company.openingHours.weekdays}</p>
                </div>

                    <a
                        href={company.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.directionsButton}
                    >
                        Wyznacz trasę ↗
                    </a>
                </div>

                <div className={styles.mapContainer}>
                    <iframe
                        title="Mapa lokalizacji Bespoke Works"
                        src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </div>

        </section>
    );
}

export default LocationSection;