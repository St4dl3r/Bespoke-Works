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
                        <svg
                            className={styles.animatedBorder}
                            viewBox=" 0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <rect 
                                x="2"
                                y="2"
                                width="96"
                                height="96"
                                rx="5"
                                ry="5"
                                pathLength="100"
                            />
                        </svg>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ServiceFeatures