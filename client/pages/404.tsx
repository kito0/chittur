import { GetStaticProps } from 'next';

import { get404 } from 'cms/api';
import { Markdown } from 'components';

const Custom404 = ({ message }: { message: Content }) => {
  return (
    <section>
      <div className='container'>
        <Markdown>{message.content}</Markdown>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const message = await get404();

  return {
    props: {
      message,
    },
    revalidate: 10,
  };
};

export default Custom404;
