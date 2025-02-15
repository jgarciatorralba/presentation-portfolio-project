import { JSX } from "react";

const eDreamsUrl: string = "https://www.edreams.es/";
const adkomoUrl: string = "https://www.adkomo.com/";
const siiGroupUrl: string = "https://siigroup-spain.com/";

const eDreams: JSX.Element = (
    <div className="tab-content">
        <h3 className="mb-4 text-lg md:text-2xl">Software Engineer @ <a className="text-midnightBlue" href={eDreamsUrl} target="_blank" rel="noopener noreferrer">eDreams ODIGEO</a></h3>
        <p className="paragraph">Working as a Backend Developer in the Accommodation area, contributing to the improvement of the hotel booking platform and post-booking services.</p>
        <ul className="list-disc list-inside pl-6">
            <li className="indented-list-item">Development of scalable solutions using PHP8, MariaDB, Redis and RabbitMQ.</li>
            <li className="indented-list-item">Active participation in product definition, applying Hexagonal Architecture and DDD.</li>
            <li className="indented-list-item">Implementation and maintenance of microservices, ensuring code quality and efficiency.</li>
            <li className="indented-list-item">Working in an agile environment (Kanban) with a focus on continuous value delivery.</li>
            <li className="indented-list-item">Monitoring and performance optimization using tools like Datadog and Grafana.</li>
        </ul>
    </div>
);

const adkomo: JSX.Element = (
    <div className="tab-content">
        <h3 className="mb-4 text-lg md:text-2xl">Full Stack Developer @ <a className="text-midnightBlue" href={adkomoUrl} target="_blank" rel="noopener noreferrer">Adkomo</a></h3>
        <p className="paragraph">Enhanced and maintained a proprietary advertising and digital marketing platform.</p>
        <ul className="list-disc list-inside pl-6">
            <li className="indented-list-item">Developed and optimized microservices architecture hosted on AWS.</li>
            <li className="indented-list-item">Worked with Symfony (PHP 7.4), PostgreSQL, Redis, and React to build robust and efficient solutions.</li>
            <li className="indented-list-item">Collaborated in an Agile Scrum environment to deliver high-quality products.</li>
        </ul>
    </div>
);

const siiGroup: JSX.Element = (
    <div className="tab-content">
        <h3 className="mb-4 text-lg md:text-2xl">Full Stack Developer @ <a className="text-midnightBlue" href={siiGroupUrl} target="_blank" rel="noopener noreferrer">SII Group Spain</a></h3>
        <p className="paragraph">Participated in the development of both new and existing projects in a consulting firm.</p>
        <ul className="list-disc list-inside pl-6">
            <li className="indented-list-item">Mainly worked with Symfony (PHP 7.4) and React.</li>
        </ul>
    </div>
);

export default [
    { active: true, label: "eDreams", component: eDreams },
    { label: "Adkomo", component: adkomo },
    { label: "SII Group Spain", component: siiGroup },
    { label: "Òmada Interactiva", component: <div>Fourth experience</div> },
    { label: "Inbenta", component: <div>Fifth experience</div> },
];
