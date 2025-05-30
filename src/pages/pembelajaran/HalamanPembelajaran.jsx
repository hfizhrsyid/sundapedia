import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import ReactMarkdown from 'react-markdown';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, '-');

const HalamanPembelajaran = () => {
  const { partSlug } = useParams();
  const [part, setPart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPart() {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'courses'));
      let found = null;
      querySnapshot.forEach(doc => {
        const course = doc.data();
        if (course.parts) {
          for (const p of course.parts) {
            if (slugify(p.title) === partSlug) {
              found = { ...p, courseTitle: course.title };
              break;
            }
          }
        }
      });
      setPart(found);
      setLoading(false);
    }
    fetchPart();
  }, [partSlug]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!part) return <div className="text-center mt-10">Materi tidak ditemukan.</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-10 min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-4 text-black">{part.title}</h1>
      <ReactMarkdown>{part.content}</ReactMarkdown>
      {part.courseTitle && (
        <div className="mt-4 text-sm text-black">Bagian dari: {part.courseTitle}</div>
      )}
    </div>
  );
};

export default HalamanPembelajaran;