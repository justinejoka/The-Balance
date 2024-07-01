// src/app/business/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { fetchPosts } from '@/lib/fetchPosts';
import BusinessContent from "@/components/BusinessContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import { Post } from '../../../types';
import "../style/globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";

const BusinessPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBusinessPosts = async () => {
      try {
        const allPosts = await fetchPosts();
        const businessPosts = allPosts.filter(post =>
          post.categories?.some(cat => cat.title.toLowerCase() === 'business')
        );
        setPosts(businessPosts);
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchBusinessPosts();
  }, []);

  if (error) {
    console.error('Error fetching posts:', error);
    return <div>Error fetching posts</div>;
  }

  return (
    <>

      <Navbar />
      
      <Container className="bg-gray-100 dark:bg-gray-900 py-20 px-10 flex flex-col gap-10">
        <BusinessContent posts={posts} />
      </Container>
      <Footer />
    </>
  );
};

export default BusinessPage;
