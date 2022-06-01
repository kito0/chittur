import type { AppProps } from 'next/app';
import 'styles/globals.css';

import { DefaultLayout } from 'layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default App;
