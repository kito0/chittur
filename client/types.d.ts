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

interface Content {
  _key: string;
  _type: string;
}

interface Markdown {
  title?: string;
  content: string;
}

interface Accordion {
  title: string;
  content: string;
}

interface MarkdownContent extends Content, Markdown {}
interface AccordionContent extends Content, Accordion {}
interface IPost {
  name: string;
  title: string;
  slug: { current: string };
  author: Author;
  mainImage: object;
  categories: string[];
  publishedAt: string;
  content: [MarkdownContent | AccordionContent];
}
