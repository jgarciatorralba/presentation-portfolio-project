declare module "experiences" {
    interface ExperienceDetails {
        companyName: string;
        companyUrl: string;
        position: string;
        startDate: string;
        endDate: string;
        description: string;
        features: string[];
    }

    export type Experiences = Record<string, ExperienceDetails>;
}
