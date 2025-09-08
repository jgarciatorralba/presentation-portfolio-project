import styles from "@styles/components/sections/projects/projectCard.module.css";
import Image from "next/image";
import { ProjectCardProps } from "projects";
import { JSX } from "react";

export default function ProjectCard({ name, description, topics, repository, homepage }: ProjectCardProps): JSX.Element {
    return (
        <div className={`bg-blue hover:bg-midnight-blue rounded-md p-6 transition hover:scale-105 flex flex-col justify-between ${styles.fadeIn}`}>
            <div>
                <div className="flex flex-row justify-end mb-6 sm:mb-4">
                    <a
                        className="hover:cursor-pointer ml-1"
                        href={repository}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <Image
                            src={"/github.svg"}
                            alt={"GitHub Logo"}
                            width={30}
                            height={30}
                        />
                    </a>
                    {homepage && (
                        <a
                            className="hover:cursor-pointer ml-1"
                            href={homepage}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Image
                                src={"/external-link.svg"}
                                alt={"External Link"}
                                width={30}
                                height={30}
                            />
                        </a>
                    )}
                </div>
                <div>
                    <p className="paragraph capitalize text-lg font-bold">{name.replaceAll('-', ' ')}</p>
                    <p className="paragraph text-sm">{description}</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                    <span
                        key={index}
                        className="text-xs text-background bg-secondary py-1 px-2 rounded-full"
                    >
                        {topic}
                    </span>
                ))}
            </div>
        </div>
    );
}
