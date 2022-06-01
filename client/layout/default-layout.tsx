import { Layout } from 'ts';

import { Nav } from 'components';

export const DefaultLayout = ({ children }: Layout) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};
