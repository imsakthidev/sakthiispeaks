import React from 'react';
import styles from './Skills.module.css';

const skillsData = [
  { category: 'Programming', items: ['JavaScript', 'TypeScript', 'Node.js', 'Flutter', 'Electron'] },
  { category: 'AI & Data', items: ['Local LLMs', 'Ollama', 'Prompt Engineering', 'AI Automation'] },
  { category: 'Database & Tools', items: ['SQLite', 'MongoDB', 'Firebase', 'Git', 'Docker'] },
  { category: 'Content Creation', items: ['Script Writing', 'Video Editing', 'Public Speaking', 'Storytelling'] }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Skills</h2>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.grid}>
          {skillsData.map((skillGroup, index) => (
            <div key={index} className={styles.skillGroup}>
              <h3 className={styles.categoryTitle}>{skillGroup.category}</h3>
              <div className={styles.skillList}>
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className={styles.skillBadge}>
                    <div className={styles.skillDot}></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
