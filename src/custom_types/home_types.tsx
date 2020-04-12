export namespace IHome {
    export interface HomeItem {
        component: JSX.Element;
        heading: string;
    }

    export interface FadeInSectionProps {
        tab: string;
        children?: JSX.Element;
    }
}
