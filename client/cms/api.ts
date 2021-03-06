import { client } from 'cms/sanity';

const postFields = `
  title,
  _id,
  slug,
  intro,
  content,
  publishedAt,
  author->{name},
  categories[]->{_id,title}
`;

export const getAbout = async () => {
  const data = await client.fetch(`*[_type == "global"]{about}`);
  return data[0];
};

export const get404 = async () => {
  const data = await client.fetch(`*[_type == "global"]{custom404}`);
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
