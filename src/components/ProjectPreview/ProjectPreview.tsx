import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import type { ProjectCategory } from "../../data/projects"
import styles from "./ProjectPreview.module.css"


type ProjectPreviewProps = {
    category: ProjectCategory;

};

function ProjectPreview({ category }: ProjectPreviewProps) {
    const filteredProjects = projects.filter(
        (project) => project.category === category
    );


    return(
        <section className={styles.preview}>
            <h2>Przykładowe realizacje</h2>
            
            <div className={styles.projectsGrid}>
                {filteredProjects.map((project) => (
                    <article 
                    key={project.id}
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
            <Link 
                to="/realizacje" 
                className= {styles.allProjectsLink}
                >
                    Zobacz wszystkie realizacje
            </Link>
        </section>
    );
}

export default ProjectPreview;