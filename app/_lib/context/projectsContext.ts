"use client"

import { createContext, useContext } from "react";
import type { ProjectsContextValue } from "@lib/types/projects";

export const ProjectsContext = createContext<ProjectsContextValue | null>(null);

export const useProjects = (): ProjectsContextValue => {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error("useProjects must be used within a ProjectsProvider");
    }

    return context;
};
