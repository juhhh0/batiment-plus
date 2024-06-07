import { BlocksContent } from "@strapi/blocks-react-renderer";

type ImageType = {
    data : {
        attributes: {
            url: string;
        }
    }
}

export type ButtonType = {
    id: number;
    label: string;
    link: string;
}

export type HeroType = {
    title: string;
    subtitle?: string;
    description?: string;
    image: ImageType
    cta?: ButtonType[]
}

export type NavbarType = {
    logo: ImageType;
    links: ButtonType[];
}

export type TextAndImageType = {
    titleBlock?: string;
    image: ImageType;
    imagePosition: string;
    text: BlocksContent;
    cta?: ButtonType;
}