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

    type ProjectCardProps = {
        name: string;
        description: string;
        repository: string;
        homepage: string | null;
        topics: string[];
    };

    type FetchProjectsOptions = {
        baseUrl: string;
        urlParams?: Record<string, string>;
        fetchOptions?: RequestInit;
        maxPushedAt?: Date | null;
    }

    type FetchProjectsResponse = {
        projects: Project[];
        next: boolean;
        error: Error | null;
    };
}
