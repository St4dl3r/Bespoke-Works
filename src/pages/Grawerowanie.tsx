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
            description: "Nanoszenie oznaczeń identyfikacyjnych na elementy i detale"
        },

        {
            title: "Grawerowanie laserowe",
            description: "Wykonywanie napisów, symboli i grafik za pomocą lasera"
        },

        {
            title: "Personalizacja detali",
            description: "Indywidualne oznaczanie elementów zgodnie z wymaganiami projektu"
        }
    ]


    return(
        <div>
            <ServiceHero 
                title="Grawerowanie i znakowanie laserowe"
                description="Precyzyjne nanoszenie oznaczeń, napisów i grafik na elementy techniczne oraz użytkowe."
                image={heroImage}
            />
            <ServiceFeatures features={features} />
            <ServiceSection 
                title="Zastosowania grawerowania laserowego"
                description="Znakowanie elementów przemysłowych, nanoszenie napisów, symboli oraz oznaczeń identyfikacyjnych."
                image = {grawImage}
            />

            <SectionDivider />

            <ServiceSection 
                title="Znakowanie elementów technicznych"
                description="Indywidualne oznaczanie detali zgodnie z wymaganiami projektu i przeznaczeniem elementu."
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