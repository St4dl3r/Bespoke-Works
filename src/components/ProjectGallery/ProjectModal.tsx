import { useEffect, useRef } from "react";
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

    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

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

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow  = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, []);


    useEffect(() => {
        const previousFocus = document.activeElement;

        closeButtonRef.current?.focus();

        const handleTab = (event: KeyboardEvent) => {
        if (event.key !== "Tab") return;

        const modal = modalRef.current;
        if (!modal) return;

        const focusableElements = Array.from(
            modal.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
        ).filter((element) => element.getClientRects().length > 0);

        if (focusableElements.length === 0) {
            event.preventDefault();
            modal.focus();
            return;
        }

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                } else if (!modal.contains(document.activeElement)) {
                    event.preventDefault();
                    firstElement.focus();
                }
            };

        document.addEventListener("keydown", handleTab);

        return () => {
            document.removeEventListener("keydown", handleTab);

            if (previousFocus instanceof HTMLElement) {
                previousFocus.focus();
            }
        };
    }, [])

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
                ref={modalRef}
                aria-modal="true"
                aria-labelledby="project-modal-title" 
                tabIndex={-1}
            >

                <div className={styles.modalHeader}>
                    <h2 id="project-modal-title">{project.title}</h2>

                    <button
                    type="button"
                    className={styles.closeButton}
                    ref={closeButtonRef}
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