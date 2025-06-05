import { useEffect, useState, useRef } from 'react';
import { collection, getDocs, setDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../../components/NavbarAdmin';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

function BudayaAdmin() {
  const [budayaList, setBudayaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null); // slug of editing budaya
  const [form, setForm] = useState({ title: '', slug: '', sections: [{ title: '', content: '' }], imageUrl: '' });
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef();

  // Fetch budaya docs
  useEffect(() => {
    async function fetchBudaya() {
      setLoading(true);
      setError(null);
      try {
        const snap = await getDocs(collection(db, 'budaya'));
        setBudayaList(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (e) {
        setError('Failed to fetch budaya');
      }
      setLoading(false);
    }
    fetchBudaya();
  }, []);

  // Handlers
  const handleEdit = (budaya) => {
    setEditing(budaya.slug);
    setForm({
      title: budaya.title,
      slug: budaya.slug,
      sections: budaya.sections || [{ title: '', content: '' }],
      imageUrl: budaya.imageUrl || '',
    });
    setImageFile(null);
  };
  const handleDelete = async (slug) => {
    if (!window.confirm('Delete this budaya?')) return;
    await deleteDoc(doc(db, 'budaya', slug));
    setBudayaList(list => list.filter(b => b.slug !== slug));
  };

  // Helper: upload image and return URL
  const uploadImage = async (slug, file) => {
    if (!file) return '';
    setUploading(true);
    try {
      const storage = getStorage();
      const imgRef = storageRef(storage, `budaya-images/${slug}-${Date.now()}-${file.name}`);
      await uploadBytes(imgRef, file);
      const url = await getDownloadURL(imgRef);
      return url;
    } catch (e) {
      setError('Failed to upload image');
      return '';
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    const { title, slug, sections } = form;
    if (!title || !slug) return alert('Title and slug required');
    let imageUrl = form.imageUrl;
    if (imageFile) {
      imageUrl = await uploadImage(slug, imageFile);
      if (!imageUrl) return;
    }
    try {
      await setDoc(doc(db, 'budaya', slug), { title, slug, sections, imageUrl });
      setBudayaList(list => list.map(b => b.slug === slug ? { ...b, title, slug, sections, imageUrl } : b));
      setEditing(null);
      setImageFile(null);
    } catch (e) {
      setError('Failed to save budaya');
    }
  };
  const handleAdd = async () => {
    const { title, slug, sections } = form;
    if (!title || !slug) return alert('Title and slug required');
    let imageUrl = '';
    if (imageFile) {
      imageUrl = await uploadImage(slug, imageFile);
      if (!imageUrl) return;
    }
    try {
      await setDoc(doc(db, 'budaya', slug), { title, slug, sections, imageUrl });
      setBudayaList(list => [...list, { title, slug, sections, imageUrl }]);
      setForm({ title: '', slug: '', sections: [{ title: '', content: '' }], imageUrl: '' });
      setImageFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (e) {
      setError('Failed to add budaya');
    }
  };

  // UI
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="">
      <NavbarAdmin back={true} />
      <h2 className="text-xl font-bold mb-4">Admin Budaya Editor</h2>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Add New Budaya</h3>
        <input className="border px-2 py-1 rounded mr-2" placeholder="Title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
        <input className="border px-2 py-1 rounded mr-2" placeholder="Slug" value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))} />
        <input type="file" accept="image/*" ref={fileInputRef} onChange={e => setImageFile(e.target.files[0])} className="mr-2" />
        {imageFile && <span className="text-xs">{imageFile.name}</span>}
        {form.imageUrl && !imageFile && <img src={form.imageUrl} alt="preview" className="h-12 inline ml-2" />}
        <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={handleAdd} disabled={uploading}>{uploading ? 'Uploading...' : 'Add'}</button>
      </div>
      <ul>
        {budayaList.map(budaya => (
          <li key={budaya.slug} className="mb-4 border rounded p-2">
            <div className="flex items-center gap-2">
              <span className="font-bold">{budaya.title}</span>
              <span className="text-xs text-gray-500">({budaya.slug})</span>
              {budaya.imageUrl && <img src={budaya.imageUrl} alt="preview" className="h-8 ml-2" />}
              <button className="text-blue-600 underline ml-2" onClick={() => handleEdit(budaya)}>Edit</button>
              <button className="text-red-600 underline ml-2" onClick={() => handleDelete(budaya.slug)}>Delete</button>
            </div>
            {editing === budaya.slug && (
              <div className="mt-2 flex flex-col gap-2">
                <input className="border px-2 py-1 rounded" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Title" />
                <input className="border px-2 py-1 rounded" value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))} placeholder="Slug" />
                <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} className="" />
                {imageFile && <span className="text-xs">{imageFile.name}</span>}
                {form.imageUrl && !imageFile && <img src={form.imageUrl} alt="preview" className="h-12" />}
                <div className="mb-2">
                  <h4 className="font-semibold">Sections</h4>
                  {form.sections.map((sec, i) => (
                    <div key={i} className="mb-2 flex gap-2 items-center">
                      <input className="border px-2 py-1 rounded" value={sec.title} onChange={e => setForm(f => ({ ...f, sections: f.sections.map((s, idx) => idx === i ? { ...s, title: e.target.value } : s) }))} placeholder="Section Title" />
                      <textarea className="border px-2 py-1 rounded" value={sec.content} onChange={e => setForm(f => ({ ...f, sections: f.sections.map((s, idx) => idx === i ? { ...s, content: e.target.value } : s) }))} placeholder="Section Content" />
                      <button className="text-red-500 text-xs" onClick={() => setForm(f => ({ ...f, sections: f.sections.filter((_, idx) => idx !== i) }))}>Remove</button>
                    </div>
                  ))}
                  <button className="text-blue-600 text-xs" onClick={() => setForm(f => ({ ...f, sections: [...f.sections, { title: '', content: '' }] }))}>+ Add Section</button>
                </div>
                <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={handleSave} disabled={uploading}>{uploading ? 'Uploading...' : 'Save'}</button>
                <button className="bg-gray-400 text-white px-3 py-1 rounded" onClick={() => setEditing(null)}>Cancel</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BudayaAdmin;