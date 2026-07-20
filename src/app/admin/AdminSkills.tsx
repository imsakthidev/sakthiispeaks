import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs, doc, deleteDoc, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import styles from './Admin.module.css';

export default function AdminSkills() {
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newSkill, setNewSkill] = useState({ category: '', items: '', order: 0 });

  const fetchSkills = async () => {
    try {
      const q = query(collection(db, 'skills'), orderBy('order', 'asc'));
      const snap = await getDocs(q);
      setSkills(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error fetching skills:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'skills'), newSkill);
      setNewSkill({ category: '', items: '', order: 0 });
      fetchSkills();
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("Error adding skill");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this skill category?")) return;
    try {
      await deleteDoc(doc(db, 'skills', id));
      fetchSkills();
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  if (loading) return <div>Loading skills...</div>;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Manage Skills</h2>
      
      <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px', background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
        <input required type="text" placeholder="Category (e.g. Programming)" value={newSkill.category} onChange={e => setNewSkill({...newSkill, category: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #374151', background: '#111827', color: 'white' }} />
        <input required type="text" placeholder="Skills (comma separated, e.g. React, Node.js)" value={newSkill.items} onChange={e => setNewSkill({...newSkill, items: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #374151', background: '#111827', color: 'white' }} />
        <input required type="number" placeholder="Order (e.g. 1)" value={newSkill.order} onChange={e => setNewSkill({...newSkill, order: Number(e.target.value)})} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #374151', background: '#111827', color: 'white' }} />
        <button type="submit" className={styles.approveBtn} style={{ background: '#10b981', alignSelf: 'flex-start', padding: '10px 20px' }}>Add Skill Category</button>
      </form>

      {skills.length === 0 ? (
        <div className={styles.empty}>No skills found.</div>
      ) : (
        <div className={styles.list}>
          {skills.map(skill => (
            <div key={skill.id} className={styles.card}>
              <div className={styles.content}>
                <div className={styles.itemTitle}>{skill.category} (Order: {skill.order})</div>
                <div className={styles.itemText} style={{ fontSize: '0.8rem', opacity: 0.7 }}>Skills: {skill.items}</div>
              </div>
              <div className={styles.actions}>
                <button onClick={() => handleDelete(skill.id)} className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
