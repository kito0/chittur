import { GetStaticProps } from 'next';

import { getAbout, getPosts } from 'cms/api';
import { Link, Markdown } from 'components';

const Home = ({ about, posts }: { about: string; posts: IPost[] }) => {
  return (
    <section>
      <div className='container'>
        <h2>About</h2>
        <Markdown>{about}</Markdown>
        <h2>Some Posts</h2>
        <ul>
          {posts?.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post.slug?.current}`}>{post.title}</Link>
              <div style={{ margin: '1rem 0 1.5rem' }}>
                <Markdown>{post.intro}</Markdown>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { about } = await getAbout();
  const posts = await getPosts();

  return {
    props: {
      about: about || null,
      posts: posts || null,
    },
    revalidate: 1,
  };
};

export default Home;
