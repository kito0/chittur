import { GetStaticProps } from 'next';

import { getPosts } from 'cms/api';
import { Link, Markdown } from 'components';

const Home = ({ posts }: { posts: IPost[] }) => {
  return (
    <section>
      <div className='container'>
        <h2>About</h2>
        <p>
          Hi. I&#39;m Krishna Chittur. At the moment, I&#39;m working at{' '}
          <Link href='https://www.duolingo.com/'>Duolingo</Link> as a software
          engineer. Before that, I was doing an MS in Computer Science at
          Carnegie Mellon University.
        </p>
        <p>
          <Link href='/resume.pdf'>Here&#39;s</Link> my resume.{' '}
          <Link href='https://github.com/krishnachittur'>Here&#39;s</Link> my
          GitHub page. And <Link href='/id_rsa.pub'>here&#39;s</Link> my pubkey.
        </p>
        <p>
          My email address is krishna@chittur.dev. For an alternative email
          address, see my resume.
        </p>

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
  const posts = await getPosts();

  return {
    props: {
      posts: posts || null,
    },
    revalidate: 1,
  };
};

export default Home;
