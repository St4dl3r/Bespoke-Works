import { useEffect, useRef, useState } from "react";
import styles from "./ServiceFeatures.module.css"

type Feature = {
    title: string;
    description: string;
}

type ServiceFeaturesProps = {
    features: Feature[];
}

function ServiceFeatures({features}: ServiceFeaturesProps){

    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if(!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return(
        <section 
            ref={sectionRef}
            className={`${styles.features} ${isVisible ? styles.visible : ""}`}
        >
            <h2 className={styles.sectionTitle}>Możliwości technologiczne</h2>
            <div className={styles.featuresGrid}>
                {features.map((feature) => (
                    <article key={feature.title} className={styles.featureCard}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ServiceFeatures