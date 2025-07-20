import { Project, ProjectData } from "projects";
import { apiUrl, cacheLifetimeSeconds } from "../constants";

export async function fetchInitialProjects(): Promise<{ projects: Project[], next: boolean, error: Error | null }> {
    let projects: Project[] = [];
    let next: boolean = false;
    let error: Error | null = null;

    try {
        const response = await fetch(`${apiUrl}/api/projects?pageSize=6`, { next: { revalidate: cacheLifetimeSeconds } });
        if (!response.ok) {
            throw new Error(`Response status: ${response.statusText}`);
        }

        next = response.headers.get("Next") === "1";

        const data = await response.json();
        if (!data || !Array.isArray(data.projects) || !data.projects.every((project: unknown) => typeof project === "object")) {
            throw new Error("Invalid response format");
        }

        projects = data.projects.map((project: ProjectData): Project => ({
            ...project,
            lastPushedAt: new Date(project.lastPushedAt),
        }));
    } catch (err: unknown) {
        error = err instanceof Error ? err : new Error("Unknown error");
    }

    return { projects, next, error };
}
