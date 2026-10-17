import ServiceHero from "../components/ServiceHero/ServiceHero";
import ServiceFeatures from "../components/ServiceFeatures/ServiceFeatures";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ProjectPreview from "../components/ProjectPreview/ProjectPreview";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import heroImage from "../assets/images/skanowanie.jpg"
import cadImage from "../assets/images/proj-cad.jpg"
import skanImage from "../assets/images/skan-cad.jpg"
import cadProjectImage from "../assets/images/realizacje/cad-real1.jpg"
import cadProjectImage2 from "../assets/images/realizacje/cad-real2.jpg"
import cadProjectImage3 from "../assets/images/realizacje/cad-real3.jpg"

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

const projects = [
    {
        title: "Model CAD elementu technicznego",
        description: "Przykładowy model 3D części mechanicznej",
        image:cadProjectImage
    },
    
    {
        title: "Digitalizacja elementu",
        description: "Przykładowy proces odwzorowania geometrii istniejącego obiektu",
        image:cadProjectImage2
    },

    {
        title: "Model do prototypowania",
        description: "Przykładowe przygotowanie modelu do wykonania prototypu",
        image:cadProjectImage3
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

            <ServiceSection 
                title="Skanowanie 3D"
                description="Pozyskiwanie danych o geometrii rzeczywistych obiektów do dalszego wykorzystania w projektowaniu."
                image={skanImage}
                reverse= {true}
            />

            <ProjectPreview projects={projects}/>
            <ContactCTA 
                title="Potrzebujesz projektu CAD lub skanowania 3D?"
                description="Skontaktuj się z nami, aby omówić wymagania swojego projektu."
            />
        </div>
    );
}

export default CadSkanowanie;