import { ExperienceProps } from "experiences";
import { JSX } from "react";

export default function Experience({
    company,
    dates,
    position,
    features,
    ...props
}: ExperienceProps): JSX.Element {
    return (
        <>
            <div className="tab-content" {...props}>
                <div className="mb-4">
                    <h3 className="text-lg md:text-2xl">
                        {position.title} @ <a className="text-midnight-blue" href={company.url} target="_blank" rel="noopener noreferrer">{company.name}</a>
                    </h3>
                    <p className="paragraph mt-1 text-sm">{dates.start} — {dates.end}</p>
                </div>
                <p className="paragraph">{position.description}</p>
                {features && (
                    <ul className="list-disc list-inside pl-6">
                        {features.map((feature, index) => (
                            <li key={`feature-key-${index}`} className="indented-list-item">{feature}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};
