import React from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import styles from './Skills.module.css';

const skillsData = [
  { category: 'Programming', items: ['JavaScript', 'TypeScript', 'Node.js', 'Flutter', 'Electron'] },
  { category: 'AI & Data', items: ['Local LLMs', 'Ollama', 'Prompt Engineering', 'AI Automation'] },
  { category: 'Database & Tools', items: ['SQLite', 'MongoDB', 'Firebase', 'Git', 'Docker'] },
  { category: 'Content Creation', items: ['Script Writing', 'Video Editing', 'Public Speaking', 'Storytelling'] }
];

export default function Skills() {
  const [skills, setSkills] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchSkills = async () => {
      try {
        const q = query(collection(db, 'skills'), orderBy('order', 'asc'));
        const snap = await getDocs(q);
        if (!snap.empty) {
          setSkills(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } else {
          setSkills(skillsData);
        }
      } catch (error) {
        console.error("Error fetching skills:", error);
        setSkills(skillsData);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section id="skills" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Skills</h2>
          <div className={styles.line}></div>
        </div>
        
        <div className={styles.grid}>
          {loading ? (
             <div style={{ textAlign: 'center', width: '100%', color: '#9ca3af', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading skills...</div>
          ) : (
            skills.map((skillGroup, index) => (
              <div key={index} className={styles.skillGroup}>
                <h3 className={styles.categoryTitle}>{skillGroup.category}</h3>
                <div className={styles.skillList}>
                  {skillGroup.items && (Array.isArray(skillGroup.items) ? skillGroup.items : (skillGroup.items as string).split(',')).map((skill: string, i: number) => (
                    <div key={i} className={styles.skillBadge}>
                      <div className={styles.skillDot}></div>
                      {skill.trim()}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
