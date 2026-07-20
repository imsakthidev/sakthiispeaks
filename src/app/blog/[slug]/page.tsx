import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Navbar from '@/components/Navbar/Navbar';
import BlogAnimationWrapper from '@/components/BlogAnimationWrapper';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import styles from '../blog.module.css';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: `${post.title} | Sakthi Speaks`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Navbar />
      
      <BlogAnimationWrapper>
        <article className={`container ${styles.postArticle}`}>
          <Link 
            href="/blog" 
            className={styles.backLink}
          >
            <ArrowLeft size={16} />
            {post.language === 'en' ? 'Back to Blog' : 'வலைப்பதிவுக்குத் திரும்பு'}
          </Link>
          
          <header className={styles.postHeader}>
            <h1 className={styles.postTitle}>
              {post.title}
            </h1>
            <div className={styles.postMeta}>
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
          </header>

          <div className={styles.content}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </BlogAnimationWrapper>
    </main>
  );
}
