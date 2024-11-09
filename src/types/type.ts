import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export type Projects = {
  id: number;
  title: string;
  roles: string[];
  technologies?: string[];
  year: string;
  position?: string;
  size?: string;
  marginBottom?: string;
  padding?: string;
  website?: string;
  github?: string;
  duration?: string;
  description1?: string[];
  description2?: string[];
  mainImage?: StaticImageData;
  mainImageAlt?: string | undefined;
  introImage?: StaticImageData;
  imagesMiddle?: StaticImageData[];
  imagesOutro?: StaticImageData[];
  imagesLandscape?: ImageArray[];
  imagesPortrait?: ImageArray[];
};

type ImageArray = {
  image: StaticImageData;
  alt: string
}

export type Resume = {
  category: string;
  list: List[];
};

export type List = {
  institution: string;
  duration: string;
  primary_qualification: string | null;
  primary_concentration: string | null;
  secondary_qualification: string | null;
  secondary_concentration: string | null;
  role: string | null;
  location: string;
};

export type Services = {
  id: number;
  title: string;
  technologies: string[];
  description: string;
  image?: StaticImageData;
};

export type ContactForm = {
  name: string;
  email: string;
  message: string;
}