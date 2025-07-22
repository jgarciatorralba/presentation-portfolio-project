declare module "projects" {
    type ProjectData = {
        id: number;
        name: string;
        description: string;
        topics: string[] | null;
        repository: string;
        homepage: string | null;
        archived: boolean;
        lastPushedAt: string;
    };

    type Project = {
        id: number;
        name: string;
        description: string;
        topics: string[] | null;
        repository: string;
        homepage: string | null;
        archived: boolean;
        lastPushedAt: Date;
    };

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
}
