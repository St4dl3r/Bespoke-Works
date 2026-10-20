import styles from "./ServiceHero.module.css"

type ServiceHeroProps = {
    title: string;
    description: string;
    image: string;
}

function ServiceHero({title, description,image}: ServiceHeroProps){

return (
    <section className={styles.hero}>
        <div className={styles.heroContent}>
            <span className={styles.heroLabel}>
                TECHNOLOGIE BESPOKE WORKS
            </span>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <div className={styles.heroImage}>
            <img src={image} alt={title} className={styles.image}/>
        </div>
    </section>
);
}

export default ServiceHero;