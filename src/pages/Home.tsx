import ServiceCard from "../components/ServiceCard/ServiceCard";
import styles from "./Home.module.css";

function Home() {

    const services = [
        {
        title: "Druk 3D FDM",
        description: "Prototypowanie i produkcja elementów FDM",
        path: "/druk-3d",
        },

        {
        title: "CAD / Skanowanie 3D",
        description: "Projektowanie i odwzorowywanie elementów",
        path: "/cad-skanowanie-3d",
        },

        {
        title: "Grawerowanie Laserowe",
        description: "Znakowanie i grawerowanie elementów",
        path: "/grawerowanie-laserowe",
        },

        {
        title: "Frezowanie CNC",
        description: "Obróbka CNC i produkcja małoseryjna",
        path: "/frezowanie-cnc",
        }

    ]

    return(
        <div>
            <h1>Bespoke Works</h1>
            <p>Firma zajmuje się frezowaniem, ale również drukiem 3D, projektowaniem CAD, skanowaniem 3D i grawerowaniem laserowym.</p>
            <div className={styles.servicesContainer}>
                {services.map((service) => (
                    <ServiceCard 
                        title={service.title}
                        description={service.description}
                        path={service.path}
                        key={service.path}
                    />
                ))}
            </div>
        </div>
    );    
}

export default Home;