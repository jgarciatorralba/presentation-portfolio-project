import { JSX } from "react";

interface tabPanelProps {
    companyName: string;
    companyUrl: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    features?: string[];
}

export default function TabPanel({
    companyName,
    companyUrl,
    position,
    startDate,
    endDate,
    description,
    features,
    ...props
}: tabPanelProps): JSX.Element {
    return (
        <>
            <div className="tab-content" {...props}>
                <div className="mb-4">
                    <h3 className="text-lg md:text-2xl">
                        {position} @ <a className="text-midnight-blue" href={companyUrl} target="_blank" rel="noopener noreferrer">{companyName}</a>
                    </h3>
                    <p className="paragraph mt-1 text-sm">{startDate} — {endDate}</p>
                </div>
                <p className="paragraph">{description}</p>
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
