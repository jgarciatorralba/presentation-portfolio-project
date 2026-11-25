"use client"

import { JSX, ReactNode, useCallback, useMemo, useState } from "react";
import type { Project, ProjectsContextValue, ProjectsState } from "@lib/types/projects";
import { ProjectsContext } from "@lib/context/projectsContext";

export default function ProjectsProvider({ children }: { children: ReactNode }): JSX.Element {
    const [projectsState, setProjectsState] = useState<ProjectsState>({
        initialized: false,
        projects: [],
        hasNextPage: true,
    });

    const initialize = useCallback((initialProjects: Project[], hasNextPage: boolean) => {
        setProjectsState((currentState) => currentState.initialized ? currentState : {
            initialized: true,
            projects: initialProjects,
            hasNextPage,
        });
    }, []);

    const append = useCallback((newProjects: Project[], hasNextPage: boolean) => {
        setProjectsState((currentState) => ({
            ...currentState,
            projects: [...currentState.projects, ...newProjects],
            hasNextPage,
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
