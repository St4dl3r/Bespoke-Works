import { Link } from "react-router-dom";
import styles from "./ProjectPreview.module.css"

type Project = {
    title: string;
    description: string;
    image: string;
}

type ProjectPreviewProps = {
    projects: Project[];
}

function ProjectPreview({projects}: ProjectPreviewProps){
    return(
        <section className={styles.preview}>
            <h2>Przykładowe realizacje</h2>
            <div className={styles.projectsGrid}>
                {projects.map((project) =>(
                    <article key={project.title} className={styles.projectCard}>
                        <img src={project.image} alt={project.title} className={styles.projectImage}/>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </article>
                ))}
            </div>
            <Link to="/realizacje" className= {styles.allProjectsLink}>Zobacz wszystkie realizacje</Link>
        </section>
    )
}

export default ProjectPreview;