import Link from 'next/link';
import { LinkProps } from 'ts';

export const LinkWrapper = (props: LinkProps) => {
  const { href, children, ...rest } = props;

  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};
