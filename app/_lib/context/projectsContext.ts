"use client"

import { createContext, useContext } from "react";
import type { ProjectsContextValue } from "@lib/types/projects";

export const ProjectsContext = createContext<ProjectsContextValue | null>(null);

export const useProjects = () => useContext(ProjectsContext);
