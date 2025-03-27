declare module "projects" {
    export type Project = {
        id: number;
        name: string;
        description: string;
        topics: string[] | null;
        repository: string;
        homepage: string | null;
        archived: boolean;
        lastPushedAt: string;
    };

    export type ProjectCardProps = {
        name: string;
        description: string;
        repository: string;
        homepage: string | null;
        topics: string[];
    };
}
