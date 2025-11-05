"use server"

import Section from "@components/section";
import ProjectsComponent from "@components/sections/projects/projects";
import { fetchProjects } from "@lib/api/fetchProjects";
import { apiUrl, logFilePath, projectsParagraphs } from "@lib/constants";
import { oranienbaum } from "@lib/fonts";
import fs from "fs";
import path from "path";
import { FetchProjectsResponse } from "projects";
import { JSX } from "react";

export default async function Projects(): Promise<JSX.Element | null> {
    const { projects, next, error }: FetchProjectsResponse = await fetchProjects(
        {
            baseUrl: apiUrl,
            urlParams: { pageSize: "6" },
        }
    );

    const logMessage = `[${new Date().toISOString()}] ${error ? `Error fetching from API: ${error.message}` : "Fetched projects from API successfully."}\n`;
    fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
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
