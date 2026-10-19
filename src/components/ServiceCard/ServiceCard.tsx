import { Link } from "react-router-dom"
import styles from "./ServiceCard.module.css"
type ServiceCardProps = {
    title: string;
    description: string;
    path: string;
    image: string;
}

function ServiceCard({ title, description, path, image}: ServiceCardProps){
    return(
        <Link to={path} className={styles.card}>
            <div 
                className={styles.cardBackground}
                style={{backgroundImage: `url(${image})`}}
            />
            <h2>{title}</h2>
            <p>{description}</p>
        </Link>
    )
}

export default ServiceCard;