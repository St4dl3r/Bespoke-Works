import ProjectGallery from "../components/ProjectGallery/ProjectGallery";
import styles from "./Realizacje.module.css";
function Realizacje(){
    return (
        <div className={styles.realizacjeBackground}>
            <div>
            <ProjectGallery />
            </div>
        </div>
    );
}

export default Realizacje;