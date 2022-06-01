import type { AppProps } from 'next/app';
import 'styles/main.scss';

import { DefaultLayout } from 'layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default App;
