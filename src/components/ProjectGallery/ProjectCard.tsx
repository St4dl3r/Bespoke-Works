import { useEffect, useRef, useState } from "react";
import type {Project} from "../../data/projects";
import styles from "./ProjectGallery.module.css"

type ProjectCardProps = {
    project: Project;
    index: number;
    categoryLabel: string;
    onSelect: () => void;
};

function ProjectCard({
    project,
    index,
    categoryLabel,
    onSelect,
}: ProjectCardProps) {

     const cardRef = useRef<HTMLElement>(null);
     const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const card = cardRef.current;

        if (!card) return;

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

        observer.observe(card);

        return () => observer.disconnect();
    }, []);

    return (
        <article
            ref={cardRef}
            className={`${styles.projectCard} ${
                index % 4 === 0 ? styles.featuredCard : ""
            } ${isVisible ? styles.visible : ""}`}
        >
        <img 
            src={project.image} 
            alt={project.title}
            className={styles.projectImage}
        loading="lazy" 
        />

        <span 
            className={styles.imageCurtain}
            aria-hidden="true"
        />

        <div className={styles.projectOverlay}>
            <div className={styles.projectInfo}>
                <span className={styles.projectCategory}>
                    {categoryLabel}
                </span>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
            </div>
        </div>

            <button 
                type="button"
                className={styles.projectOpenButton}
                onClick={() => {
                    console.log("kliknieto projekt:", project.title);
                    onSelect();
                }}
                aria-label={`Zobacz szczegóły realizacji: ${project.title}`}
            />       

        </article>
    );
}

export default ProjectCard;