import { useState } from "react";
import { toSundanese, toLatin } from "sunda.js";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Aksara() {
  const [inputText, setInputText] = useState("");
  const [copied, setCopied] = useState(false);

  const isSundaneseInput = /[\u1B80-\u1BBF]/.test(inputText);
  const outputText = isSundaneseInput
    ? toLatin(inputText)
    : toSundanese(inputText);

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center mt-8 mb-16 mx-auto px-4 w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Konversi Aksara<br/>Latin ↔ Sunda
        </h2>
        <p className="text-md text-center mb-8">
          Masukkan teks pada kolom di bawah. Sistem akan otomatis mendeteksi dan mengonversi ke bentuk lainnya.
        </p>

        <div className="w-full bg-base-200 mb-4 p-4 rounded-md">
        <span className="font-semibold text-lg text-secondary">Input</span>
        <textarea
          className="textarea mt-2 w-full h-18 border-0 bg-base-200 text-lg p-0 rounded-md focus:outline-0"
          placeholder="Tulis aksara Latin atau Sunda..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        </div>

        <div className="w-full bg-base-200 rounded-md p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-lg text-secondary">Hasil</span>
            <button
              className="btn btn-xs btn-secondary"
              onClick={handleCopy}
              disabled={!outputText}
            >
              {copied ? "Disalin!" : "Salin"}
            </button>
          </div>
          <div className="min-h-[64px] text-lg">
            {outputText || (
              <span className="text-gray-400">Hasil akan muncul di sini</span>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Aksara;
