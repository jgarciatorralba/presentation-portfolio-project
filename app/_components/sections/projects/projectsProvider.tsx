"use client"

import { JSX, ReactNode, useCallback, useMemo, useState } from "react";
import type { Project } from "@lib/types/projects";
import { ProjectsContext, type ProjectsContextValue } from "@lib/context/projectsContext";

export default function ProjectsProvider({ children }: { children: ReactNode }): JSX.Element {
    const [projectsState, setProjectsState] = useState({
        initialized: false,
        projects: [] as Project[],
        hasNextPage: true,
        maxPushedAt: null as Date | null,
    });

    const initialize = useCallback((initialProjects: Project[], hasNextPage: boolean) => {
        setProjectsState((currentState) => currentState.initialized ? currentState : {
            initialized: true,
            projects: initialProjects,
            hasNextPage,
            maxPushedAt: initialProjects.at(-1)?.lastPushedAt || null,
        });
    }, []);

    const append = useCallback((newProjects: Project[], hasNextPage: boolean) => {
        setProjectsState((currentState) => ({
            ...currentState,
            projects: [...currentState.projects, ...newProjects],
            hasNextPage,
            maxPushedAt: newProjects.length > 0
                ? newProjects.at(-1)?.lastPushedAt || currentState.maxPushedAt
                : currentState.maxPushedAt,
        }));
    }, []);

    const value = useMemo<ProjectsContextValue>(() => ({
        ...projectsState,
        initialize,
        append,
    }), [append, initialize, projectsState]);

    return (
        <ProjectsContext.Provider value={value}>
            {children}
        </ProjectsContext.Provider>
    );
}
