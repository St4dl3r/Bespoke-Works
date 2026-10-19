import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import styles from "./Home.module.css";
import drukImage from "../assets/images/zdjecie1.jpg"
import cadImage from "../assets/images/skanowanie.jpg"
import grawImage from "../assets/images/graw-hero.jpg"
import cncImage from "../assets/images/frez-hero.jpg"

function Home() {

    const services = [
        {
        title: "Druk 3D FDM",
        description: "Prototypowanie i produkcja elementów FDM",
        path: "/druk-3d",
        image: drukImage
        },

        {
        title: "CAD / Skanowanie 3D",
        description: "Projektowanie i odwzorowywanie elementów",
        path: "/cad-skanowanie-3d",
        image: cadImage
        },

        {
        title: "Grawerowanie Laserowe",
        description: "Znakowanie i grawerowanie elementów",
        path: "/grawerowanie-laserowe",
        image: grawImage
        },

        {
        title: "Frezowanie CNC",
        description: "Obróbka CNC i produkcja małoseryjna",
        path: "/frezowanie-cnc",
        image: cncImage
        }

    ]

    return(
        <div>
            <section className={styles.hero}>
                <span className={styles.heroLabel}>BESPOKE WORKS</span>

                <h1>Od projektu do gotowego elementu.</h1>
                <p>
                    Projektowanie CAD, skanowanie 3D, druk FDM,
                    grawerowanie laserowe i frezowanie CNC.
                    Rozwiązania dla prototypowania i produkcji małoseryjnej.
                </p>

                <div className={styles.heroActions}>
                    <Link to="/kontakt" className={styles.primaryButton}>
                        Skontaktuj się z nami
                    </Link>

                    <Link to="/realizacje" className={styles.secondaryButton}>
                        Zobacz realizacje
                    </Link>

                </div>
            </section>
            <div className={styles.servicesContainer}>
                {services.map((service) => (
                    <ServiceCard 
                        title={service.title}
                        description={service.description}
                        path={service.path}
                        key={service.path}
                        image={service.image}
                    />
                ))}
            </div>
        </div>
    );    
}

export default Home;