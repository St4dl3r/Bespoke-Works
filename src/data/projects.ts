
import real1Image from "../assets/images/realizacje/real1.jpg";
import real2Image from "../assets/images/realizacje/cad-real1.jpg";
import real3Image from "../assets/images/realizacje/graw-real1.jpg";
import real4Image from "../assets/images/realizacje/cnc-real1.jpg";
import real5Image from "../assets/images/realizacje/real2.jpg";
import real6Image from "../assets/images/realizacje/real3.jpg";
import real7Image from "../assets/images/realizacje/cad-real2.jpg";
import real8Image from "../assets/images/realizacje/cad-real3.jpg";
import real9Image from "../assets/images/realizacje/graw-real2.jpg";
import real10Image from "../assets/images/realizacje/graw-real3.jpg";
import real11Image from "../assets/images/realizacje/cnc-real2.jpg";
import real12Image from "../assets/images/realizacje/cnc-real3.jpg";

export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Prototyp funkcjonalny",
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
    },
    {
        id: 5,
        title: "Element techniczny 3D",
        description: "Przykładowy wydruk elementu technicznego w technologii FDM",
        image: real5Image,
        category: "druk3d"
    },
    {
        id: 6,
        title: "Model prototypowy FDM",
        description: "Przykładowy prototyp przygotowany do testowania konstrukcji i dopasowania elementów",
        image: real6Image,
        category: "druk3d"
    },
    {
        id: 7,
        title: "Digitalizacja elementu",
        description: "Przykładowy proces odwzorowania geometrii istniejącego obiektu za pomocą skanowania 3D",
        image: real7Image,
        category: "cad"
    },
    {
        id: 8,
        title: "Model do prototypowania",
        description: "Przykładowe przygotowanie modelu CAD do wykonania prototypu",
        image: real8Image,
        category: "cad"
    },
    {
        id: 9,
        title: "Grawerowanie logo",
        description: "Przykład nanoszenia grafiki i oznaczeń na powierzchnię elementu",
        image: real9Image,
        category: "grawerowanie"
    },
    {
        id: 10,
        title: "Tabliczki znamionowe",
        description: "Przykładowe znakowanie tabliczek informacyjnych i identyfikacyjnych",
        image: real10Image,
        category: "grawerowanie"
    },
    {
        id: 11,
        title: "Prototyp CNC",
        description: "Przykładowa część przygotowana na potrzeby prototypowania metodą frezowania CNC",
        image: real11Image,
        category: "cnc"
    },
    {
        id: 12,
        title: "Produkcja małoseryjna CNC",
        description: "Przykładowe detale wykonane w niewielkiej serii metodą frezowania CNC",
        image: real12Image,
        category: "cnc"
    }
];
