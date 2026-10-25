import ServiceHero from "../components/ServiceHero/ServiceHero";
import ServiceFeatures from "../components/ServiceFeatures/ServiceFeatures";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import ProjectPreview from "../components/ProjectPreview/ProjectPreview";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import heroImage from "../assets/images/frez-hero.jpg"
import frez1Image from "../assets/images/cnc1.jpg"
import frez2Image from "../assets/images/cnc2.jpg"


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

            <SectionDivider />

            <ServiceSection 
                title="Proces obróbki CNC"
                description="Przygotowywanie i wykonywanie detali na podstawie dokumentacji technicznej oraz wymagań projektu."
                image= {frez2Image}
                reverse = {true}
            />

            <ProjectPreview category="cnc"/>
            <ContactCTA 
                title="Potrzebujesz elementów wykonanych metodą CNC?"
                description="Skontaktuj się z nami, aby omówić szczegóły projektu i możliwości realizacji."
            />

        </div>
    );
}

export default FrezowanieCNC;