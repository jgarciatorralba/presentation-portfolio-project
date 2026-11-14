export interface ResumeProfile {
    network: string;
    username: string;
    url: string;
}

export interface ResumeBasics {
    name: string;
    summary: string;
    url: string;
    location: {
        city: string;
        countryCode: string;
    };
    profiles: ResumeProfile[];
}

export interface ResumeWork {
    name: string;
    url: string;
    position: string;
    startDate: string;
    endDate?: string;
    summary: string;
    highlights?: string[];
}

export interface ResumeEducation {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate?: string;
    courses?: string[];
}

export interface ResumeSkill {
    name: string;
    keywords: string[];
}

export interface ResumeLanguage {
    language: string;
    fluency: string;
}

export interface ResumeCertificate {
    name: string;
    issuer: string;
    date: string;
    url: string;
    icon: string;
}

export interface ResumeData {
    basics: ResumeBasics;
    work: ResumeWork[];
    education: ResumeEducation[];
    certificates: ResumeCertificate[];
    skills: ResumeSkill[];
    languages: ResumeLanguage[];
}
