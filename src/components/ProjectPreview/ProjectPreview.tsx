
import { useEffect, useRef ,useState } from "react";
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

    const [activeTouchProject, setActiveTouchProject] = useState<string | null>(null);

    const touchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);


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


    const handleProjectTouch = (projectKey: string) => {
        if(touchTimerRef.current) {
            clearTimeout(touchTimerRef.current);
        }

        setActiveTouchProject(projectKey);

        emblaApi?.plugins().autoplay?.stop();

        touchTimerRef.current = setTimeout(() => {
            setActiveTouchProject(null);
            touchTimerRef.current = null;

            if (isCarousel && !reduceMotion) {
                emblaApi?.plugins().autoplay?.play();
            }
        }, 5000);
    };


    useEffect(() =>{
        return () => {
            if (touchTimerRef.current){
                clearTimeout(touchTimerRef.current);
            }
        };
    }, []);
    
    return (
        <section className={styles.preview}>
        <div className={styles.previewHeader}>
            <h2>Przykładowe realizacje</h2>

            {isCarousel && (
                <div className={styles.carouselControls}>
                    <button
                        type="button"
                        onClick={() => emblaApi?.scrollPrev()}
                        aria-label="Poprzednie realizacje"
                    >
                        <span aria-hidden="true">🠘</span>
                    </button>

                    <button
                    type="button"
                    onClick={() => emblaApi?.scrollNext()}
                    aria-label="Następne realizacje"
                    >
                        <span aria-hidden="true">🠚</span>
                    </button>
                </div>
            )}

        </div>
            

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
                            className={`${styles.projectCard} ${
                                activeTouchProject ===`${project.id}-${index}`
                                ? styles.touchActive
                                : ""
                            }`}

                            onTouchStart={() =>
                                handleProjectTouch(`${project.id}-${index}`)
                            }
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
