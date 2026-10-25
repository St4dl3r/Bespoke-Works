import { useEffect, useRef, useState } from "react";
import styles from "./SectionDivider.module.css";

function SectionDivider() {
    const dividerRef = useRef<HTMLDivElement>(null);
    const [isVisivble, setIsVisible] = useState(false);

    useEffect(() => {
        const divider = dividerRef.current;

        if(!divider) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.8,
            }
        );
        observer.observe(divider);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={dividerRef}
            className={`${styles.divider} ${isVisivble ? styles.visible : ""}`}
            aria-hidden="true"
        >
            <span className={styles.line}></span>
            <span className={styles.pulse}></span>
            <span className={styles.line}></span>
        </div>
    );
}

export default SectionDivider;