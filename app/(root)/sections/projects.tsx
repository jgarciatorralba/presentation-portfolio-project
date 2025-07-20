"use server"

import fs from "fs";
import path from "path";
import { Project } from "projects";
import { JSX } from "react";
import Section from "../../_components/section";
import ProjectsComponent from "../../_components/sections/projects/projects";
import { fetchInitialProjects } from "../../_lib/api/fetchInitialProjects";
import { logFilePath, projectsParagraphs } from "../../_lib/constants";
import { oranienbaum } from "../../_lib/fonts";

export default async function Projects(): Promise<JSX.Element | null> {
    fs.mkdirSync(path.dirname(logFilePath), { recursive: true });

    const { projects, next, error }: { projects: Project[], next: boolean, error: Error | null } = await fetchInitialProjects();

    const logMessage = `[${new Date().toISOString()}] ${error ? `Error fetching from API: ${error.message}` : "Fetched projects from API successfully."}\n`;
    fs.appendFileSync(logFilePath, logMessage);

    if (!projects.length) {
        return null;
    }

    return (
        <Section name="projects">
            <div className="section-container">
                <h2 className={`header ${oranienbaum.className}`}>Projects</h2>
                {projectsParagraphs.map((paragraph, index) => (
                    <p key={index} className="paragraph">{paragraph}</p>
                ))}

                <ProjectsComponent next={next} prefetchedProjects={projects} />
            </div>
        </Section>
    );
}
