import styles from "@styles/components/sections/projects/projectCard.module.css";
import Image from "next/image";
import { ProjectCardProps } from "projects";
import { JSX } from "react";

export default function ProjectCard({
    name,
    description,
    topics,
    repository,
    homepage,
    animateIn = false,
    animationDelayMs = 0,
}: ProjectCardProps): JSX.Element {
    return (
        <div
            className={`bg-blue hover:bg-blue rounded-md p-6 transition hover:scale-105 flex flex-col justify-between ${animateIn ? styles.fadeIn : ""}`}
            style={animateIn ? { animationDelay: `${animationDelayMs}ms` } : undefined}
        >
            <div>
                <div className="flex flex-row justify-end mb-6 sm:mb-4">
                    <a
                        className="hover:cursor-pointer ml-1"
                        href={repository}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label={`View ${name} source code on GitHub (opens in a new tab)`}
                    >
                        <Image
                            src={"/github.svg"}
                            alt=""
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
                            aria-label={`Visit ${name} website (opens in a new tab)`}
                        >
                            <Image
                                src={"/external-link.svg"}
                                alt=""
                                width={30}
                                height={30}
                            />
                        </a>
                    )}
                </div>
                <div>
                    <p className="paragraph capitalize text-lg font-bold">{name.replaceAll('-', ' ')}</p>
                    <p className={`paragraph text-sm ${styles.descriptionParagraph}`}>{description}</p>
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
