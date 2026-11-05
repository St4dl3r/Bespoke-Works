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
        description: "Szybkie prototypy i trwałe części użytkowe z materiałów inżynierskich. Idealne rozwiązanie do pojedynczych sztuk i małych serii.",
        path: "/druk-3d",
        image: drukImage
        },

        {
        title: "CAD i skanowanie 3D",
        description: "Projektujemy od zera albo odtwarzamy istniejące elementy na podstawie skanu 3D. Dzięki temu powstaje dokładny model, gotowy do produkcji. ",
        path: "/cad-skanowanie-3d",
        image: cadImage
        },

        {
        title: "Grawerowanie Laserowe",
        description: "Trwałe znakowanie i grawerowanie elementów z metalu, drewna, akrylu i skóry. Numery seryjne, logotypy, personalizacja.",
        path: "/grawerowanie-laserowe",
        image: grawImage
        },

        {
        title: "Frezowanie CNC",
        description: "Precyzyjna obróbka detali na centrum obróbczym Haas, od prototypu po małe serie. Powtarzalna dokładność i wysoka jakość wykonania.",
        path: "/frezowanie-cnc",
        image: cncImage
        }

    ]

    return(
        <div>
            <section className={styles.heroBackground}>
                <div className={styles.hero}>
                <span className={styles.heroLabel}>BESPOKE WORKS</span>

                <h1>Od projektu do gotowego elementu.</h1>
                <p>
                    Projektujemy, skanujemy, drukujemy, grawerujemy i frezujemy, a to wszystko w jednym miejscu. 
                    Pomagamy zamienić pomysł w precyzyjnie wykonany element, od pojedynczego prototypu po małe 
                    serie. 
                </p>

                <div className={styles.heroActions}>
                    <Link to="/kontakt" className={styles.primaryButton}>
                        Skontaktuj się z nami
                    </Link>

                    <Link to="/realizacje" className={styles.secondaryButton}>
                        Zobacz realizacje
                    </Link>

                </div>
                </div>
            </section>
            <div className={styles.servicesContainer}>
                {services.map((service, index) => (
                    <ServiceCard 
                        title={service.title}
                        description={service.description}
                        path={service.path}
                        key={service.path}
                        image={service.image}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );    
}

export default Home;