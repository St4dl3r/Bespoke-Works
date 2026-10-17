import { Link } from "react-router-dom";

type ContactCTAProps = {
    title: string;
    description: string;
}

function ContactCTA({title, description}: ContactCTAProps){
    return(
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to="/kontakt">Zapytaj o wycenę</Link>
        </section>
    )
}

export default ContactCTA;