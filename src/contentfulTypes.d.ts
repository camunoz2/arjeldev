export interface FeaturedImage {
  metadata: Metadata;
  sys: Sys;
  fields: Fields;
}
export interface Metadata {
  tags: any[];
}

export interface Sys2 {
  type: string;
  linkType: string;
  id: string;
}

export interface Space {
  sys: Sys2;
}

export interface Sys3 {
  id: string;
  type: string;
  linkType: string;
}

export interface Environment {
  sys: Sys3;
}

export interface Sys {
  space: Space;
  type: string;
  id: string;
  revision: number;
  createdAt: Date;
  updatedAt: Date;
  environment: Environment;
  locale: string;
}

export interface Image {
  width: number;
  height: number;
}

export interface Details {
  size: number;
  image: Image;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Fields {
  title: string;
  description: string;
  file: File;
}

export interface Metadata2 {
  tags: any[];
}

export interface Sys5 {
  type: string;
  linkType: string;
  id: string;
}

export interface Space2 {
  sys: Sys5;
}

export interface Sys6 {
  id: string;
  type: string;
  linkType: string;
}

export interface Environment2 {
  sys: Sys6;
}

export interface Sys4 {
  space: Space2;
  type: string;
  id: string;
  revision: number;
  createdAt: Date;
  updatedAt: Date;
  environment: Environment2;
  locale: string;
}

export interface Image2 {
  width: number;
  height: number;
}

export interface Details2 {
  size: number;
  image: Image2;
}

export interface File2 {
  url: string;
  details: Details2;
  fileName: string;
  contentType: string;
}

export interface Fields2 {
  title: string;
  description: string;
  file: File2;
}

export interface Image {
  metadata: Metadata2;
  sys: Sys4;
  fields: Fields2;
}

export interface Project {
  title: string;
  subtitle?: any;
  slug: string;
  publishDate: Date;
  summary: string;
  featuredImage: FeaturedImage;
  cardColor: string;
  body: string;
  portraitProjectImage: Image;
  landscapeProjectImages: Image[];
  projectLink: string;
  usedStack: string[];
  githubLink: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  publishDate: Date;
  featuredImage: FeaturedImage;
  cardColor: string;
  body: string;
  summary: string;
}
