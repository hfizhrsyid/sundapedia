import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../../components/Navbar";
import LoadingScreen from "../../components/LoadingScreen";

function BudayaPage({ slug }) {
  const [budaya, setBudaya] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBudaya() {
      setLoading(true);
      setError(null);
      try {
        const snap = await getDocs(collection(db, "budaya"));
        const found = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })).find((b) => b.slug === slug);
        setBudaya(found || null);
      } catch (e) {
        setError("Failed to fetch budaya");
      }
      setLoading(false);
    }
    fetchBudaya();
  }, [slug]);

  if (loading) return (
    <div>
        <Navbar />
        <LoadingScreen />
    </div>
  )
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  if (!budaya) return <div className="p-8 text-center">Budaya tidak ditemukan.</div>;

  return (
    <div>
        <Navbar />
        <div className="max-w-3xl mx-auto p-6">
        {budaya.logo && <img src={budaya.logo} alt={budaya.title} className="w-24 h-24 mx-auto mb-4" />}
        <h2 className="text-2xl font-bold mb-6 text-black text-center">{budaya.title}</h2>
        {Array.isArray(budaya.sections) &&
            budaya.sections.map((item, index) => (
            <div key={index} className="mb-5">
                <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                className="w-full flex justify-between items-center bg-cyan-500 text-white font-semibold rounded-lg px-2 py-3 focus:outline-none"
                >
                {item.title}
                <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && (
                <div className="bg-blue-100 p-5 text-gray-800 rounded-b-lg whitespace-pre-line text-justify">
                    {item.content}
                </div>
                )}
            </div>
            ))}
        </div>
    </div>
  );
}

export default BudayaPage;
