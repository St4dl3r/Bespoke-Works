import real1Image from "../assets/images/realizacje/real1.jpg"
import real2Image from "../assets/images/realizacje/cad-real1.jpg"
import real3Image from "../assets/images/realizacje/graw-real1.jpg"
import real4Image from "../assets/images/realizacje/cnc-real1.jpg"

export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
}

export const projects: Project[] = [
    
{
        id: 1,
        title: "Prototyp Funkcjonalny",
        description: "Przykładowy model wykonany w technologii druku 3D",
        image: real1Image,
        category: "druk3d"
},


{
    id: 2,
    title: "Model CAD elementu technicznego",
    description: "Przykładowy model 3D części mechanicznej",
    image: real2Image,
    category: "cad"
},



{    
    id: 3,
    title: "Oznaczenia techniczne",
    description: "Przykładowe znakowanie identyfikacyjne elementu metalowego",
    image: real3Image,
    category: "grawerowanie"
},



{    
    id: 4,
    title: "Element techniczny CNC",
    description: "Przykładowy element wykonany metodą frezowania CNC",
    image: real4Image,
    category: "cnc"
}
];