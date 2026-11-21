"use server"

import Section from "@components/section";
import ProjectsComponent from "@components/sections/projects/projects";
import { fetchProjects } from "@lib/api/fetchProjects";
import { apiUrl, logFilePath, projectsParagraphs } from "@lib/constants";
import { oranienbaum } from "@lib/fonts";
import type { FetchProjectsResponse } from "@lib/types/projects";
import fs from "fs";
import path from "path";
import { JSX } from "react";

export default async function Projects(): Promise<JSX.Element | null> {
    const { projects, next, error }: FetchProjectsResponse = await fetchProjects(
        {
            baseUrl: apiUrl,
            urlParams: { pageSize: "6" },
            fetchOptions: { cache: "no-store" },
        }
    );

    if (error) {
        const logMessage = `[${new Date().toISOString()}] Error fetching from API: ${error.message}\n`;
        fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
        fs.appendFileSync(logFilePath, logMessage);
    }

    if (!projects.length) {
        return null;
    }

    return (
        <Section id="projects">
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
