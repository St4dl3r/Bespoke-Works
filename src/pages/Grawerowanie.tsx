import ServiceHero from "../components/ServiceHero/ServiceHero";
import ServiceFeatures from "../components/ServiceFeatures/ServiceFeatures";
import SectionDivider from "../components/SectionDivider/SectionDivider";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ProjectPreview from "../components/ProjectPreview/ProjectPreview";
import ContactCTA from "../components/ContactCTA/ContactCTA";
import heroImage from "../assets/images/graw-hero.jpg"
import grawImage from "../assets/images/graw1.jpg"
import graw2Image from "../assets/images/graw2.jpg"



function Grawerowanie() {

    const features = [
        {
            title: "Znakowanie elementów",
            description: "Nanosimy numery seryjne, kody QR i DataMatrix oraz inne oznaczenia identyfikacyjne, które nie ścierają się w trakcie użytkowania."
        },

        {
            title: "Grawerowanie laserowe",
            description: "Wykonujemy napisy, symbole, logotypy i grafiki na metalu, drewnie, akrylu i skórze."
        },

        {
            title: "Personalizacja detali",
            description: "Oznaczamy elementy indywidualnie, zgodnie z Twoim projektem, wzorem i wymaganiami."
        }
    ]


    return(
        <div>
            <ServiceHero 
                title="Grawerowanie i znakowanie laserowe"
                description="Trwałe oznaczenia, napisy i grafiki na elementach technicznych i użytkowych. Grawerujemy 
                pojedyncze sztuki oraz małe serie."
                image={heroImage}
            />
            <ServiceFeatures features={features} />
            <ServiceSection 
                title="Zastosowania grawerowania laserowego"
                description="Grawerowanie sprawdza się przy oznaczaniu części przemysłowych, narzędzi i oprzyrządowania, ale 
                też przy personalizacji gadżetów, tabliczek i prezentów. Efekt jest trwały, estetyczny i powtarzalny."
                image = {grawImage}
            />

            <SectionDivider />

            <ServiceSection 
                title="Znakowanie elementów technicznych"
                description="Oznaczamy detale zgodnie z wymaganiami projektu i przeznaczeniem elementu: numerami 
                seryjnymi, kodami, logo lub opisami. Dzięki temu łatwiej zidentyfikujesz części i zachowasz porządek 
                w produkcji."
                image= {graw2Image}
                reverse= {true}
            />
            <ProjectPreview category="grawerowanie"/>
            <ContactCTA 
                title="Potrzebujesz znakowania lub grawerowania laserowego?"
                description="Skontaktuj się z nami, aby omówić szczegóły swojego projektu."
            />
        </div>
    );
}

export default Grawerowanie;