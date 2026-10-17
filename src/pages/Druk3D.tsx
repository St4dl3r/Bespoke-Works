import ServiceHero from "../components/ServiceHero/ServiceHero";
import ServiceFeatures from "../components/ServiceFeatures/ServiceFeatures";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ProjectPreview from "../components/ProjectPreview/ProjectPreview";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import heroImage from "../assets/images/zdjecie1.jpg"
import zastosowaniaImage from "../assets/images/zdjecie2.jpg"
import materialyImage from "../assets/images/zdjecie3.jpg"
import prototypImage from "../assets/images/realizacje/real1.jpg"
import prototypImage2 from "../assets/images/realizacje/real2.jpg"
import prototypImage3 from "../assets/images/realizacje/real3.jpg"

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

    const projects = [
        {
            title: "Prototyp funkcjonalny",
            description: "Przykładowy model wykonany w technologii druku 3D",
            image: prototypImage
        },

        {
            title: "Elementy techniczne",
            description: "Przykładowe części techniczne wykonane metodą druku 3D",
            image: prototypImage2
        },

        {
            title: "Model turbiny",
            description: "Przykład złożonego modelu wydrukowanego w 3D",
            image: prototypImage3
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

            <ServiceSection
            title="Materiały do druku 3D"
            description="Informacje o dostępnych materiałach — do uzupełnienia"
            image={materialyImage}
            reverse = {true}
            />

            <ProjectPreview projects={projects}/>
            <ContactCTA 
                title="Masz projekt do realizacji?"
                description="Skontaktuj się z nami i omów szczegóły swojego projektu."
            />
        </div>
    );
}

export default Druk3D;