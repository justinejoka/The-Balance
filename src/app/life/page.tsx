// src/app/life/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { fetchPosts } from '@/lib/fetchPosts';
import LifeContent from "./LifeContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { Post } from '../../../types';
import "../style/globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";

const LifePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLifePosts = async () => {
      try {
        const allPosts = await fetchPosts();
        const lifePosts = allPosts.filter(post =>
          post.categories?.some(cat => cat.title.toLowerCase() === 'life')
        );
        setPosts(lifePosts);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchLifePosts();
  }, []);

  if (error) {
    console.error('Error fetching posts:', error);
    return <div>Error fetching posts</div>;
  }

  return (
    <>
      <Navbar />
      <ThemeToggle/>
      <Container className="bg-gray-100 dark:bg-gray-900 py-20 px-10 flex flex-col gap-10">
        <LifeContent posts={posts} />
      </Container>
      <Footer />
    </>
  );
};

export default LifePage;
