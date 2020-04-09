export namespace IImagePanel {
    export interface ImagePanelProps {
        photoList: string[];
        captionTags: (string | undefined)[];
    }

    export interface ImagePanelProperties {
        duration: number;
        transitionDuration: number;
        infinite: boolean;
        indicators: boolean;
        pauseOnHover: boolean;
    }
}
