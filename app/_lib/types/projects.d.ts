declare module "projects" {
    interface ProjectBase {
        id: number;
        name: string;
        description: string;
        topics: string[] | null;
        repository: string;
        homepage: string | null;
        archived: boolean;
    }

    interface ProjectData extends ProjectBase {
        lastPushedAt: string;
    }

    interface Project extends ProjectBase {
        lastPushedAt: Date;
    }

    interface ProjectCardProps {
        name: string;
        description: string;
        repository: string;
        homepage: string | null;
        topics: string[];
    }

    interface FetchProjectsOptions {
        baseUrl: string;
        urlParams?: Record<string, string>;
        fetchOptions?: RequestInit;
        maxPushedAt?: Date | null;
    }

    interface FetchProjectsResponse {
        projects: Project[];
        next: boolean;
        error: Error | null;
    }
}
