interface LayoutProps {
  children: React.ReactNode;
}

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  children: React.ReactNode;
}

interface SanityConfig {
  dataset: string;
  projectId: string;
  useCdn: boolean;
  apiVersion: string;
}

interface Author {
  name: string;
}

interface IPost {
  name: string;
  title: string;
  slug: { current: string };
  author: Author;
  mainImage: object;
  categories: string[];
  publishedAt: string;
  body: TypedObject | TypedObject[];
  bodymd: string;
}
