import { client } from './createClient';
import { Post } from '../../types';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const posts = await client.fetch(`*[_type == "post"]{
      _id,
      title,
      slug,
      mainImage,
      description,
      _createdAt,
      author->{
        name,
        image
      },
      categories[]->{
        _id,
        title
      }
    }`);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};
