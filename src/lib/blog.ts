import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  language: string;
  excerpt: string;
  image?: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  // Check if directory exists, if not return empty array
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        language: matterResult.data.language || 'en',
        excerpt: matterResult.data.excerpt || '',
        image: matterResult.data.image || null,
        content: matterResult.content,
      } as BlogPost;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}
