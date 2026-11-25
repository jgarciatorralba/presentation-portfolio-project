"use client"

import Button from "@components/button";
import ProjectCard from "@components/sections/projects/projectCard";
import { fetchProjects } from "@lib/api/fetchProjects";
import { clientApiUrl, projectCardStaggerDelayMs } from "@lib/constants";
import { useProjects } from "@lib/context/projectsContext";
import { useToast } from "@lib/hooks/useToast";
import type { FetchProjectsResponse, Project } from "@lib/types/projects";
import { JSX, useEffect, useRef, useState } from "react";

const createAnimationDelays = (projects: Project[]): Map<number, number> => {
    return new Map(projects.map((project, index): [number, number] => [
        project.id,
        index * projectCardStaggerDelayMs,
    ]));
}

export default function Projects({ hasNextPage, prefetchedProjects }: { hasNextPage: boolean, prefetchedProjects: Project[] }): JSX.Element {
    const {
        append,
        hasNextPage: contextHasNextPage,
        initialized,
        initialize,
        projects,
    } = useProjects();
    const [isLoading, setIsLoading] = useState(false);
    const [showMoreHidden, setShowMoreHidden] = useState(false);
    const [animationDelaysByProjectId, setAnimationDelaysByProjectId] = useState<Map<number, number>>(() => new Map());
    const showMoreTimeoutRef = useRef<number | null>(null);

    const toast = useToast();
    const canLoadMore = initialized
        ? contextHasNextPage
        : hasNextPage;
    const displayedProjects = initialized
        ? projects
        : prefetchedProjects;

    useEffect(() => {
        initialize(prefetchedProjects, hasNextPage);
    }, [hasNextPage, initialize, prefetchedProjects]);

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
        if (isLoading || !canLoadMore) return;

        setIsLoading(true);
        setShowMoreHidden(true);

        const { projects: newProjects, next: responseHasNextPage, error }: FetchProjectsResponse = await fetchProjects(
            {
                baseUrl: clientApiUrl,
                urlParams: { pageSize: "3" },
                maxPushedAt: projects.at(-1)?.lastPushedAt
                    || prefetchedProjects.at(-1)?.lastPushedAt
                    || null,
            }
        );

        if (newProjects.length > 0) {
            setAnimationDelaysByProjectId((currentDelays) => new Map([
                ...currentDelays,
                ...createAnimationDelays(newProjects),
            ]));

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

        append(newProjects, error ? true : responseHasNextPage);
        setIsLoading(false);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                {displayedProjects.map((project) => {
                    const animationDelayMs = animationDelaysByProjectId.get(project.id);
                    const animateIn = animationDelayMs !== undefined;

                    return (
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
                    );
                })}
            </div>

            <div className="p-6 flex flex-row justify-center">
                <Button
                    type="button"
                    className={`btn cursor-pointer max-w-fit ${!canLoadMore || isLoading ? "pointer-events-none opacity-50" : ""} ${showMoreHidden ? "invisible" : ""}`}
                    disabled={!canLoadMore || isLoading}
                    onClick={handleClick}
                >
                    Show more
                </Button>
            </div>
        </>
    );
}
