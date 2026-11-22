"use client"

import { createContext, useContext } from "react";
import type { Project } from "@lib/types/projects";

export interface ProjectsContextValue {
    projects: Project[] | null;
    next: boolean;
    maxPushedAt: Date | null;
    initialize: (projects: Project[], next: boolean) => void;
    append: (projects: Project[], next: boolean) => void;
}

export const ProjectsContext = createContext<ProjectsContextValue | null>(null);

export const useProjects = () => useContext(ProjectsContext);
