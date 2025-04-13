import FetchButton from "@/app/_components/sections/projects/fetchButton";
import ProjectCard from "@/app/_components/sections/projects/projectCard";
import fs from "fs";
import path from "path";
import { Project } from "projects";
import { JSX } from "react";
import Section from "../../_components/section";
import { oranienbaum } from "../../_lib/fonts";

const API_URL: string = process.env.API_URL || '';
const cacheLifetimeSeconds: number = parseInt(process.env.CACHE_LIFETIME_SECONDS || '0');
const logFilePath: string = path.join(process.cwd(), "logs", "error.log");

export default async function Projects(): Promise<JSX.Element | null> {
    let projects: Project[] = [];
    let next: boolean = false;

    try {
        const response = await fetch(`${API_URL}/api/projects?pageSize=6`, { next: { revalidate: cacheLifetimeSeconds } });
        if (!response.ok) {
            throw new Error(`Response status: ${response.statusText}`);
        }

        if (response.headers.get("next") === "1") {
            next = true;
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {projects.map((project: Project) => (
                        <ProjectCard
                            key={project.id}
                            name={project.name}
                            description={project.description}
                            topics={project.topics || []}
                            repository={project.repository}
                            homepage={project.homepage}
                        />
                    ))}
                </div>

                <div className="p-6 flex flew-row justify-center">
                    <FetchButton next={next} />
                </div>
            </div>
        </Section>
    );
}
