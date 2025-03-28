declare module "experiences" {
    interface Company {
        name: string;
        url: string;
    };

    interface Dates {
        start: string;
        end: string;
    }

    interface Position {
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
}
