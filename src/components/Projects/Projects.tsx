import React from 'react';
import { ExternalLink, Youtube, Instagram } from 'lucide-react';
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
  },
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Projects</h2>
          <div className={styles.line}></div>
        </div>

        <div className={styles.grid}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.card}>
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
                  {project.tech.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.personalAccounts}>
          <div className={styles.header}>
            <div className={styles.line}></div>
            <h2 className={styles.title}>Personal Accounts</h2>
            <div className={styles.line}></div>
          </div>
          <div className={styles.socialAccountsGrid}>
             <a href="https://www.youtube.com/@sakthiispeaks" target="_blank" rel="noopener noreferrer" className={styles.socialAccountCard}>
                <Youtube size={48} className={styles.socialIcon} />
                <span>@sakthiispeaks</span>
             </a>
             <a href="https://www.instagram.com/sakthiispeaks" target="_blank" rel="noopener noreferrer" className={styles.socialAccountCard}>
                <Instagram size={48} className={styles.socialIcon} />
                <span>@sakthiispeaks</span>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
