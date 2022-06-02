import { LayoutProps } from 'ts';

import { Nav } from 'components';

export const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};
