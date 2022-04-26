export namespace IExperience {
  export interface DurationExp {
    startDate: string;
    endDate: string;
  }
  export interface ExperienceRole {
    title: string;
    location: string;
    duration: DurationExp;
    company_logo: string;
    info_url: string;
    key_tech: string[];
  }
}
