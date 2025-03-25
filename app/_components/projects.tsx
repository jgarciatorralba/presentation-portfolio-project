'use client';

import { JSX } from "react";
import ProjectCard from "./projectCard";

type Project = {
    id: number;
    name: string;
    description: string;
    topics: string[] | null;
    repository: string;
    homepage: string | null;
    archived: boolean;
    lastPushedAt: string;
};

export default function Projects({ projects, next = false }: { projects: Project[], next: boolean }): JSX.Element {
    return (
        <div className="projects">
            {projects.map((project: Project) => (
                <ProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    repository={project.repository}
                    homepage={project.homepage}
                    topics={project.topics || []}
                />
            ))}
        </div>
    );
}
