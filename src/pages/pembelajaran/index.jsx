import React from 'react';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore'
import COURSE_LIST from './COURSE_LIST.js';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, '-');

const Part = ({ parts }) => (
  <ul className="list-none pl-0">
    {parts.map((part, idx) => (
      <li key={idx} className="mb-2">
        <a href={`/pembelajaran/${slugify(part.title)}`}
           className="block w-full px-4 py-3 rounded bg-blue-100 hover:bg-blue-200 font-semibold transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-300 shadow border border-white">
          <span className="block font-semibold mb-1">{part.title}</span>
          <span className="block text-sm leading-snug">{part.content}</span>
        </a>
      </li>
    ))}
  </ul>
);

const CourseCard = ({ course }) => (
  <div className="shadow-md rounded-lg p-6 mb-6 w-full max-w-xl border border-gray-200">
    <h2 className="text-xl font-bold mb-1">{course.title}</h2>
    <p className="mb-3">{course.description}</p>
    <Part parts={course.parts} />
  </div>
);

const Course = () => {
  const [courses, setCourses] = useState([]);
  // const [uploading, setUploading] = useState(false);

  // Fetch courses and their parts from subcollections, but show courses immediately
  async function fetchCourses() {
    const q = query(collection(db, 'courses'), orderBy('index'));
    const querySnapshot = await getDocs(q);
    // Set courses immediately with empty parts (for skeleton UI)
    const initialCourses = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id, parts: [] }));
    setCourses(initialCourses);
    // Now fetch parts for each course in parallel, updating each course as soon as its parts arrive
    querySnapshot.docs.forEach(async (doc, idx) => {
      const partsSnap = await getDocs(collection(db, 'courses', doc.id, 'parts'));
      const parts = partsSnap.docs.map(partDoc => {
        const partData = partDoc.data();
        // Robust preview extraction: always prefer a non-empty preview
        let content = (typeof partData.content === 'string' && partData.content.trim()) ? partData.content : '';
        if (!content && Array.isArray(partData.blocks)) {
          // Try to get the first non-empty text block
          const textBlock = partData.blocks.find(b => b.type === 'text' && b.content && b.content.trim());
          if (textBlock) {
            content = textBlock.content;
          } else {
            // Fallback: try to get a heading block
            const headingBlock = partData.blocks.find(b => b.type === 'heading' && b.content && b.content.trim());
            if (headingBlock) {
              content = headingBlock.content;
            } else if (partData.blocks.length > 0) {
              // Fallback: show a generic message or the first block's type
              content = `[${partData.blocks[0].type} block]`;
            } else {
              content = 'No preview available';
            }
          }
        }
        return {
          ...partData,
          content,
        };
      });
      setCourses(prev => prev.map((c, i) => i === idx ? { ...c, parts } : c));
    });
  }

  // Safer: Only upload when button is clicked
  // const handleUpload = async () => {
  //   setUploading(true);
  //   for (let i = 0; i < COURSE_LIST.length; i++) {
  //     const course = { ...COURSE_LIST[i], index: i };
  //     await addDoc(collection(db, 'courses'), course);
  //   }
  //   setUploading(false);
  //   alert('Courses uploaded!');
  //   fetchCourses(); // Refresh after upload
  // };

  useEffect(() => {
    fetchCourses();
  }, []);
  
  return (
    <div className="flex flex-col items-center w-full px-2">
      {/* <button
        className="mb-6 px-4 py-2 rounded bg-green-600 text-white font-bold hover:bg-green-700 transition-colors"
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload Courses to Firestore'}
      </button> */}
      {courses.map((course, idx) => (
        <CourseCard key={idx} course={course} />
      ))}
    </div>
  );
}

function Pembelajaran() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='flex flex-col justify-center items-center mb-4'>
        <h1 className='font-bold'>Bahasa Sunda</h1>
        <p>Selamat datang di halaman pembelajaran Bahasa Sunda!</p>
      </div>
      <Course />
    </div>
  );
}

export default Pembelajaran;
