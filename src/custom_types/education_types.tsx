export namespace IEducation {
    export interface EducationItem {
        degree: string;
        grad_date: string;
        class_names: EduClassName[];
        extras: string[];
    }

    export interface EduClassName {
        class_name: string;
        url: string;
    }
}
