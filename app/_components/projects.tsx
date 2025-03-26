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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {projects.map((project: Project) => (
                <ProjectCard
                    key={project.id}
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
