"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import styles from './Projects.module.css';

const projectsData = [
  {
    id: 1,
    title: 'Sakthi Speaks Digital',
    description: 'My official digital agency and consulting portfolio built with Next.js and Vercel.',
    tech: ['React', 'Next.js', 'Vercel'],
    demo: 'https://sakthiispeaks.vercel.app'
  },
  {
    id: 2,
    title: 'Electricals',
    description: 'A dedicated project for an electricals business, featuring a modern UI and responsive design.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    demo: 'https://sakthivelelectricals.vercel.app/'
  },
  {
    id: 3,
    title: 'Sakthi\'s Bakery',
    description: 'A delightful web application for a bakery, showcasing products and services with an elegant interface.',
    tech: ['React', 'CSS', 'JavaScript'],
    demo: 'https://imsakthidev.github.io/Sakthi-s-Bakery/'
  },
  {
    id: 4,
    title: 'Wedding Website',
    description: 'An interactive and beautifully designed digital wedding invitation platform.',
    tech: ['React', 'Next.js', 'Vercel'],
    demo: 'https://sakthiwedsdivya.vercel.app/'
  }
];

export default function Projects() {
  const { t } = useLanguage();
  const [projects, setProjects] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const q = query(collection(db, 'projects'), orderBy('order', 'asc'), limit(6));
        const snap = await getDocs(q);
        if (!snap.empty) {
          setProjects(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else {
          setProjects(projectsData);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects(projectsData);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('projects.title')}</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.grid}>
          {loading ? (
            <div style={{ textAlign: 'center', width: '100%', color: '#9ca3af', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading projects...</div>
          ) : (
            projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <div className={styles.folderIcon}>📁</div>
                    <div className={styles.cardLinks}>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>

                  <div className={styles.techStack}>
                    {project.tech && (Array.isArray(project.tech) ? project.tech : (project.tech as string).split(',')).map((tech: string, i: number) => (
                      <span key={i} className={styles.techBadge}>{tech.trim()}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>


      </div>
    </section>
  );
}
