import { getAllPosts } from '@/lib/blog';
import BlogClient from './BlogClient';
import Navbar from '@/components/Navbar/Navbar';
import styles from './blog.module.css';

export const metadata = {
  title: 'Blog | Sakthi Speaks',
  description: 'Digital growth insights, web development tips, and personal branding strategies by Sakthi Speaks.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.blogContainer}>
        <BlogClient posts={posts} />
      </div>
    </main>
  );
}
