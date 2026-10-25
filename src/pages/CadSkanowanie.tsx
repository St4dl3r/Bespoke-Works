import ServiceHero from "../components/ServiceHero/ServiceHero";
import ServiceFeatures from "../components/ServiceFeatures/ServiceFeatures";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import ProjectPreview from "../components/ProjectPreview/ProjectPreview";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import heroImage from "../assets/images/skanowanie.jpg"
import cadImage from "../assets/images/proj-cad.jpg"
import skanImage from "../assets/images/skan-cad.jpg"

function CadSkanowanie() {

    const features = [
        {
            title: "Projektowanie CAD",
            description: "Tworzenie modeli 3D na podstawie założeń i dokumentacji technicznej"
            
    },

    {
            title: "Skanowanie 3D",
            description: "Digitalizacja geometrii istniejących elementów"
            
    },

    {
            title: "Przygotowanie modeli",
            description: "Przygotowywanie modeli cyfrowych do dalszych prac projektowych lub produkcyjnych"
            
    }
]



    return(
        <div>
            <ServiceHero 
                title="Projektowanie CAD i Skanowanie 3D"
                description="Projektowanie modeli 3D oraz digitalizacja geometrii istniejących elementów."
                image={heroImage}
            />

            <ServiceFeatures features={features} />
            <ServiceSection 
                title="Zastosowania projektowania CAD"
                description="Projektowanie modeli i elementów technicznych na potrzeby prototypowania oraz produkcji."
                image={cadImage}
            />
            
            <SectionDivider />


            <ServiceSection 
                title="Skanowanie 3D"
                description="Pozyskiwanie danych o geometrii rzeczywistych obiektów do dalszego wykorzystania w projektowaniu."
                image={skanImage}
                reverse= {true}
            />

            <ProjectPreview category="druk3d"/>
            <ContactCTA 
                title="Potrzebujesz projektu CAD lub skanowania 3D?"
                description="Skontaktuj się z nami, aby omówić wymagania swojego projektu."
            />
        </div>
    );
}

export default CadSkanowanie;