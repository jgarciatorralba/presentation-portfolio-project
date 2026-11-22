"use client"

import { JSX, ReactNode, useCallback, useMemo, useRef, useState } from "react";
import type { Project } from "@lib/types/projects";
import { ProjectsContext, type ProjectsContextValue } from "@lib/context/projectsContext";

export default function ProjectsProvider({ children }: { children: ReactNode }): JSX.Element {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [next, setNext] = useState(true);
    const [maxPushedAt, setMaxPushedAt] = useState<Date | null>(null);
    const initializedRef = useRef(false);

    const initialize = useCallback((initialProjects: Project[], initialNext: boolean) => {
        if (initializedRef.current) return;
        initializedRef.current = true;
        setProjects(initialProjects);
        setNext(initialNext);
        setMaxPushedAt(initialProjects.at(-1)?.lastPushedAt || null);
    }, []);

    const append = useCallback((newProjects: Project[], hasNext: boolean) => {
        setProjects((currentProjects) => [...(currentProjects || []), ...newProjects]);
        setNext(hasNext);
        if (newProjects.length > 0) {
            setMaxPushedAt(newProjects.at(-1)?.lastPushedAt || null);
        }
    }, []);

    const value = useMemo<ProjectsContextValue>(() => ({
        projects,
        next,
        maxPushedAt,
        initialize,
        append,
    }), [append, initialize, maxPushedAt, next, projects]);

    return (
        <ProjectsContext.Provider value={value}>
            {children}
        </ProjectsContext.Provider>
    );
}
