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
            description: "Wykonujemy prototypy i modele testowe, na których sprawdzisz kształt, dopasowanie i działanie elementu, zanim zainwestujesz w produkcję."
        },

        {
            title: "Produkcja jednostkowa",
            description: "Drukujemy pojedyncze elementy na zamówienie: części zamienne, uchwyty, obudowy i projekty indywidualne."
        },

        {
            title: "Produkcja małoseryjna",
            description: "Realizujemy niewielkie serie powtarzalnych elementów, bez kosztów form i oprzyrządowania."
        }
    ]


    return (
        <div>
            <ServiceHero 
            title="Druk 3D FDM"
            description="Szybkie prototypy i trwałe części użytkowe wykonane w technologii FDM. Drukujemy pojedyncze sztuki oraz małe serie."
            image={heroImage}
            />

            <ServiceFeatures features={features}
            />
            <ServiceSection 
            title="Zastosowania Druku 3D"
            description="Druk FDM sprawdza się wszędzie tam, gdzie liczy się szybkość i elastyczność. Wykorzystujemy go do prototypów, uchwytów montażowych, obudów, 
            części zamiennych, pomocy warsztatowych i modeli dydaktycznych."
            image={zastosowaniaImage}
            />

            <SectionDivider />

            <ServiceSection
            title="Materiały do druku 3D"
            description="Dobieramy materiał do zadania, czyli do wymaganej wytrzymałości, temperatury pracy i wyglądu 
            elementu. Drukujemy m.in. z PLA, PETG, ABS, ASA, PA (także z włóknem węglowym), PC oraz 
            elastycznych TPU i TPE. Na zapytanie wykonujemy też elementy z tworzyw wysokotemperaturowych: 
            PEEK, PEKK, PPS, PSU i PEI (Ultem). Pomożemy wybrać materiał, który najlepiej sprawdzi się w 
            Twoim projekcie."
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