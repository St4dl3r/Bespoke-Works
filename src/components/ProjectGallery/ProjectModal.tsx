import { useEffect } from "react";
import type { Project } from "../../data/projects";
import type { ProjectCategory } from "../../data/projects";
import styles from "./ProjectModal.module.css";

const categoryLabels: Record<ProjectCategory, string> = {
    druk3d: "Druk 3D",
    cad: "CAD i Skanowanie 3D",
    grawerowanie: "Grawerowanie laserowe",
    cnc: "Frezowanie CNC",
};

type ProjectModalProps = {
    project: Project;
    onClose: () => void;
};

function ProjectModal({ project, onClose}: ProjectModalProps) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
            className={styles.backdrop}
        >
            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title" 
                tabIndex={-1}
            >

                <div className={styles.modalHeader}>
                    <h2 id="project-modal-title">{project.title}</h2>

                    <button
                    type="button"
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Zamknij szczegóły realizacji"
                    >
                        ×
                    </button>
                </div>
                
                <div className={styles.modalContent}>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className={styles.modalImage}
                    />

                    <p className={styles.description}>
                        {project.description}
                    </p>
                

                <div className={styles.projectDetails}>
                    <div>
                        <span>Kategoria</span>
                        <p>{categoryLabels[project.category]}</p>
                    </div>

                    {project.materials.length > 0 && (
                        <div>
                            <span>Materiały</span>
                            <p>{project.materials.join(", ")}</p>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;