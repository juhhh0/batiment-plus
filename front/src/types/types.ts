import { BlocksContent } from "@strapi/blocks-react-renderer";

export type ImageType = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type ButtonType = {
  id: number;
  label: string;
  link: string;
};

export type HeroType = {
  title: string;
  subtitle?: string;
  description?: string;
  image: ImageType;
  cta?: ButtonType;
};

export type NavbarType = {
  links: ButtonType[];
};

export type TextAndImageType = {
  titleBlock?: string;
  image: ImageType;
  imagePosition: string;
  text: BlocksContent;
  cta?: ButtonType;
};

export type TextAndTextType = {
  titleBlock?: string;
  rightText: BlocksContent;
  leftText: BlocksContent;
  rightCta: ButtonType;
  leftCta: ButtonType;
};

export type TextType = {
  titleBlock?: string;
  texte: BlocksContent;
};

export type IconesTypes = {
  titleBlock?: string;
  icones: {
    icon: ImageType;
    title: string;
    description: string;
  }[];
};



export type GlobalsType = {
  logo: ImageType;
  adress: string;
  email: string;
  phone: string;
};
