import { useEffect, useRef, useState } from "react";
import styles from "./Applications.module.css";
import industryIcon from "../../assets/icons/applications/industry.png"
import automotiveIcon from "../../assets/icons/applications/automotive.png"
import prototypeIcon from "../../assets/icons/applications/prototype.png"
import hobbyIcon from "../../assets/icons/applications/hobby.png"
import educationIcon from "../../assets/icons/applications/education.png"

type Application = {
    title: string;
    icon: string
};

const applications: Application[] = [
    {title: "Przemysł", icon: industryIcon },
    {title: "Automotive", icon: automotiveIcon },
    {title: "Prototypy", icon: prototypeIcon },
    {title: "Hobby & DIY", icon: hobbyIcon },
    {title: "Edukacja", icon: educationIcon},
];

function Applications() {

    const sectionRef = useRef<HTMLElement>(null);
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const [headingVisible, setHeadingVisible] = useState(false);
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const heading = section.querySelector(`.${styles.heading}`);
    const cards = section.querySelectorAll(`.${styles.applicationCard}`);
    const description = section.querySelector(`.${styles.description}`);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                if (entry.target === heading) {
                    setHeadingVisible(true);
                } else if (entry.target === description) {
                    setDescriptionVisible(true);
                } else {
                    const index = Array.from(cards).indexOf(entry.target);

                    if (index !== -1) {
                        setVisibleCards((prev) =>
                            prev.includes(index) ? prev : [...prev, index]
                        );
                    }
                }

                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.7,
        }
    );

        if (heading) observer.observe(heading);
        if (description) observer.observe(description);
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.applications}>
            <div className={`${styles.heading} ${
                headingVisible ? styles.headingVisible : ""
            }`}
            >
                <span className={styles.label}>ZASTOSOWANIA</span>
                <h2>Dla kogo pracujemy?</h2>
            </div>

            <div className={styles.applicationsGrid}>
                {applications.map((application, index) => (
                    <article
                        key={application.title}
                        className={`${styles.applicationCard} ${
                            visibleCards.includes(index) ? styles.cardVisible : ""
                        }`}
                    >
                        <div className={styles.iconPlaceholder}>
                            <img src={application.icon} alt=""/>
                        </div>

                        <h3>{application.title}</h3>
                    </article>
                ))}
            </div>

                <p 
                    className={`${styles.description} ${
                        descriptionVisible ? styles.descriptionVisible : ""
                    }`}
                    >
                    Od pojedynczego prototypu po elementy do produkcji -
                    dobieramy technologię do konkretnego zastosowania.
                </p>

        </section>
    );
}

export default Applications;