import SectionHeading from "@components/resume/section-heading";
import type { ResumeSkill } from "@lib/types/resume";
import type { JSX } from "react";

export default function Skills({ skills }: { skills: ResumeSkill[] }): JSX.Element {
    return (
        <section aria-labelledby="skills-heading">
            <SectionHeading id="skills-heading">Skills</SectionHeading>
            <div className="grid gap-6">
                {skills.map(skill => (
                    <article key={skill.name}>
                        <h3 className="text-xl">{skill.name}</h3>
                        <p className="text-secondary">{skill.keywords.join(", ")}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
