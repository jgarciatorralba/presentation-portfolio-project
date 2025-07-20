"use server"

import fs from "fs";
import path from "path";
import { Project, ProjectData } from "projects";
import { JSX } from "react";
import Section from "../../_components/section";
import ProjectsComponent from "../../_components/sections/projects/projects";
import { apiUrl, cacheLifetimeSeconds, logFilePath, projectsParagraphs } from "../../_lib/constants";
import { oranienbaum } from "../../_lib/fonts";

async function fetchProjectsFromApi(): Promise<{ projects: Project[], next: boolean, error: Error | null }> {
    let projects: Project[] = [];
    let next: boolean = false;
    let error: Error | null = null;

    try {
        const response = await fetch(`${apiUrl}/api/projects?pageSize=6`, { next: { revalidate: cacheLifetimeSeconds } });
        if (!response.ok) {
            throw new Error(`Response status: ${response.statusText}`);
        }

        if (response.headers.get("next") === "1") {
            next = true;
        }

        const data = await response.json();
        if (!data || !Array.isArray(data.projects) || !data.projects.every((project: unknown) => typeof project === "object")) {
            throw new Error("Invalid response format");
        }

        projects = data.projects.map((project: ProjectData): Project => ({
            ...project,
            lastPushedAt: new Date(project.lastPushedAt),
        }));
    } catch (err: unknown) {
        error = err instanceof Error ? err : new Error("Unknown error");
    }

    return { projects, next, error };
}

export default async function Projects(): Promise<JSX.Element | null> {
    fs.mkdirSync(path.dirname(logFilePath), { recursive: true });

    const { projects, next, error }: { projects: Project[], next: boolean, error: Error | null } = await fetchProjectsFromApi();

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
