import { DateTime } from 'luxon';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import { getPost, getPosts } from 'cms/api';
import { Accordion, Markdown } from 'components';

const Post = ({ post }: { post: IPost }) => {
  return (
    <section>
      <div className='container'>
        {post?.publishedAt && (
          <small>
            {DateTime.fromISO(post.publishedAt).toLocaleString(
              DateTime.DATE_MED
            )}
          </small>
        )}
        <h1 style={{ marginBottom: '1.5rem' }}>{post?.title}</h1>
        <p>by {post?.author.name}</p>
        <Markdown>{post?.intro}</Markdown>
        {post?.content?.map((content) => {
          if (content._type === 'markdown') {
            return <Markdown key={content._key}>{content.content}</Markdown>;
          }
          if (content._type === 'accordion' && content.title) {
            return (
              <Accordion
                key={content._key}
                title={content.title}
                content={content.content}
              />
            );
          }
        })}
        <small>
          tags:{' '}
          {post?.categories?.map((category, idx, arr) => {
            return (
              <>
                <em key={category._id}>{category.title}</em>
                {idx < arr.length - 1 ? ' - ' : ''}
              </>
            );
          })}
        </small>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug);
  const post = await getPost(slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post: post,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths:
      posts?.map((post: IPost) => ({
        params: {
          slug: post.slug.current,
        },
      })) || [],
    fallback: 'blocking',
  };
};

export default Post;
