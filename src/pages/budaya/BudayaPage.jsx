import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../../components/Navbar";
import LoadingScreen from "../../components/LoadingScreen";
import Footer from "../../components/Footer";
import BackButton from "../../components/BackButton";

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
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-132px)]">
        <LoadingScreen />
      </div>
      <Footer />
    </>
  )
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  if (!budaya) return <div className="p-8 text-center">Budaya tidak ditemukan.</div>;

  return (
    <div>

      <BackButton />
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        {budaya.imageUrl && <img src={budaya.imageUrl} alt={budaya.title} className="w-auto h-24 mx-auto mb-4" />}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          {budaya.title}
        </h2>
        {/* <h2 className="text-2xl font-bold mb-6 text-black text-center">{budaya.title}</h2> */}
        {Array.isArray(budaya.sections) &&
          budaya.sections.map((item, index) => (
            <div key={index} className="mb-5">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                className={`w-full flex justify-between items-center bg-secondary text-white font-semibold px-5 py-4 focus:outline-none ${openIndex === index ? 'rounded-b-none rounded-t-lg' : 'rounded-lg'}`}
              >
                {item.title}
                <span className="font-extrabold text-xl">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="bg-base-300 p-5 rounded-b-lg whitespace-pre-line text-justify">
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
