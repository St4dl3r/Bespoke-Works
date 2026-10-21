import { useEffect, useRef, useState } from "react";
import styles from "./ServiceSection.module.css"


type ServiceSectionProps = {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}

function ServiceSection({
    title,
    description,
    image,
    reverse
}: ServiceSectionProps){

    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting){
                    setIsVisible(true);
                    observer.unobserve(entry.target)
                }
            },
            {
            threshold: 0,
            rootMargin: "0px 0px 100px 0px",
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return(
        <section ref={sectionRef}className={`${styles.section} ${reverse ? styles.reversed : ""} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className={styles.image}>
                <img src={image} alt={title} className={styles.sectionImage}/>
            </div>
        </section>
    )
}

export default ServiceSection