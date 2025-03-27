import { ProjectCardProps } from "projects";
import { JSX } from "react";

export default function ProjectCard({ name, description, topics, repository, homepage }: ProjectCardProps): JSX.Element {
    return (
        <div className="bg-blue hover:bg-midnight-blue rounded-md p-6 transition hover:scale-105">
            <p className="paragraph capitalize text-lg font-bold">{name.replaceAll('-', ' ')}</p>
            <p className="paragraph text-sm">{description}</p>

            <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                    <span
                        key={index}
                        className="text-xs capitalize"
                    >
                        {topic}
                    </span>
                ))}
            </div>
        </div>
    );
}
