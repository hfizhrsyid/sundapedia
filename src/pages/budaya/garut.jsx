import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import logogarut from "../../assets/logogarut.png"
import wayanggarut from "../../assets/wayanggarut.jpg"
import sisingaan from "../../assets/sisingaan.jpg"
import dodolgarut from "../../assets/dodolgarut.jpg"
import nasiliwet from "../../assets/nasiliwet.webp"
function Garut() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Sejarah Singkat Garut",
      content: `Kota Garut memiliki sejarah panjang yang dimulai sejak zaman kerajaan-kerajaan Sunda di Jawa Barat. Pada abad ke-15, wilayah Garut merupakan bagian dari Kerajaan Pajajaran yang kemudian runtuh akibat serangan Kesultanan Banten. Setelah masa kerajaan, Garut berkembang menjadi daerah yang penting dalam era kolonial Belanda, terutama dikenal sebagai pusat pertanian dan perkebunan teh. Kota Garut juga terkenal dengan julukan “Kota Intan” karena keindahan alamnya dan hasil kerajinan intan yang khas. Setelah kemerdekaan Indonesia, Garut terus berkembang sebagai kota yang kaya akan budaya, kuliner, dan wisata alam seperti kawah dan pemandian air panas yang menarik banyak pengunjung.`,
    },
    {
      title: "Bahasa Daerah Garut",
      content: (
        <>
        <span className="font-bold">Bahasa Sunda: <br /></span> Bahasa daerah yang digunakan di Garut adalah Bahasa Sunda dengan dialek khas Garut yang memiliki ciri intonasi dan kosakata unik dibandingkan dialek Sunda dari daerah lain. Dialek Garut cenderung lebih tegas dan kadang menggunakan kata-kata yang berbeda dalam pengucapan atau arti. Bahasa Sunda Garut digunakan sehari-hari oleh masyarakat, terutama di lingkungan keluarga dan komunitas lokal, sementara bahasa Indonesia digunakan dalam pendidikan, pemerintahan, dan komunikasi formal. Dialek ini menjadi bagian penting dari identitas budaya masyarakat Garut.
        </>
      ),
    },
    {
      title: "Kesenian Daerah Garut",
      content: (
        <>
        <img src={sisingaan} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">SISINGAAN<br /></span>Sisingaan adalah pertunjukan tradisional khas Garut yang berupa atraksi mengarak boneka singa kecil yang dibawa oleh sekelompok orang. Atraksi ini biasanya dilakukan saat acara khitanan dan upacara adat lainnya, melambangkan keberanian dan perlindungan.
        <br /><br /><br />
        <img src={wayanggarut} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">WAYANG GOLEK<br /></span> Wayang Golek adalah pertunjukan wayang kulit berbentuk boneka kayu yang sangat populer di Garut. Cerita-cerita yang dipentaskan biasanya berasal dari kisah pewayangan Hindu atau cerita rakyat Sunda yang sarat pesan moral.
        </>
      )
    },
    {
      title: "Makanan Tradisional Garut",
      content: (
        <>
        <img src={dodolgarut} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">DODOL GARUT<br /> </span>  Dodol Garut adalah salah satu makanan khas Garut yang sangat terkenal dan menjadi ikon kuliner daerah tersebut. Dodol sendiri adalah makanan manis dengan tekstur kenyal dan lengket, terbuat dari bahan dasar ketan, gula merah, dan santan kelapa yang dimasak secara perlahan hingga mengental dan berwarna cokelat gelap.
        <br /><br /><br />
        <img src={nasiliwet} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">NASI LIWET GARUT <br /> </span> Nasi Liwet khas Garut adalah nasi yang dimasak dengan santan dan rempah, disajikan dengan lauk seperti ayam goreng, tahu, tempe, sambal, dan lalapan. Rasanya gurih dan kaya rempah.
        </>
      ) 
    },
    {
      title: "Fakta Unik Tentang Garut",
      content: (
        <>
        <span className="font-bold">-Kota Dodol dan Peuyeum <br /> </span>Garut terkenal sebagai penghasil dodol dan peuyeum (tape singkong) terbaik di Indonesia. Kedua makanan tradisional ini sudah menjadi ikon kuliner khas Garut yang diminati banyak orang.<br /> <br />
<span className="font-bold">-Singa Tertinggi di Indonesia</span> <br /> Garut memiliki patung singa yang disebut Singaperbangsa, yang merupakan simbol keberanian dan kekuatan. Patung ini berdiri di area pusat kota dan menjadi landmark penting.<br /><br />
<span className="font-bold">-Sumber Air Panas Alami</span> <br /> Garut memiliki banyak pemandian air panas alami dari gunung-gunung berapi di sekitarnya, seperti Cipanas dan Darajat, yang menjadi tujuan wisata dan pengobatan tradisional. <br /><br />
<span className="font-bold">-Pusat Kerajinan Kulit</span> <br /> Garut juga dikenal sebagai pusat kerajinan kulit, khususnya pembuatan sepatu, tas, dan jaket kulit berkualitas yang dipasarkan hingga ke luar daerah. <br /><br />
<span className="font-bold">-Legenda Sisingaan</span> <br /> Sisingaan adalah kesenian tradisional khas Garut yang berupa atraksi membawa boneka singa kecil, yang biasanya dilakukan saat upacara khitanan. Atraksi ini melambangkan keberanian dan perlindungan dari roh jahat.<br /><br />
        </>
      ) 
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={logogarut} alt="Logo Budaya Banten" className="w-24 h-24 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-6 text-black text-center">BUDAYA KOTA GARUT</h2>
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

export default Garut;
