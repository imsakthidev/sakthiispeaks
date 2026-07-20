import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs, doc, deleteDoc, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import styles from './Admin.module.css';

export default function AdminProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newProject, setNewProject] = useState({ title: '', description: '', tech: '', demo: '', order: 0 });

  const fetchProjects = async () => {
    try {
      const q = query(collection(db, 'projects'), orderBy('order', 'asc'));
      const snap = await getDocs(q);
      setProjects(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'projects'), newProject);
      setNewProject({ title: '', description: '', tech: '', demo: '', order: 0 });
      fetchProjects();
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Error adding project");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteDoc(doc(db, 'projects', id));
      fetchProjects();
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  if (loading) return <div>Loading projects...</div>;

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Manage Projects</h2>
      
      <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px', background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '8px' }}>
        <input required type="text" placeholder="Project Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #374151', background: '#111827', color: 'white' }} />
        <textarea required placeholder="Description" value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #374151', background: '#111827', color: 'white', minHeight: '80px' }} />
        <input required type="text" placeholder="Technologies (comma separated)" value={newProject.tech} onChange={e => setNewProject({...newProject, tech: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #374151', background: '#111827', color: 'white' }} />
        <input required type="url" placeholder="Demo URL" value={newProject.demo} onChange={e => setNewProject({...newProject, demo: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #374151', background: '#111827', color: 'white' }} />
        <input required type="number" placeholder="Order (e.g. 1)" value={newProject.order} onChange={e => setNewProject({...newProject, order: Number(e.target.value)})} style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #374151', background: '#111827', color: 'white' }} />
        <button type="submit" className={styles.approveBtn} style={{ background: '#10b981', alignSelf: 'flex-start', padding: '10px 20px' }}>Add Project</button>
      </form>

      {projects.length === 0 ? (
        <div className={styles.empty}>No projects found.</div>
      ) : (
        <div className={styles.list}>
          {projects.map(project => (
            <div key={project.id} className={styles.card}>
              <div className={styles.content}>
                <div className={styles.itemTitle}>{project.title} (Order: {project.order})</div>
                <div className={styles.itemText}>{project.description}</div>
                <div className={styles.itemText} style={{ fontSize: '0.8rem', opacity: 0.7 }}>Tech: {project.tech}</div>
              </div>
              <div className={styles.actions}>
                <button onClick={() => handleDelete(project.id)} className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
