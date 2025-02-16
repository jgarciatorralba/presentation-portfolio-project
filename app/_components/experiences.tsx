import { JSX } from "react";

interface tabContentProps {
    companyName: string;
    companyUrl: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    features?: string[];
}

const tabContent = ({
    companyName,
    companyUrl,
    position,
    startDate,
    endDate,
    description,
    features,
}: tabContentProps): JSX.Element => {
    return (
        <>
            <div className="tab-content">
                <div className="mb-4">
                    <h3 className="text-lg md:text-2xl">
                        {position} @ <a className="text-midnightBlue" href={companyUrl} target="_blank" rel="noopener noreferrer">{companyName}</a>
                    </h3>
                    <p className="paragraph mt-1 text-sm">{startDate} — {endDate}</p>
                </div>
                <p className="paragraph">{description}</p>
                {features && (
                    <ul className="list-disc list-inside pl-6">
                        {features.map((feature) => (
                            <li className="indented-list-item">{feature}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default [
    {
        active: true,
        label: "eDreams",
        component: tabContent({
            companyName: "eDreams ODIGEO",
            companyUrl: "https://www.edreams.es/",
            position: "Software Engineer",
            startDate: "June 2024",
            endDate: "Present",
            description: "Working as a Backend Developer in the Accommodation area, contributing to the improvement of the hotel booking platform and post-booking services.",
            features: [
                "Development of scalable solutions using PHP8, MariaDB, Redis and RabbitMQ.",
                "Active participation in product definition, applying Hexagonal Architecture and DDD.",
                "Implementation and maintenance of microservices, ensuring code quality and efficiency.",
                "Working in an agile environment (Kanban) with a focus on continuous value delivery.",
                "Monitoring and performance optimization using tools like Datadog and Grafana.",
            ],
        })
    },
    {
        label: "Adkomo",
        component: tabContent({
            companyName: "Adkomo",
            companyUrl: "https://www.adkomo.com/",
            position: "Full Stack Developer",
            startDate: "April 2022",
            endDate: "June 2024",
            description: "Enhanced and maintained a proprietary advertising and digital marketing platform.",
            features: [
                "Developed and optimized microservices architecture hosted on AWS.",
                "Worked with Symfony (PHP 7.4), PostgreSQL, Redis, and React to build robust and efficient solutions.",
                "Collaborated in an Agile Scrum environment to deliver high-quality products.",
            ],
        })
    },
    {
        label: "SII Group Spain",
        component: tabContent({
            companyName: "SII Group Spain",
            companyUrl: "https://siigroup-spain.com/",
            position: "Full Stack Developer",
            startDate: "February 2022",
            endDate: "April 2022",
            description: "Participated in the development of new and existing projects in a consulting firm.",
            features: [
                "Mainly worked with Symfony (PHP 7.4) and React.",
            ],
        })
    },
    {
        label: "Òmada",
        component: tabContent({
            companyName: "Òmada",
            companyUrl: "https://www.omada.es/es/",
            position: "Junior Backend Developer",
            startDate: "February 2021",
            endDate: "February 2022",
            description: "Developed and maintained projects in industries such as education, healthcare and NGOs.",
            features: [
                "Implemented and optimized features for applications based on Drupal (CMS framework for PHP).",
                "Collaborated on the integration of third-party solutions",
                "Assisted in maintenance, support, and technical documentation tasks.",
            ],
        })
    },
    {
        label: "Inbenta",
        component: tabContent({
            companyName: "Inbenta",
            companyUrl: "https://www.inbenta.com/",
            position: "Product Developer",
            startDate: "December 2020",
            endDate: "February 2021",
            description: "Maintenance, evolution and testing of proprietary software.",
            features: [
                "Took part in building both client-side and server-side features using Laravel and Vue.js.",
            ],
        })
    },
];
