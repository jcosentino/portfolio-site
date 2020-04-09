export namespace IExperience {
    export interface ExperienceRole {
        title: string;
        location: string;
        duration: DurationExp;
        company_logo: string;
        info_url: string;
        key_tech: string[];
    }

    export interface DurationExp {
        startDate: string;
        endDate: string;
    }
}
