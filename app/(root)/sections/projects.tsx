import fs from "fs";
import path from "path";
import { JSX } from "react";
import Section from "../../_components/section";
import { oranienbaum } from "../../fonts";

const API_URL: string = process.env.API_URL || '';
const cacheLifetimeSeconds: number = parseInt(process.env.CACHE_LIFETIME_SECONDS || '0');
const logFilePath = path.join(process.cwd(), "logs", "error.log");

export default async function Projects(): Promise<JSX.Element | null> {
    let projects: any[] = [];

    try {
        const response = await fetch(`${API_URL}/api/projects?pageSize=5`, { next: { revalidate: cacheLifetimeSeconds } });
        if (!response.ok) {
            throw new Error(`Response status: ${response.statusText}`);
        }

        const data = await response.json();
        projects = data.projects;
    } catch (error: unknown) {
        const logMessage = `[${new Date().toISOString()}] Error fetching from API: ${error instanceof Error ? error.message : "Unknown error"}\n`;

        fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
        fs.appendFileSync(logFilePath, logMessage);
    }

    if (!projects.length) {
        return null;
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
