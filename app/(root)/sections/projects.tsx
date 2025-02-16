import { JSX } from "react";
import Section from "../../_components/section";
import { oranienbaum } from "../fonts";

const API_URL: string = process.env.API_URL || '';
const cacheLifetimeSeconds: number = 2 * 7 * 24 * 60 * 60;

export default async function Projects(): Promise<JSX.Element> {
    let projects: any[] = [];

    try {
        const response = await fetch(`${API_URL}/api/projects?pageSize=5`, { next: { revalidate: cacheLifetimeSeconds } });
        if (!response.ok) {
            throw new Error(`Response status: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);

        projects = data.projects;
    } catch (error) {
        console.error(error);
    }

    return (
        <Section name="projects">
            <div className="section-container">
                <h2 className={`header ${oranienbaum.className}`}>Projects</h2>
                <p className="paragraph">A taste of my work.</p>
                {projects && (
                    <div className="projects">
                        {projects.map((project: any) => (
                            <p key={project.id}>{project.name}</p>
                        ))}
                    </div>
                )}
            </div>
        </Section>
    );
}
