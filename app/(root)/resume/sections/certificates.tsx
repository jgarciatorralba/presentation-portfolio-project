import { formatResumeDate } from "@lib/formatters/formatResumeDate";
import type { ResumeCertificate } from "@lib/types/resume";
import Image from "next/image";
import type { JSX } from "react";
import SectionHeading from "@components/resume/section-heading";

export default function Certificates({ certificates }: { certificates: ResumeCertificate[] }): JSX.Element {
    return (
        <section aria-labelledby="certificates-heading">
            <SectionHeading id="certificates-heading">Certificates</SectionHeading>
            <div className="grid gap-4">
                {certificates.map(certificate => (
                    <article key={certificate.name} className="flex items-center gap-4">
                        <Image
                            src={certificate.icon}
                            alt=""
                            width={56}
                            height={56}
                            className="size-14 shrink-0"
                        />
                        <div>
                            <h3 className="text-xl">
                                <a
                                    href={certificate.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-vividBlue underline decoration-2 underline-offset-2"
                                >
                                    {certificate.name}
                                </a>
                            </h3>
                            <p>{certificate.issuer} ({formatResumeDate(certificate.date)})</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
