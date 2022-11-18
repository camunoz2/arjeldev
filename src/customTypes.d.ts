export interface ProjectFrontmatter {
  title: string;
  subtitle: string;
  slug: string;
  publishDate: string;
  summary: string;
  cardColor: string;
  projectLink?: string;
  githubLink?: string;
  usedStack?: string[];
  portraitProjectImage?: string;
  landscapeProjectImages?: string[];
  featuredImage: string;
}

export interface BlogFrontmatter {
  title: string;
  slug: string;
  publishDate: string;
  summary: string;
  cardColor: string;
  featuredImage: string;
}
