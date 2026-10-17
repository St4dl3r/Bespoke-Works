import styles from "./ServiceSection.module.css"


type ServiceSectionProps = {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}

function ServiceSection({
    title,
    description,
    image,
    reverse
}: ServiceSectionProps){
    return(
        <section className={`${styles.section} ${reverse ? styles.reversed : ""}`}>
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className={styles.image}>
                <img src={image} alt={title} className={styles.sectionImage}/>
            </div>
        </section>
    )
}

export default ServiceSection