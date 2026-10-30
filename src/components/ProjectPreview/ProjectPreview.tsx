
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { projects } from "../../data/projects";
import type { ProjectCategory } from "../../data/projects";
import styles from "./ProjectPreview.module.css";

type ProjectPreviewProps = {
    category: ProjectCategory;
};

function ProjectPreview({ category }: ProjectPreviewProps) {
    const filteredProjects = projects.filter(
        (project) => project.category === category
    );

    const isCarousel = filteredProjects.length > 3;

    const displayProjects = isCarousel
        ? [...filteredProjects, ...filteredProjects, ...filteredProjects]
        : filteredProjects;

    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const query = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const update = () => setReduceMotion(query.matches);

        update();
        query.addEventListener("change", update);

        return () => query.removeEventListener("change", update);
    }, []);

    const [autoplay] = useState(() =>

        Autoplay({
            delay: 5000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
            playOnInit: false,
        })
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            active: isCarousel,
        },
        [autoplay]
    );

    useEffect(() => {
        if (!emblaApi) return;

        const plugin = emblaApi.plugins().autoplay;

        if (isCarousel && !reduceMotion) {
            plugin?.play();
        } else {
            plugin?.stop();
        }
    }, [emblaApi, isCarousel, reduceMotion]);

    return (
        <section className={styles.preview}>
            <h2>Przykładowe realizacje</h2>

            <div
                ref={emblaRef}
                className={isCarousel ? styles.carouselViewport : ""}
            >
                <div
                    className={`${styles.projectsGrid} ${
                        isCarousel ? styles.carouselTrack : ""
                    }`}
                >
                    {displayProjects.map((project, index) => (
                        <article
                            key={`${project.id}-${index}`}
                            className={styles.projectCard}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.projectImage}
                            />

                            <div className={styles.projectOverlay}>
                                <div className={styles.projectInfo}>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>

                                    {project.materials.length > 0 && (
                                        <div className={styles.materials}>
                                            <span>Materiały:</span>
                                            <p>
                                                {project.materials.join(", ")}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <h3 className={styles.projectTitle}>
                                {project.title}
                            </h3>
                        </article>
                    ))}
                </div>
            </div>

            {isCarousel && (
                <div className={styles.carouselControls}>
                    <button
                        type="button"
                        onClick={() => emblaApi?.scrollPrev()}
                        aria-label="Poprzednie realizacje"
                    >
                        &#8592;
                    </button>

                    <button
                        type="button"
                        onClick={() => emblaApi?.scrollNext()}
                        aria-label="Następne realizacje"
                    >
                        &#8594;
                    </button>
                </div>
            )}

            <Link
                to="/realizacje"
                className={styles.allProjectsLink}
            >
                Zobacz wszystkie realizacje
            </Link>
        </section>
    );
}

export default ProjectPreview;
