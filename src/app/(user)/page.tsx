

import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import { ThemeToggle } from "@/components/ThemeToggle";


export const revalidate = 30;
const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    
    <main>
      
      
        <Hero />
      
        <BlogContent posts={posts} />


    </main>
    
  );
}
