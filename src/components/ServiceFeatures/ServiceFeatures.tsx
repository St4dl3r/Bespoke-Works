import styles from "./ServiceFeatures.module.css"

type Feature = {
    title: string;
    description: string;
}

type ServiceFeaturesProps = {
    features: Feature[];
}

function ServiceFeatures({features}: ServiceFeaturesProps){
    
    return(
        <section className={styles.features}>
            <h2>Możliwości technologiczne</h2>
            <div className={styles.featuresGrid}>
                {features.map((feature) => (
                    <article key={feature.title} className={styles.featureCard}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ServiceFeatures