import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksIcones extends Schema.Component {
  collectionName: 'components_blocks_icones';
  info: {
    displayName: 'Icones';
    icon: 'chartPie';
    description: '';
  };
  attributes: {
    icones: Attribute.Component<'ui.icone-text', true>;
    titleBlock: Attribute.String;
  };
}

export interface BlocksTexteAndImage extends Schema.Component {
  collectionName: 'components_blocks_texte_and_images';
  info: {
    displayName: 'Texte & Image';
    icon: 'picture';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    text: Attribute.Blocks;
    imagePosition: Attribute.Enumeration<['gauche', 'droite']> &
      Attribute.Required &
      Attribute.DefaultTo<'gauche'>;
    cta: Attribute.Component<'ui.boutons'>;
    titleBlock: Attribute.String;
  };
}

export interface BlocksTexteAndTexte extends Schema.Component {
  collectionName: 'components_blocks_texte_and_textes';
  info: {
    displayName: 'Texte & Texte';
    icon: 'write';
    description: '';
  };
  attributes: {
    leftText: Attribute.Blocks;
    leftCta: Attribute.Component<'ui.boutons'>;
    rightText: Attribute.Blocks;
    rightCta: Attribute.Component<'ui.boutons'>;
    titleBlock: Attribute.String;
  };
}

export interface BlocksTexte extends Schema.Component {
  collectionName: 'components_blocks_textes';
  info: {
    displayName: 'Texte';
    icon: 'write';
    description: '';
  };
  attributes: {
    texte: Attribute.Blocks;
    cta: Attribute.Component<'ui.boutons', true>;
    titleBlock: Attribute.String;
  };
}

export interface UiBoutons extends Schema.Component {
  collectionName: 'components_ui_boutons';
  info: {
    displayName: 'Boutons';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
  };
}

export interface UiHero extends Schema.Component {
  collectionName: 'components_ui_heroes';
  info: {
    displayName: 'Hero';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'ui.boutons', true> &
      Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface UiIconeText extends Schema.Component {
  collectionName: 'components_ui_icone_texts';
  info: {
    displayName: 'Icone + Text';
    icon: 'star';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.icones': BlocksIcones;
      'blocks.texte-and-image': BlocksTexteAndImage;
      'blocks.texte-and-texte': BlocksTexteAndTexte;
      'blocks.texte': BlocksTexte;
      'ui.boutons': UiBoutons;
      'ui.hero': UiHero;
      'ui.icone-text': UiIconeText;
    }
  }
}
