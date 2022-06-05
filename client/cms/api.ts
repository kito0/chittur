import { client } from 'cms/sanity';

const postFields = `
  title,
  slug,
  content,
  publishedAt,
  author->{name},
  categories->{title}
`;

export const getHomeData = async () => {
  const data = await client.fetch(`*[_type == "home"]{${postFields}}`);
  return data[0];
};

export const getPosts = async () => {
  const data = await client.fetch(`*[_type == "post"]{${postFields}}`);
  return data;
};

export const getPost = async (slug: string) => {
  const data = await client.fetch(
    `*[_type == "post" && slug.current == $slug]{${postFields}}`,
    { slug }
  );
  return data[0];
};
