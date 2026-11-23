"use client"

import { createContext, useContext } from "react";
import type { Project } from "@lib/types/projects";

export interface ProjectsContextValue {
    initialized: boolean;
    projects: Project[];
    hasNextPage: boolean;
    maxPushedAt: Date | null;
    initialize: (projects: Project[], hasNextPage: boolean) => void;
    append: (projects: Project[], hasNextPage: boolean) => void;
}

export const ProjectsContext = createContext<ProjectsContextValue | null>(null);

export const useProjects = () => useContext(ProjectsContext);
