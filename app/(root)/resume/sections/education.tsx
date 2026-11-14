import DateRange from "@components/resume/date-range";
import SectionHeading from "@components/resume/section-heading";
import type { ResumeEducation } from "@lib/types/resume";
import type { JSX } from "react";

export default function Education({ education }: { education: ResumeEducation[] }): JSX.Element {
    return (
        <section aria-labelledby="education-heading">
            <SectionHeading id="education-heading">Education</SectionHeading>
            <div className="grid gap-8">
                {education.map(item => (
                    <article key={`${item.institution}-${item.startDate}`}>
                        <h3 className="text-2xl">{item.area}</h3>
                        <p className="text-lg text-secondary">{item.studyType}, {item.institution}</p>
                        <DateRange startDate={item.startDate} endDate={item.endDate} />
                        {item.courses?.map((course, index) => (
                            <p className="mt-3" key={`${item.institution}-${item.startDate}-course-${index}`}>{course}</p>
                        ))}
                    </article>
                ))}
            </div>
        </section>
    );
}
