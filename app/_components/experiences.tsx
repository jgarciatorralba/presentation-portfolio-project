import { JSX } from "react";

const eDreamsUrl: string = "https://www.edreams.es/";

const eDreams: JSX.Element = (
    <div className="tab-content">
        <h3 className="mb-4 text-lg md:text-2xl">Software Engineer @ <a className="text-midnightBlue" href={eDreamsUrl} target="_blank" rel="noopener noreferrer">eDreams ODIGEO</a></h3>
        <p className="paragraph">Working as a Backend Developer in the Accommodation area, contributing to the improvement of the hotel booking platform and post-booking services.</p>
        <ul className="list-disc list-inside pl-6">
            <li className="-indent-[1.4rem]">Development of scalable solutions using PHP8, MariaDB, Redis and RabbitMQ.</li>
            <li className="-indent-[1.4rem]">Active participation in product definition, applying Hexagonal Architecture and DDD.</li>
            <li className="-indent-[1.4rem]">Implementation and maintenance of microservices, ensuring code quality and efficiency.</li>
            <li className="-indent-[1.4rem]">Working in an agile environment (Kanban) with a focus on continuous value delivery.</li>
            <li className="-indent-[1.4rem]">Monitoring and performance optimization using tools like Datadog and Grafana.</li>
        </ul>
    </div>
);

export default [
    { active: true, label: "eDreams", component: eDreams },
    { active: false, label: "Adkomo", component: <div>Second experience</div> },
    { active: false, label: "SII Concatel", component: <div>Third experience</div> },
    { active: false, label: "Òmada Interactiva", component: <div>Fourth experience</div> },
    { active: false, label: "Inbenta", component: <div>Fifth experience</div> },
];
