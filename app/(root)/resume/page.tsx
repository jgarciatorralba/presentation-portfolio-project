import resumeData from "@assets/texts/resume/resume.json";
import { oranienbaum } from "@lib/fonts";
import Image from "next/image";
import { JSX } from "react";

type ResumeDate = {
    startDate?: string;
    endDate?: string;
};

function formatDate(date?: string): string {
    if (!date) {
        return "Present";
    }

    const [year, month] = date.split("-");
    return month ? `${month}/${year}` : year;
}

function DateRange({ startDate, endDate }: ResumeDate): JSX.Element {
    return (
        <p className="text-sm text-primary">
            {formatDate(startDate)} - {formatDate(endDate)}
        </p>
    );
}

export default function Resume(): JSX.Element {
    const { basics, work, education, certificates, skills, languages } = resumeData;

    return (
        <main id="main-content" tabIndex={-1} className="section-container">
            <div className="grid gap-12 lg:grid-cols-[300px_minmax(0,2fr)]">
                <aside className="lg:sticky lg:top-32 lg:self-start">
                    <Image
                        src="/pic-resume.png"
                        alt={basics.name}
                        width={300}
                        height={300}
                        className="mb-6 aspect-square w-75 max-w-full rounded-lg object-cover"
                        priority
                    />
                    <h1 className={`header mb-2 ${oranienbaum.className}`}>
                        {basics.name}
                    </h1>
                    <p className="paragraph">{basics.summary}</p>

                    <address className="mb-2 not-italic">
                        {basics.location.city}, {basics.location.countryCode}
                    </address>

                    <div className="grid gap-2">
                        <a href={basics.url} target="_blank" rel="noopener noreferrer">{basics.url}</a>
                        {basics.profiles.map(profile => (
                            <a key={profile.network} href={profile.url} target="_blank" rel="noopener noreferrer">
                                {profile.network}: {profile.username}
                            </a>
                        ))}
                    </div>

                    <a
                        href="/resume.pdf"
                        download
                        className="btn mx-auto! my-4 flex w-fit items-center gap-2 no-underline!"
                        aria-label="Download resume PDF"
                    >
                        <Image src="/download.svg" alt="" width={24} height={24} />
                        Download
                    </a>
                </aside>

                <div className="grid gap-12">
                    <section aria-labelledby="experience-heading">
                        <h2 id="experience-heading" className={`header ${oranienbaum.className}`}>Experience</h2>
                        <div className="grid gap-8">
                            {work.map(job => (
                                <article key={`${job.name}-${job.startDate}`}>
                                    <h3 className="text-2xl mb-2">
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
                                            {job.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                                        </ul>
                                    )}
                                </article>
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="education-heading">
                        <h2 id="education-heading" className={`header ${oranienbaum.className}`}>Education</h2>
                        <div className="grid gap-8">
                            {education.map(item => (
                                <article key={`${item.institution}-${item.startDate}`}>
                                    <h3 className="text-2xl">{item.area}</h3>
                                    <p className="text-lg text-secondary">{item.studyType}, {item.institution}</p>
                                    <DateRange startDate={item.startDate} endDate={item.endDate} />
                                    {item.courses?.map(course => <p className="mt-3" key={course}>{course}</p>)}
                                </article>
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="skills-heading">
                        <h2 id="skills-heading" className={`header ${oranienbaum.className}`}>Skills</h2>
                        <div className="grid gap-6">
                            {skills.map(skill => (
                                <article key={skill.name}>
                                    <h3 className="text-xl">{skill.name}</h3>
                                    <p>{skill.keywords.join(", ")}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section aria-labelledby="languages-heading">
                        <h2 id="languages-heading" className={`header ${oranienbaum.className}`}>Languages</h2>
                        <ul className="grid gap-2">
                            {languages.map(language => (
                                <li key={language.language}>
                                    <strong>{language.language}</strong>: {language.fluency}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section aria-labelledby="certificates-heading">
                        <h2 id="certificates-heading" className={`header ${oranienbaum.className}`}>Certificates</h2>
                        <div className="grid gap-4">
                            {certificates.map(certificate => (
                                <article key={certificate.name}>
                                    <h3 className="text-xl">{certificate.name}</h3>
                                    <p>{certificate.issuer} ({formatDate(certificate.date)})</p>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
