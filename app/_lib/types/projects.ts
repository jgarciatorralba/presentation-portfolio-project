export interface ProjectBase {
    id: number;
    name: string;
    description: string;
    topics: string[] | null;
    repository: string;
    homepage: string | null;
    archived: boolean;
}

export interface ProjectData extends ProjectBase {
    lastPushedAt: string;
}

export interface Project extends ProjectBase {
    lastPushedAt: Date;
}

export interface ProjectCardProps {
    name: string;
    description: string;
    repository: string;
    homepage: string | null;
    topics: string[];
    animateIn?: boolean;
    animationDelayMs?: number;
}

export interface ProjectEntry {
    project: Project;
    animateIn: boolean;
    animationDelayMs: number;
}

export interface FetchProjectsOptions {
    baseUrl: string;
    urlParams?: Record<string, string>;
    fetchOptions?: RequestInit;
    maxPushedAt?: Date | null;
}

export interface FetchProjectsResponse {
    projects: Project[];
    next: boolean;
    error: Error | null;
}
