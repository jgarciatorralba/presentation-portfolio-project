import resumeData from "@assets/texts/resume/resume.json";
import type { ResumeData } from "@lib/types/resume";
import type { JSX } from "react";
import Certificates from "./sections/certificates";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Languages from "./sections/languages";
import ResumeSidebar from "./sections/resume-sidebar";
import Skills from "./sections/skills";

const data: ResumeData = resumeData;

export default function Resume(): JSX.Element {
    return (
        <main id="main-content" tabIndex={-1} className="section-container px-6">
            <div className="grid gap-20 lg:grid-cols-[300px_minmax(0,2fr)] resume-divider">
                <ResumeSidebar basics={data.basics} />

                <div className="grid gap-20">
                    <Experience work={data.work} />
                    <Education education={data.education} />
                    <Skills skills={data.skills} />
                    <Languages languages={data.languages} />
                    <Certificates certificates={data.certificates} />
                </div>
            </div>
        </main>
    );
}
