import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { Link } from "react-router-dom";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      setLoading(true);
      setError(null);
      try {
        const coursesSnap = await getDocs(collection(db, 'courses'));
        const courseList = [];
        for (const courseDoc of coursesSnap.docs) {
          const courseId = courseDoc.id;
          let parts = [];
          // Try to fetch parts from subcollection
          const partsSnap = await getDocs(collection(db, 'courses', courseId, 'parts'));
          if (!partsSnap.empty) {
            parts = partsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          } else {
            // Fallback: check if courseDoc has a 'parts' array field
            const data = courseDoc.data();
            if (Array.isArray(data.parts)) {
              parts = data.parts.map((part, idx) => ({ ...part, id: idx }));
            }
          }
          courseList.push({ id: courseId, ...courseDoc.data(), parts });
        }
        setCourses(courseList);
      } catch (e) {
        setError('Failed to fetch courses');
      }
      setLoading(false);
    }
    fetchCourses();
  }, []);

  const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, '-');

  const handleAddPart = async (courseId) => {
    const title = prompt('Enter part title:');
    if (!title) return;
    const slug = slugify(title);
    try {
      await addDoc(collection(db, 'courses', courseId, 'parts'), {
        title,
        slug,
        blocks: [],
      });
      // Refresh courses/parts
      setLoading(true);
      const coursesSnap = await getDocs(collection(db, 'courses'));
      const courseList = [];
      for (const courseDoc of coursesSnap.docs) {
        const courseId = courseDoc.id;
        let parts = [];
        // Try to fetch parts from subcollection
        const partsSnap = await getDocs(collection(db, 'courses', courseId, 'parts'));
        if (!partsSnap.empty) {
          parts = partsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } else {
          // Fallback: check if courseDoc has a 'parts' array field
          const data = courseDoc.data();
          if (Array.isArray(data.parts)) {
            parts = data.parts.map((part, idx) => ({ ...part, id: idx }));
          }
        }
        courseList.push({ id: courseId, ...courseDoc.data(), parts });
      }
      setCourses(courseList);
      setLoading(false);
    } catch (e) {
      alert('Failed to add part');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {courses.map(course => (
        <div key={course.id} className="mb-6 border rounded p-3 bg-white">
          <h2 className="font-bold text-lg mb-2">{course.title || course.id}</h2>
          <button
            className="mb-2 px-2 py-1 bg-green-600 text-white rounded text-sm"
            onClick={() => handleAddPart(course.id)}
          >
            + Add Part
          </button>
          <ul className="ml-4">
            {/* Show subcollection parts first */}
            {course.parts && course.parts.filter(part => part.slug).map(part => (
              <li key={part.id} className="mb-1 flex items-center gap-2">
                <span>{part.title || part.slug}</span>
                <Link
                  to={`/admin/edit/${course.id}/${part.slug}`}
                  className="text-blue-600 underline text-sm"
                >
                  Edit
                </Link>
              </li>
            ))}
            {/* Show legacy array parts (no slug) */}
            {Array.isArray(course.legacyParts) && course.legacyParts.length > 0 && course.legacyParts.map((part, idx) => (
              <li key={"legacy-"+idx} className="mb-1 flex items-center gap-2">
                <span>{part.title || part.content || 'Legacy part'}</span>
                <span className="text-gray-400 text-xs">Legacy part (not editable)</span>
              </li>
            ))}
            {/* If no parts at all */}
            {(!course.parts || course.parts.length === 0) && (!Array.isArray(course.legacyParts) || course.legacyParts.length === 0) && (
              <li className="text-gray-500">No parts</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;