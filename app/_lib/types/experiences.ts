export interface Company {
    name: string;
    url: string;
}

export interface Dates {
    start: string;
    end: string;
}

export interface Position {
    title: string;
    description: string;
}

export interface ExperienceProps {
    company: Company;
    dates: Dates;
    position: Position;
    features: string[];
}

export type Experiences = Record<string, ExperienceProps>;
