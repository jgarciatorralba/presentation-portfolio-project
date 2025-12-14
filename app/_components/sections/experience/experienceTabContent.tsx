import styles from "@styles/components/sections/experience/experienceTabContent.module.css";
import { ExperienceProps } from "experiences";
import { JSX } from "react";

export default function ExperienceTabContent({
    company,
    dates,
    position,
    features,
    ...props
}: ExperienceProps): JSX.Element {
    return (
        <>
            <div className={`${styles.experienceContent} py-6 md:py-2 md:px-5`} {...props}>
                <div className="mb-4">
                    <h3 className="text-lg md:text-2xl">
                        {position.title} @ <a className="text-midnightBlue" href={company.url} target="_blank" rel="noopener noreferrer">{company.name}</a>
                    </h3>
                    <p className="paragraph mt-1 text-sm">{dates.start} — {dates.end}</p>
                </div>
                <p className="paragraph">{position.description}</p>
                {features && (
                    <ul>
                        {features.map((feature, index) => (
                            <li key={`feature-key-${index}`} className="mb-4 md:mb-2">{feature}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};
