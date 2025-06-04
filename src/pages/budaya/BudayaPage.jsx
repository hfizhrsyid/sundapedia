import React, { useState } from "react";
import { budayaData } from "./budayaData.jsx";

function BudayaPage({ slug }) {
  const budaya = budayaData.find((b) => b.slug === slug);
  const [openIndex, setOpenIndex] = useState(null);
  if (!budaya) return <div className="p-8 text-center">Budaya tidak ditemukan.</div>;
  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={budaya.logo} alt={budaya.title} className="w-24 h-24 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-6 text-black text-center">{budaya.title}</h2>
      {budaya.sections.map((item, index) => (
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
  );
}

export default BudayaPage;
