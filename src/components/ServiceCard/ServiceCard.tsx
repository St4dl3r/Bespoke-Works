import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import styles from "./ServiceCard.module.css"
type ServiceCardProps = {
    title: string;
    description: string;
    path: string;
    image: string;
    index: number;
}

function ServiceCard({ title, description, path, image, index}: ServiceCardProps){

    const cardRef = useRef<HTMLAnchorElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const card = cardRef.current;

        if(!card) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.7,
            }
        );

        observer.observe(card);

        return () => observer.disconnect();

    }, []);

    return(
        <Link 
            ref={cardRef}
            to={path} 
            className={`
                ${styles.card}
                ${index % 2 === 0 ? styles.fromLeft : styles.fromRight}
                ${isVisible ? styles.visible : ""}
            `}
            >
            <div 
                className={styles.cardBackground}
                style={{backgroundImage: `url(${image})`}}
            />
            <h2>{title}</h2>
            <p>{description}</p>
        </Link>
    )
}

export default ServiceCard;