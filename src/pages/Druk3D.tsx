import ServiceHero from "../components/ServiceHero/ServiceHero";
import ServiceFeatures from "../components/ServiceFeatures/ServiceFeatures";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import ProjectPreview from "../components/ProjectPreview/ProjectPreview";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import heroImage from "../assets/images/zdjecie1.jpg"
import zastosowaniaImage from "../assets/images/zdjecie2.jpg"
import materialyImage from "../assets/images/zdjecie3.jpg"


function Druk3D() {

    const features = [
        {
            title: "Prototypowanie",
            description: "Przygotowywanie prototypów i modeli testowych"
        },

        {
            title: "Produkcja jednostkowa",
            description: "Wykonywanie pojedynczych elementów"
        },

        {
            title: "Produkcja małoseryjna",
            description: "Wytwarzanie niewielkich serii elementów"
        }
    ]


    return (
        <div>
            <ServiceHero 
            title="Druk 3D FDM"
            description="Prototypowanie, produkcja jednostkowa i małoseryjna w technologii FDM."
            image={heroImage}
            />

            <ServiceFeatures features={features}
            />
            <ServiceSection 
            title="Zastosowania Druku 3D"
            description="Opis zastosowan druku 3D"
            image={zastosowaniaImage}
            />

            <SectionDivider />

            <ServiceSection
            title="Materiały do druku 3D"
            description="Informacje o dostępnych materiałach — do uzupełnienia"
            image={materialyImage}
            reverse = {true}
            />

            <ProjectPreview category="druk3d"/>
            <ContactCTA 
                title="Masz projekt do realizacji?"
                description="Skontaktuj się z nami i omów szczegóły swojego projektu."
            />
        </div>
    );
}

export default Druk3D;