type ImageType = {
    data : {
        attributes: {
            url: string;
        }
    }
}

type CtaType = {
    label: string;
    link: string;
}

export type HeroType = {
    title: string;
    subtitle: string;
    description: string;
    image: ImageType
    cta: CtaType[]
}