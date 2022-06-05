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
  _id?: string;
  name: string;
}

interface Category {
  _id?: string;
  title: string;
}

interface Content {
  _key?: string;
  _type?: string;
  title?: string;
  content: string;
}
interface IPost {
  name: string;
  title: string;
  slug: { current: string };
  _id?: string;
  author: Author;
  mainImage: object;
  categories: Category[];
  intro: string;
  content: [Content];
  publishedAt: string;
}
