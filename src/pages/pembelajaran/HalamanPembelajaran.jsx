import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Navbar from '../../components/Navbar';
import ReactMarkdown from 'react-markdown';
import FlexiblePart from './FlexiblePart';
import LoadingScreen from '../../components/LoadingScreen';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';

// const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, '-');

const HalamanPembelajaran = () => {
  const { partSlug } = useParams();
  const [part, setPart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPart() {
      setLoading(true);
      let found = null;
      // Fetch all courses
      const coursesSnap = await getDocs(collection(db, 'courses'));
      for (const courseDoc of coursesSnap.docs) {
        const courseId = courseDoc.id;
        // Fetch parts from subcollection
        const partsSnap = await getDocs(collection(db, 'courses', courseId, 'parts'));
        for (const partDoc of partsSnap.docs) {
          const partData = partDoc.data();
          if (partData.slug === partSlug) {
            found = { ...partData, courseTitle: courseDoc.data().title };
            break;
          }
        }
        if (found) break;
      }
      setPart(found);
      setLoading(false);
    }
    fetchPart();
  }, [partSlug]);

  if (loading) return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-132px)]">
        <LoadingScreen />
      </div>
      <Footer />
    </>
  )
  if (!part) return <div className="text-center text-black bg-white min-h-screen">Materi tidak ditemukan.</div>;

  // Only render text blocks first if blocks exist
  return (
    <>
      <BackButton />
      <Navbar />
      <div className='max-w-3xl my-4 mx-auto p-6 rounded shadow min-h-[calc(100vh-165px)]'>
        <h1 className="text-4xl font-bold mb-8 text-center">{part.title}</h1>
        {part.blocks ? (
          <FlexiblePart blocks={part.blocks} />
        ) : (
          <ReactMarkdown>{part.content || ''}</ReactMarkdown>
        )}
        {part.courseTitle && (
          <div className="mt-4 text-sm text-center">Bagian dari: {part.courseTitle}</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HalamanPembelajaran;