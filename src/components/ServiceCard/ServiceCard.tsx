import { Link } from "react-router-dom"
import styles from "./ServiceCard.module.css"
type ServiceCardProps = {
    title: string;
    description: string;
    path: string;
}

function ServiceCard({ title, description, path}: ServiceCardProps){
    return(
        <Link to={path} className={styles.card}>
            <h2>{title}</h2>
            <p>{description}</p>
        </Link>
    )
}

export default ServiceCard;