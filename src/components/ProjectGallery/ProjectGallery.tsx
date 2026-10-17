import { useState } from "react";
import { projects } from "../../data/projects";
import styles from "./ProjectGallery.module.css"

function ProjectGallery() {

    const [activeCategory, setActiveCategory] = useState("all");

    const categories = [
        { label: "Wszystkie", value: "all"},
        { label: "Druk 3D", value: "druk3d"},
        { label: "CAD i Skanowanie", value: "cad"},
        { label: "Grawerowanie", value: "grawerowanie"},
        { label: "Frezowanie CNC", value: "cnc"}

    ]

    const filteredProjects = projects.filter((project) => {
        return activeCategory === "all" || project.category === activeCategory;
    });

    return(
        <section className={styles.gallery}>
            <h2>Nasze realizacje</h2>
            <div className={styles.filters}>
            {categories.map((category) => (
            <button
            className={`${styles.filterButton} ${
                activeCategory === category.value ? styles.active : ""
            }`}
            key={category.value}
            onClick={() => setActiveCategory(category.value)}>
                {category.label}
            </button>
            ))}
            </div>
            <div className={styles.galleryGrid}>
                {filteredProjects.map((project) => (
                    <article key={project.id} className={styles.projectCard}>
                        
                        <img src={project.image} alt={project.title} className={styles.projectImage}/>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                    </article>
                ))}
            </div>
        </section>
    );
}

export default ProjectGallery;