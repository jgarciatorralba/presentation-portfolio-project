"use client"

import Button from "@components/button";
import ProjectCard from "@components/sections/projects/projectCard";
import { fetchProjects } from "@lib/api/fetchProjects";
import { clientApiUrl, projectCardStaggerDelayMs } from "@lib/constants";
import { useProjects } from "@lib/context/projectsContext";
import { useToast } from "@lib/hooks/useToast";
import type { FetchProjectsResponse, Project, ProjectEntry } from "@lib/types/projects";
import { JSX, useEffect, useRef, useState } from "react";

const createProjectEntries = (projects: Project[], animateIn: boolean): ProjectEntry[] => {
    return projects.map((project, index) => ({
        project,
        animateIn,
        animationDelayMs: animateIn ? index * projectCardStaggerDelayMs : 0,
    }));
}

export default function Projects({ next, prefetchedProjects }: { next: boolean, prefetchedProjects: Project[] }): JSX.Element {
    const projectsContext = useProjects();
    const [disabled, setDisabled] = useState(projectsContext ? projectsContext.next === false : next === false);
    const [projectEntries, setProjectEntries] = useState<ProjectEntry[]>(() =>
        createProjectEntries(projectsContext?.projects || prefetchedProjects, false)
    );
    const [showMoreHidden, setShowMoreHidden] = useState(false);
    const [maxPushedAt, setMaxPushedAt] = useState<Date | null>(
        projectsContext?.maxPushedAt ||
        (prefetchedProjects.length > 0 ? prefetchedProjects[prefetchedProjects.length - 1].lastPushedAt : null)
    );
    const showMoreTimeoutRef = useRef<number | null>(null);

    const toast = useToast();

    useEffect(() => {
        projectsContext?.initialize(prefetchedProjects, next);
    }, [next, prefetchedProjects, projectsContext]);

    useEffect(() => {
        return () => {
            if (showMoreTimeoutRef.current !== null) {
                window.clearTimeout(showMoreTimeoutRef.current);
            }
        };
    }, []);

    const revealShowMoreButton = () => {
        if (showMoreTimeoutRef.current !== null) {
            window.clearTimeout(showMoreTimeoutRef.current);
            showMoreTimeoutRef.current = null;
        }

        setShowMoreHidden(false);
    };

    const handleClick = async () => {
        if (!disabled) setDisabled(true);
        setShowMoreHidden(true);

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

            if (showMoreTimeoutRef.current !== null) {
                window.clearTimeout(showMoreTimeoutRef.current);
            }

            const showMoreDelayMs = newProjects.length * projectCardStaggerDelayMs;

            showMoreTimeoutRef.current = window.setTimeout(() => {
                setShowMoreHidden(false);
                showMoreTimeoutRef.current = null;
            }, showMoreDelayMs);
        }

        if (newProjects.length === 0) {
            revealShowMoreButton();
        }

        if (error) {
            toast?.open(error.message);
        }

        setDisabled(!error && next === false);
        projectsContext?.append(newProjects, error ? true : next);
    };

    const displayedProjectEntries = projectsContext?.projects
        ? projectsContext.projects.map((project) => (
            projectEntries.find((entry) => entry.project.id === project.id) ||
            { project, animateIn: false, animationDelayMs: 0 }
        ))
        : projectEntries;

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                {displayedProjectEntries.map(({ project, animateIn, animationDelayMs }: ProjectEntry) => (
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

            <div className="p-6 flex flex-row justify-center">
                <Button
                    type="button"
                    className={`btn cursor-pointer max-w-fit ${disabled ? "pointer-events-none opacity-50" : ""} ${showMoreHidden ? "invisible" : ""}`}
                    disabled={disabled}
                    onClick={handleClick}
                >
                    Show more
                </Button>
            </div>
        </>
    );
}
