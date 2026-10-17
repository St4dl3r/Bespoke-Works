import ServiceHero from "../components/ServiceHero/ServiceHero";
import ServiceFeatures from "../components/ServiceFeatures/ServiceFeatures";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ProjectPreview from "../components/ProjectPreview/ProjectPreview";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import heroImage from "../assets/images/frez-hero.jpg"
import frez1Image from "../assets/images/cnc1.jpg"
import frez2Image from "../assets/images/cnc2.jpg"
import real1Image from "../assets/images/realizacje/cnc-real1.jpg"
import real2Image from "../assets/images/realizacje/cnc-real2.jpg"
import real3Image from "../assets/images/realizacje/cnc-real3.jpg"


function FrezowanieCNC() {

    const features = [
        {
            title: "Obróbka precyzyjna",
            description: "Wykonywanie elementów zgodnie z dokumentacją i wymaganiami projektu"

        },

        {
            title: "Prototypowanie CNC",
            description: "Przygotowywanie prototypów i pojedynczych elementów"

        },

        {
            title: "Produkcja małoseryjna",
            description: "Wytwarzanie niewielkich serii detali"

        }
    ]

    const projects = [
        {
            title: "Element techniczny CNC",
            description: "Przykładowy element wykonany metodą frezowania CNC",
            image: real1Image
        },

        {
            title: "Prototyp CNC",
            description: "Przykładowa część przygotowana na potrzeby prototypowania",
            image: real2Image
        },

        {
            title: "Produkcja małoseryjna",
            description: "Przykładowe detale wykonane w niewielkiej serii",
            image: real3Image
        }
    ]

    return(
        <div>
            <ServiceHero 
                title="Frezowanie CNC"
                description="Precyzyjna obróbka elementów na potrzeby prototypowania oraz produkcji jednostkowej i małoseryjnej."
                image={heroImage}
            />
            <ServiceFeatures features={features} />
            <ServiceSection 
                title="Zastosowania frezowania CNC"
                description="Wykonywanie elementów technicznych, prototypów oraz części na potrzeby produkcji jednostkowej i małoseryjnej."
                image= {frez1Image}
            />

            <ServiceSection 
                title="Proces obróbki CNC"
                description="Przygotowywanie i wykonywanie detali na podstawie dokumentacji technicznej oraz wymagań projektu."
                image= {frez2Image}
                reverse = {true}
            />

            <ProjectPreview projects={projects} />
            <ContactCTA 
                title="Potrzebujesz elementów wykonanych metodą CNC?"
                description="Skontaktuj się z nami, aby omówić szczegóły projektu i możliwości realizacji."
            />

        </div>
    );
}

export default FrezowanieCNC;