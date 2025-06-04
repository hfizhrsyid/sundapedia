import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import logotasik from "../../assets/logotasik.png"
import sototasik from "../../assets/sototasik.jpg"
import cilokgoang from "../../assets/cilokgoang.webp"
import kendangpenca from "../../assets/kendangpenca.jpg"
import helaran from "../../assets/helaran.jpg"

function Tasik() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Sejarah Singkat Tasikmalaya",
      content: `Tasikmalaya adalah sebuah kota dan kabupaten di Jawa Barat yang memiliki sejarah panjang sejak zaman kerajaan Sunda. Dahulu wilayah ini dikenal sebagai bagian dari Kerajaan Galuh dan Kerajaan Sunda, kemudian berkembang menjadi daerah penting dalam jalur perdagangan pedalaman Priangan. Nama "Tasikmalaya" sendiri berasal dari kata tasik yang berarti "danau" dan malaya yang berarti "gunung kecil" atau perbukitan, merujuk pada kondisi geografisnya yang dikelilingi pegunungan dan danau kecil. Seiring masuknya kolonial Belanda, Tasikmalaya menjadi sentra pertanian dan kerajinan tangan, termasuk anyaman bambu dan bordir. Setelah kemerdekaan Indonesia, Tasikmalaya terus berkembang sebagai pusat budaya Sunda, industri kerajinan, dan wisata alam pegunungan yang indah.`,
    },
    {
      title: "Bahasa Daerah Tasikmalaya",
      content: (
        <>
        <span className="font-bold">Bahasa Sunda: <br /></span> Bahasa daerah yang digunakan di Tasikmalaya adalah Bahasa Sunda, dengan dialek khas Tasik yang memiliki intonasi dan kosakata yang sedikit berbeda dari daerah Sunda lainnya seperti Bandung atau Garut. Ciri khas Bahasa Sunda Tasikmalaya cenderung lembut dalam pengucapan, dengan gaya bertutur yang halus dan sopan, meskipun dalam pergaulan sehari-hari tetap akrab dan santai.
Selain itu, masyarakat Tasikmalaya masih kuat memegang aturan “undak usuk basa”, yaitu tata krama berbahasa Sunda yang membedakan cara berbicara berdasarkan usia, status sosial, atau situasi tertentu — seperti penggunaan bahasa lemes (halus) untuk orang tua atau tamu, dan loma (biasa) untuk sesama teman.
        </>
      ),
    },
    {
      title: "Kesenian Daerah Tasikmalaya",
      content: (
        <>
        <img src={helaran} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">HELARAN<br /></span>Helaran adalah pertunjukan arak-arakan rakyat yang diiringi musik tradisional seperti angklung dan kendang pencak. Biasanya diadakan untuk menyambut khitanan, syukuran panen, atau upacara adat lainnya, lengkap dengan atraksi lucu dari pemain.
        <br /><br /><br />
        <img src={kendangpenca} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">KENDANG PENCA<br /></span> Kendang Penca adalah musik pengiring pencak silat yang terdiri dari kendang, gong, dan alat musik tradisional lain. Musiknya memiliki ritme dinamis yang mengikuti gerakan pencak silat para pendekar.
        </>
      )
    },
    {
      title: "Makanan Tradisional Tasikmalaya",
      content: (
        <>
        <img src={cilokgoang} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">CILOK GOANG<br /> </span> Cilok (aci dicolok) khas Tasik punya isian daging ayam atau sapi, disajikan dengan kuah pedas yang disebut “goang” - kuah bening cabai rawit yang pedas menyengat.
        <br /><br /><br />
        <img src={sototasik} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">SOTO TASIK <br /> </span>Soto khas Tasikmalaya punya kuah bening yang gurih dan ringan, dengan isian suwiran ayam kampung, soun, irisan tomat, dan bawang goreng. Biasanya disajikan dengan ketupat atau nasi hangat.
        </>
      ) 
    },
    {
      title: "Fakta Unik Tentang Tasikmalaya",
      content: (
        <>
        <span className="font-bold">-Dijuluki Kota Santri <br /> </span>Tasikmalaya dikenal sebagai Kota Santri karena memiliki banyak pesantren besar dan lembaga pendidikan Islam. Tradisi keagamaan di sini sangat kuat, dan berbagai kegiatan keagamaan sering diadakan secara rutin.<br /> <br />
<span className="font-bold">-Sentra Kerajinan Payung Geulis</span> <br /> Tasikmalaya adalah penghasil payung geulis, payung tradisional yang dibuat dan dilukis dengan tangan. Payung ini biasanya digunakan untuk hiasan, acara adat, atau pertunjukan tari tradisional.<br /><br />
<span className="font-bold">-Asal Mula Nama Tasikmalaya</span> <br /> Nama “Tasikmalaya” berasal dari kata tasik (danau) dan malaya (pegunungan kecil). Dulu wilayah ini dipenuhi tasik atau genangan air yang dikelilingi perbukitan dan pegunungan.<br /><br />
<span className="font-bold">-Punya Cilok Goang Paling Pedas</span> <br /> Kalau kamu pecinta pedas, cilok goang khas Tasik terkenal dengan kuah pedas cabai rawitnya yang menyengat dan bikin ketagihan. Banyak warung di Tasik yang menawarkan level pedas hingga ekstrim! <br /><br />
<span className="font-bold">-Penghasil Kerajinan Bambu Terbaik</span> <br /> Selain payung geulis, Tasikmalaya juga terkenal dengan kerajinan anyaman bambu seperti besek, tampah, tudung saji, hingga furnitur yang sudah dipasarkan ke berbagai daerah di Indonesia.<br /><br />
        </>
      ) 
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={logotasik} alt="Logo Budaya Banten" className="w-24 h-24 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-6 text-black text-center">BUDAYA KOTA TASIKMALAYA</h2>
      {data.map((item, index) => (
        <div key={index} className="mb-5">
          <button
            onClick={() => toggleDropdown(index)}
            aria-expanded={openIndex === index}
            className="w-full flex justify-between items-center bg-cyan-500 text-white font-semibold rounded-lg px-2 py-3 focus:outline-none"
          >
            {item.title}
            {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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

export default Tasik;
