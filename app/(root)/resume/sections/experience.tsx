import DateRange from "@components/resume/date-range";
import SectionHeading from "@components/resume/section-heading";
import type { ResumeWork } from "@lib/types/resume";
import type { JSX } from "react";

export default function Experience({ work }: { work: ResumeWork[] }): JSX.Element {
    return (
        <section aria-labelledby="experience-heading">
            <SectionHeading id="experience-heading">Experience</SectionHeading>
            <div className="grid gap-8">
                {work.map(job => (
                    <article key={`${job.name}-${job.startDate}`}>
                        <h3 className="mb-2 text-2xl">
                            <a
                                className="text-vividBlue underline decoration-2 underline-offset-2"
                                href={job.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {job.name}
                            </a>
                        </h3>
                        <p className="text-xl text-secondary">{job.position}</p>
                        <DateRange startDate={job.startDate} endDate={job.endDate} />
                        <p className="mt-3">{job.summary}</p>
                        {job.highlights && (
                            <ul className="mt-3 list-disc pl-5">
                                {job.highlights.map((highlight, index) => (
                                    <li key={`${job.name}-${job.startDate}-highlight-${index}`}>{highlight}</li>
                                ))}
                            </ul>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}
