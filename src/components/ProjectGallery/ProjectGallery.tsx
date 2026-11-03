import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectGallery.module.css";

function ProjectGallery() {

    const [activeCategory, setActiveCategory] = useState("all");
    const [isChanging, setIsChanging] = useState(false);

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

    const handleCategoryChange = (category: string) => {
        if (category === activeCategory || isChanging) return;

        setIsChanging(true);

        setTimeout(() => {
            setActiveCategory(category);
            setIsChanging(false);
        }, 250);
    };

    
return (
    <section className={styles.gallery}>
        <h2>Nasze realizacje</h2>

        <div className={styles.filters}>
            {categories.map((category) => (
                <button
                    type="button"
                    key={category.value}
                    className={`${styles.filterButton} ${
                        activeCategory === category.value
                            ? styles.active
                            : ""
                    }`}
                    aria-pressed={activeCategory === category.value}
                    onClick={() => handleCategoryChange(category.value)}
                >
                    {category.label}
                </button>
            ))}
        </div>

        <div
            className={`${styles.galleryGrid} ${
                isChanging ? styles.changing : ""
            }`}
        >
            {filteredProjects.map((project, index) => (
                <ProjectCard
                    key={`${activeCategory}-${project.id}`}
                    project={project}
                    index={index}
                    categoryLabel={
                        categories.find(
                            (category) =>
                                category.value === project.category
                        )?.label ?? ""
                    }
                />
            ))}
        </div>
    </section>
);

}

export default ProjectGallery;