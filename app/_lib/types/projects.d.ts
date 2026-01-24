declare module "projects" {
    /**
     * Base project properties shared between API response and internal representation
     */
    interface ProjectBase {
        id: number;
        name: string;
        description: string;
        topics: string[] | null;
        repository: string;
        homepage: string | null;
        archived: boolean;
    }

    /**
     * Project data as received from the API (lastPushedAt is a string)
     */
    interface ProjectData extends ProjectBase {
        lastPushedAt: string;
    }

    /**
     * Project data after parsing (lastPushedAt is a Date object)
     */
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
