import { useEffect, useState } from 'react';
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';
import AdminBlockEditor from './AdminBlockEditor';

// Props: courseId, partSlug (string)
export default function EditPart({ courseId, partId: partSlug }) {
  const [loading, setLoading] = useState(true);
  const [blocks, setBlocks] = useState([]);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [partDocId, setPartDocId] = useState(null);

  useEffect(() => {
    async function fetchPart() {
      setLoading(true);
      setError(null);
      try {
        const partsRef = collection(db, 'courses', courseId, 'parts');
        const q = query(partsRef, where('slug', '==', partSlug));
        const snap = await getDocs(q);
        if (!snap.empty) {
          const docSnap = snap.docs[0];
          setBlocks(docSnap.data().blocks || []);
          setPartDocId(docSnap.id);
        } else {
          setError('Part not found');
        }
      } catch (e) {
        setError('Failed to fetch part');
      }
      setLoading(false);
    }
    fetchPart();
  }, [courseId, partSlug]);

  const handleSave = async (newBlocks) => {
    if (!partDocId) return;
    setSaving(true);
    setError(null);
    try {
      const partRef = doc(db, 'courses', courseId, 'parts', partDocId);
      await updateDoc(partRef, { blocks: newBlocks });
      setBlocks(newBlocks);
    } catch (e) {
      setError('Failed to save changes');
    }
    setSaving(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className='bg-white min-h-screen'>
      <div className='p-1 bg-[#D3A373] text-center mb-4'>
        <h1 className="text-xl text-white font-bold">Edit Part</h1>
      </div>
      <AdminBlockEditor initialBlocks={blocks} onSave={handleSave} />
      {saving && <div className="text-blue-600 mt-2">Saving...</div>}
    </div>
  );
}
