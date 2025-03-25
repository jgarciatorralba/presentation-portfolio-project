import { JSX } from "react";

type ProjectCardProps = {
    id: number;
    name: string;
    description: string;
    repository: string;
    homepage: string | null;
    topics: string[];
};

export default function ProjectCard({ id, name, description, repository, homepage, topics }: ProjectCardProps): JSX.Element {
    return (
        <div className="card" key={id}>
            <p className="capitalize">{name.replaceAll('-', ' ')}</p>
        </div>
    );
}
