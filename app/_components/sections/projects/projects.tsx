"use client"

import Button from "@components/button";
import ProjectCard from "@components/sections/projects/projectCard";
import { fetchProjects } from "@lib/api/fetchProjects";
import { clientApiUrl } from "@lib/constants";
import { useToast } from "@lib/hooks/useToast";
import { FetchProjectsResponse, Project } from "projects";
import { JSX, useState } from "react";

const PROJECT_CARD_STAGGER_DELAY_MS = 400;

type ProjectEntry = {
    project: Project;
    animateIn: boolean;
    animationDelayMs: number;
};

function createProjectEntries(projects: Project[], animateIn: boolean): ProjectEntry[] {
    return projects.map((project, index) => ({
        project,
        animateIn,
        animationDelayMs: animateIn ? index * PROJECT_CARD_STAGGER_DELAY_MS : 0,
    }));
}

export default function Projects({ next, prefetchedProjects }: { next: boolean, prefetchedProjects: Project[] }): JSX.Element {
    const [disabled, setDisabled] = useState(next === false);
    const [projectEntries, setProjectEntries] = useState<ProjectEntry[]>(() => createProjectEntries(prefetchedProjects, false));
    const [maxPushedAt, setMaxPushedAt] = useState<Date | null>(
        prefetchedProjects.length > 0 ? prefetchedProjects[prefetchedProjects.length - 1].lastPushedAt : null
    );

    const toast = useToast();

    const handleClick = async () => {
        if (!disabled) setDisabled(true);

        const { projects: newProjects, next, error }: FetchProjectsResponse = await fetchProjects(
            {
                baseUrl: clientApiUrl,
                urlParams: { pageSize: "3" },
                maxPushedAt,
            }
        );

        if (newProjects.length > 0) {
            setProjectEntries((prevProjectEntries) => [
                ...prevProjectEntries,
                ...createProjectEntries(newProjects, true),
            ]);
            setMaxPushedAt(newProjects[newProjects.length - 1].lastPushedAt);
        }

        if (error) {
            toast?.open(error.message);
        }

        setDisabled(!error && next === false);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                {projectEntries.map(({ project, animateIn, animationDelayMs }: ProjectEntry) => (
                    <ProjectCard
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        topics={project.topics || []}
                        repository={project.repository}
                        homepage={project.homepage}
                        animateIn={animateIn}
                        animationDelayMs={animationDelayMs}
                    />
                ))}
            </div>

            <div className="p-6 flex flew-row justify-center">
                <Button
                    type="button"
                    className={`btn cursor-pointer max-w-fit ${disabled && 'pointer-events-none opacity-50'}`}
                    disabled={disabled}
                    onClick={handleClick}
                >
                    Show more
                </Button>
            </div>
        </>
    );
}
