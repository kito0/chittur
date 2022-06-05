import { client } from 'cms/sanity';

export const getHomeData = async () => {
  const data = await client.fetch(`*[_type == "home"]`);
  return data[0];
};

export const getPosts = async () => {
  const data = await client.fetch(`*[_type == "post"]`);
  return data;
};

export const getPost = async (slug: string) => {
  const data = await client.fetch(
    `*[_type == "post" && slug.current == $slug]`,
    { slug }
  );
  return data[0];
};
