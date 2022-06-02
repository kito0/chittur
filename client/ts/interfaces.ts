export interface LayoutProps {
  children: React.ReactNode;
}

export interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  children: React.ReactNode;
}
