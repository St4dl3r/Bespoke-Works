import { useEffect, useRef, useState } from "react";
import styles from "./ProcessTimeLine.module.css";
import ideaIcon from "../../assets/icons/process/pomysl.png";
import projectIcon from "../../assets/icons/process/project.png";
import productionIcon from "../../assets/icons/process/realizacja.png";
import qualityIcon from "../../assets/icons/process/kontrola.png";
import deliveryIcon from "../../assets/icons/process/dostawa.png";

type ProcessStep = {
    title: string;
    description: string;
    icon: string;
};

const steps: ProcessStep[] = [
    {
        title: "Pomysł",
        description: "Opowiedz nam o swoim projekcie i oczekiwaniach.",
        icon: ideaIcon,
    },
    {
        title: "Projekt",
        description: "Przygotowujemy model i dopasowujemy rozwiązanie.",
        icon: projectIcon,
    },
    {
        title: "Realizacja",
        description: "Dobieramy technologię i wykonujemy element.",
        icon: productionIcon,
    },
    {
        title: "Kontrola",
        description: "Sprawdzamy wykonanie przed przekazaniem.",
        icon: qualityIcon,
    },
    {
        title: "Dostawa",
        description: "Przekazujemy gotowy element.",
        icon: deliveryIcon,
    },
];

function ProcessTimeLine() {

    const timelineRef = useRef<HTMLDivElement>(null);
    const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

    useEffect(() => {
        const timeline = timelineRef.current;

        if (!timeline) return;

        const items = timeline.querySelectorAll(`.${styles.step}`);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const index = Array.from(items).indexOf(entry.target);

                    if (index !== -1) {
                        setVisibleSteps((prev) => 
                        prev.includes(index) ? prev : [...prev, index]
                        );
                    }

                    observer.unobserve(entry.target);
                });
            },
            {threshold: 0.65 }
        );

        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.process}>
            <div className={styles.heading}>
                <span>PROCES REALIZACJI</span>
                <h2>Jak wygląda współpraca?</h2>
            </div>

            <div 
                ref={timelineRef}
                className={`${styles.timeline} ${
                    visibleSteps.length > 0 ? styles.timelineStarted : ""
                }`}
            >
                {steps.map((step, index) => (
                <article
                    key={step.title}
                    className={`${styles.step} ${
                        visibleSteps.includes(index) ? styles.stepVisible : ""
                    }`}
                >
                    <div className={styles.stepMarker}>
                        <img src={step.icon} alt="" />
                    </div>

                    <div className={styles.stepContent}>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                </article>
                ))}
            </div>
        </section>
    );
}

export default ProcessTimeLine;