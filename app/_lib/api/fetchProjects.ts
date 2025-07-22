import { FetchProjectsOptions, Project, ProjectData } from "projects";

export async function fetchProjects({
    baseUrl,
    urlParams = {},
    fetchOptions = {},
    maxPushedAt = null,
}: FetchProjectsOptions): Promise<{ projects: Project[]; next: boolean; error: Error | null }> {
    let projects: Project[] = [];
    let next: boolean = false;
    let error: Error | null = null;

    try {
        const params = new URLSearchParams({
            ...urlParams,
        });

        if (maxPushedAt) {
            params.set("maxPushedAt", maxPushedAt.toISOString());
        }

        const url = `${baseUrl}/projects?${params.toString()}`;

        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            throw new Error(
                `Response status: ${response.statusText !== ""
                    ? response.statusText
                    : response.status + " Unknown error"
                }`
            );
        }

        next = response.headers.get("Next") === "1";

        const data = await response.json();
        if (
            !data ||
            !Array.isArray(data.projects) ||
            !data.projects.every((project: unknown) => typeof project === "object")
        ) {
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
