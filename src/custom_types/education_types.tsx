export namespace IEducation {
  export interface EduClassName {
    klassName: string;
    url: string;
  }
  export interface EducationItem {
    degree: string;
    gradDate: string;
    klassNames: EduClassName[];
    extras: string[];
  }
}
