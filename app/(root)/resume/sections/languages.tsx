import SectionHeading from "@components/resume/section-heading";
import type { ResumeLanguage } from "@lib/types/resume";
import type { JSX } from "react";

export default function Languages({ languages }: { languages: ResumeLanguage[] }): JSX.Element {
    return (
        <section aria-labelledby="languages-heading">
            <SectionHeading id="languages-heading">Languages</SectionHeading>
            <ul className="grid gap-2">
                {languages.map(language => (
                    <li key={language.language}>
                        <strong>{language.language}</strong>: {language.fluency}
                    </li>
                ))}
            </ul>
        </section>
    );
}
