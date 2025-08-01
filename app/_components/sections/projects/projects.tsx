"use client"

import { FetchProjectsResponse, Project } from "projects";
import { JSX, useEffect, useState } from "react";
import { fetchProjects } from "../../../_lib/api/fetchProjects";
import { clientApiUrl } from "../../../_lib/constants";
import { useToast } from "../../../_lib/hooks/useToast";
import Button from "../../button";
import ProjectCard from "./projectCard";

export default function Projects({ next, prefetchedProjects }: { next: boolean, prefetchedProjects: Project[] }): JSX.Element {
    const [disabled, setDisabled] = useState(next === false);
    const [projects, setProjects] = useState<Project[]>(prefetchedProjects);
    const [maxPushedAt, setMaxPushedAt] = useState<Date | null>(projects.length > 0 ? projects[projects.length - 1].lastPushedAt : null);

    useEffect(() => {
        if (projects.length > 0) {
            setMaxPushedAt(projects[projects.length - 1].lastPushedAt);
        }
    }, [projects]);

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
            setProjects((prevProjects) => [...prevProjects, ...newProjects]);
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
                <Button
                    htmlType="button"
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
