// src/app/work/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { fetchPosts } from '@/lib/fetchPosts';
import WorkContent from "@/components/WorkContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { Post } from '../../../types';
import "../style/globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";

const WorkPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchWorkPosts = async () => {
      try {
        const allPosts = await fetchPosts();
        const workPosts = allPosts.filter(post =>
          post.categories?.some(cat => cat.title.toLowerCase() === 'work')
        );
        setPosts(workPosts);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchWorkPosts();
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
        <WorkContent posts={posts} />
      </Container>
      <Footer />
    </>
  );
};

export default WorkPage;
