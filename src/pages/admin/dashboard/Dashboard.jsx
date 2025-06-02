import { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { Link } from "react-router-dom";
import { useAuth } from '../../../auth/AuthProvider';

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { logout } = useAuth();

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

  const handleEditPart = async (courseId, part) => {
    // Navigate to edit page (if using react-router)
    window.location.href = `/admin/edit/${courseId}/${part.slug}`;
  };

  const handleDeletePart = async (courseId, partId) => {
    if (!window.confirm('Are you sure you want to delete this part?')) return;
    try {
      await deleteDoc(doc(db, 'courses', courseId, 'parts', partId));
      // Refresh courses/parts
      setLoading(true);
      const coursesSnap = await getDocs(collection(db, 'courses'));
      const courseList = [];
      for (const courseDoc of coursesSnap.docs) {
        const courseId = courseDoc.id;
        let parts = [];
        const partsSnap = await getDocs(collection(db, 'courses', courseId, 'parts'));
        if (!partsSnap.empty) {
          parts = partsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } else {
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
      alert('Failed to delete part');
    }
  };

  if (loading) return (
    <div className='bg-white min-h-screen flex flex-col justify-center items-center'>
      <span class="text-[#D3A373] loading loading-dots loading-lg"></span>
    </div>
  )
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className='min-h-screen bg-white'>
      <div className='px-4 py-2 flex flex-row bg-[#D3A373] text-center items-center'>
        <h1 className="text-2xl font-semibold flex-1">Admin Dashboard</h1>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
          onClick={logout}
        >
          Log out
        </button>
      </div>
      <div className="p-4 mx-auto text-black">
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
                <li key={part.id} className="mb-1 flex flex-col gap-1 border-b pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{part.title || part.slug}</span>
                  </div>
                  {/* Always show part.content if present (legacy) or part.description if present (new) */}
                  {part.description && (
                    <div className="text-gray-700 text-sm mt-1">{part.description}</div>
                  )}
                  {part.content && !part.description && (
                    <div className="text-gray-700 text-sm mt-1">{part.content}</div>
                  )}
                  <div className="flex items-center gap-2 mt-1">
                    <Link
                      to={`/admin/edit/${course.id}/${part.slug}`}
                      className="text-blue-600 underline text-sm"
                    >
                      Edit
                    </Link>
                    <button
                      className="text-red-600 underline text-sm ml-2"
                      onClick={() => handleDeletePart(course.id, part.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="text-xs text-blue-500 underline ml-2"
                      onClick={() => setCourses(cs => cs.map(c => c.id === course.id ? {
                        ...c,
                        parts: c.parts.map(p => p.id === part.id ? {
                          ...p,
                          editing: true,
                          editTitle: p.title || '',
                          editDescription: p.description || p.content || ''
                        } : p)
                      } : c))}
                    >
                      Edit Description
                    </button>
                  </div>
                  {/* Inline editor for part description */}
                  {part.editing && (
                    <div className="flex flex-col gap-1 mt-1">
                      <input
                        className="border px-2 py-1 rounded"
                        value={part.editTitle}
                        onChange={e => {
                          const newTitle = e.target.value;
                          setCourses(cs => cs.map(c => c.id === course.id ? {
                            ...c,
                            parts: c.parts.map(p => p.id === part.id ? { ...p, editTitle: newTitle } : p)
                          } : c));
                        }}
                        placeholder="Part Title"
                      />
                      <input
                        className="border px-2 py-1 rounded"
                        value={part.editDescription}
                        onChange={e => {
                          const newDesc = e.target.value;
                          setCourses(cs => cs.map(c => c.id === course.id ? {
                            ...c,
                            parts: c.parts.map(p => p.id === part.id ? { ...p, editDescription: newDesc } : p)
                          } : c));
                        }}
                        placeholder="Part Description"
                      />
                      <div className="flex gap-2 mt-1">
                        <button
                          className="bg-blue-600 text-white px-3 py-1 rounded"
                          onClick={async () => {
                            await updateDoc(doc(db, 'courses', course.id, 'parts', part.id), {
                              title: part.editTitle,
                              description: part.editDescription
                            });
                            setCourses(cs => cs.map(c => c.id === course.id ? {
                              ...c,
                              parts: c.parts.map(p => p.id === part.id ? {
                                ...p,
                                title: part.editTitle,
                                description: part.editDescription,
                                editing: false
                              } : p)
                            } : c));
                          }}
                        >
                          Save
                        </button>
                        <button
                          className="bg-gray-400 text-white px-3 py-1 rounded"
                          onClick={() => setCourses(cs => cs.map(c => c.id === course.id ? {
                            ...c,
                            parts: c.parts.map(p => p.id === part.id ? { ...p, editing: false } : p)
                          } : c))}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
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
            {/* --- Add below the course title for editing course name/description --- */}
            {course.editing ? (
              <div className="mb-2 flex flex-col gap-2">
                <input
                  className="border px-2 py-1 rounded"
                  value={course.editTitle}
                  onChange={e => {
                    const newTitle = e.target.value;
                    setCourses(cs => cs.map(c => c.id === course.id ? { ...c, editTitle: newTitle } : c));
                  }}
                  placeholder="Course Title"
                />
                <input
                  className="border px-2 py-1 rounded"
                  value={course.editDescription}
                  onChange={e => {
                    const newDesc = e.target.value;
                    setCourses(cs => cs.map(c => c.id === course.id ? { ...c, editDescription: newDesc } : c));
                  }}
                  placeholder="Course Description"
                />
                <div className="flex gap-2">
                  <button
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                    onClick={async () => {
                      // Save to Firestore
                      await updateDoc(doc(db, 'courses', course.id), {
                        title: course.editTitle,
                        description: course.editDescription
                      });
                      setCourses(cs => cs.map(c => c.id === course.id ? { ...c, title: course.editTitle, description: course.editDescription, editing: false } : c));
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                    onClick={() => setCourses(cs => cs.map(c => c.id === course.id ? { ...c, editing: false } : c))}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                className="mb-2 px-2 py-1 bg-blue-500 text-white rounded text-sm"
                onClick={() => setCourses(cs => cs.map(c => c.id === course.id ? { ...c, editing: true, editTitle: c.title || '', editDescription: c.description || '' } : c))}
              >
                Edit Course Name/Description
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;