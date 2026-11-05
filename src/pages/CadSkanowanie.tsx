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
            description: "Tworzymy modele 3D na podstawie Twoich założeń, szkiców, wymiarów lub dokumentacji technicznej."
            
    },

    {
            title: "Skanowanie 3D",
            description: "Bezdotykowo i dokładnie odwzorowujemy geometrię istniejących elementów, także tych bez dokumentacji."
            
    },

    {
            title: "Przygotowanie modeli",
            description: "Przygotowujemy modele cyfrowe do dalszych prac: druku 3D, frezowania CNC lub innych procesów produkcyjnych."
            
    }
]



    return(
        <div>
            <ServiceHero 
                title="Projektowanie CAD i Skanowanie 3D"
                description="Projektujemy modele 3D od zera i cyfrowo odwzorowujemy istniejące elementy. Dzięki temu masz 
                okładną podstawę do prototypu, produkcji lub modyfikacji."
                image={heroImage}
            />

            <ServiceFeatures features={features} />
            <ServiceSection 
                title="Zastosowania projektowania CAD"
                description="Projektujemy elementy techniczne, uchwyty, obudowy i części zamienne, uwzględniając funkcję, 
                wytrzymałość i wybraną technologię wykonania. Gotowy model możemy od razu wykonać w naszej 
                pracowni."
                image={cadImage}
            />
            
            <SectionDivider />


            <ServiceSection 
                title="Skanowanie 3D"
                description="Skanowanie pozwala odtworzyć kształt rzeczywistego obiektu bez ręcznych pomiarów. 
                Wykorzystujemy je do reverse engineeringu, kopiowania zużytych lub niedostępnych części oraz 
                dopasowywania nowych elementów do już istniejących."
                image={skanImage}
                reverse= {true}
            />

            <ProjectPreview category="cad"/>
            <ContactCTA 
                title="Potrzebujesz projektu CAD lub skanowania 3D?"
                description="Skontaktuj się z nami, aby omówić wymagania swojego projektu."
            />
        </div>
    );
}

export default CadSkanowanie;