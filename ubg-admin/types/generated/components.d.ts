import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAboutUsCommitment extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_commitments';
  info: {
    description: '';
    displayName: 'AboutUsCommitmentSection';
  };
  attributes: {
    items: Schema.Attribute.Component<'about-us.commitment-item', true>;
  };
}

export interface AboutUsAboutUsDevelopment extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_developments';
  info: {
    displayName: 'AboutUsDevelopment';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutUsAboutUsDevelopmentSection
  extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_development_sections';
  info: {
    displayName: 'AboutUsDevelopmentSection';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutUsAboutUsMission extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_missions';
  info: {
    description: '';
    displayName: 'AboutUsMissionSection';
  };
  attributes: {
    items: Schema.Attribute.Component<'about-us.mission-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutUsAboutUsValue extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_values';
  info: {
    displayName: 'AboutUsValue';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'about-us.about-us-value-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutUsAboutUsValueItem extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_value_items';
  info: {
    displayName: 'AboutUsValueItem';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutUsAboutUsValueSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_us_value_sections';
  info: {
    displayName: 'AboutUsValueSection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'about-us.about-us-value-item', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutUsCommitment extends Struct.ComponentSchema {
  collectionName: 'components_about_us_commitments';
  info: {
    displayName: 'Commitment';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface AboutUsCommitmentItem extends Struct.ComponentSchema {
  collectionName: 'components_about_us_commitment_items';
  info: {
    description: '';
    displayName: 'AboutUsCommitmentItem';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutUsMission extends Struct.ComponentSchema {
  collectionName: 'components_about_us_missions';
  info: {
    description: '';
    displayName: 'Mission';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    index: Schema.Attribute.BigInteger & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface AboutUsMissionItem extends Struct.ComponentSchema {
  collectionName: 'components_about_us_mission_items';
  info: {
    description: '';
    displayName: 'AboutUsMissionItem';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    index: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutUsValue extends Struct.ComponentSchema {
  collectionName: 'components_about_us_values';
  info: {
    displayName: 'Value';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPricing extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricings';
  info: {
    description: '';
    displayName: 'Pricing';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.JSON;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    value: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedPrimaryFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_primary_features';
  info: {
    displayName: 'PrimaryFeature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSecondaryFeature extends Struct.ComponentSchema {
  collectionName: 'components_shared_secondary_features';
  info: {
    displayName: 'SecondaryFeature';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    summary: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.Text & Schema.Attribute.Required;
    position: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.about-us-commitment': AboutUsAboutUsCommitment;
      'about-us.about-us-development': AboutUsAboutUsDevelopment;
      'about-us.about-us-development-section': AboutUsAboutUsDevelopmentSection;
      'about-us.about-us-mission': AboutUsAboutUsMission;
      'about-us.about-us-value': AboutUsAboutUsValue;
      'about-us.about-us-value-item': AboutUsAboutUsValueItem;
      'about-us.about-us-value-section': AboutUsAboutUsValueSection;
      'about-us.commitment': AboutUsCommitment;
      'about-us.commitment-item': AboutUsCommitmentItem;
      'about-us.mission': AboutUsMission;
      'about-us.mission-item': AboutUsMissionItem;
      'about-us.value': AboutUsValue;
      'shared.faq': SharedFaq;
      'shared.media': SharedMedia;
      'shared.pricing': SharedPricing;
      'shared.primary-feature': SharedPrimaryFeature;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.secondary-feature': SharedSecondaryFeature;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
