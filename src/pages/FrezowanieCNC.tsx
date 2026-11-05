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
            description: "Wykonujemy elementy zgodnie z rysunkiem technicznym, modelem 3D i wymaganiami projektu, z zachowaniem tolerancji."

        },

        {
            title: "Prototypowanie CNC",
            description: "Przygotowujemy prototypy i pojedyncze elementy, które możesz przetestować w docelowym materiale."

        },

        {
            title: "Produkcja małoseryjna",
            description: "Realizujemy niewielkie serie detali, a każda sztuka ma tę samą jakość i wymiary."

        }
    ]

    return(
        <div>
            <ServiceHero 
                title="Frezowanie CNC"
                description="Precyzyjna obróbka elementów na centrum obróbczym Haas, od prototypów po małe serie. 
                Wykonujemy detale zgodnie z dokumentacją, z zachowaniem dokładności i powtarzalności."
                image={heroImage}
            />
            <ServiceFeatures features={features} />
            <ServiceSection 
                title="Zastosowania frezowania CNC"
                description="Frezujemy elementy techniczne, uchwyty, oprzyrządowanie, obudowy i części zamienne. To dobre 
                rozwiązanie tam, gdzie potrzebna jest wytrzymałość metalu i wysoka dokładność wykonania. "
                image= {frez1Image}
            />

            <SectionDivider />

            <ServiceSection 
                title="Proces obróbki CNC"
                description="Zaczynamy od analizy dokumentacji lub modelu 3D, następnie przygotowujemy program obróbki i 
                wykonujemy detal. Na koniec kontrolujemy wymiary i jakość wykonania. Jeśli nie masz jeszcze 
                dokumentacji, przygotujemy ją za Ciebie."
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