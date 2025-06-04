import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import logosumedang from "../../assets/logosumedang.png"
import tarawangsa from "../../assets/tarawangsa.jpg"
import kacapi from "../../assets/kacapi.jpg"
import tahusumedang from "../../assets/tahusumedang.png"
import nasitugcom from "../../assets/nasitugcom.jpg"
function Sumedang() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Sejarah Singkat Sumedang",
      content: `Sumedang adalah sebuah kabupaten di Jawa Barat yang memiliki sejarah panjang sejak masa Kerajaan Sunda. Awalnya, wilayah ini merupakan bagian dari Kerajaan Sunda Pajajaran, lalu berdiri sebagai Kerajaan Sumedang Larang pada abad ke-15 dengan Prabu Tajimalela sebagai pendirinya. Pada masa pemerintahan Prabu Geusan Ulun, Sumedang Larang mencapai puncak kejayaan dan dikenal memiliki Mahkota Binokasih Sanghyang Pake, simbol warisan kerajaan Sunda. Di awal abad ke-17, Sumedang Larang bergabung dengan Kesultanan Mataram, lalu pada masa kolonial Belanda menjadi daerah administratif di Priangan Timur. Setelah Indonesia merdeka, Sumedang resmi menjadi kabupaten yang kini dikenal dengan kuliner tahu Sumedang, kesenian tradisional, dan situs bersejarah seperti Museum Prabu Geusan Ulun serta Gunung Tampomas.`,
    },
    {
      title: "Bahasa Daerah Sumedang",
      content: (
        <>
        <span className="font-bold">Bahasa Sunda: <br /></span> Bahasa daerah yang digunakan masyarakat Sumedang adalah Bahasa Sunda, sama seperti di sebagian besar wilayah Jawa Barat. Namun, di Sumedang terdapat beberapa dialek atau logat khas yang sedikit berbeda dibandingkan dengan daerah lain seperti Bandung atau Garut. Dialek Sunda Sumedang cenderung memiliki intonasi yang lebih halus dan pilihan kosakata tradisional yang masih sering dipakai di perkampungan. Selain itu, dalam percakapan sehari-hari, masyarakat Sumedang masih menggunakan undak usuk basa Sunda — yaitu tingkatan bahasa sopan santun sesuai lawan bicaranya, mulai dari bahasa kasar (basa loma), bahasa hormat (basa lemes) hingga bahasa sangat halus (lemes pisan) yang digunakan saat berbicara dengan orang yang lebih tua atau dihormati.
        </>
      ),
    },
    {
      title: "Kesenian Daerah Sumedang",
      content: (
        <>
        <img src={tarawangsa} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">TARAWANGSA<br /> </span> Tarawangsa adalah seni musik tradisional Sunda yang dimainkan menggunakan alat musik berdawai yang juga disebut tarawangsa, dipadukan dengan alat musik jentreng (sejenis kecapi kecil) atau kacapi. Kesenian ini dipercaya telah ada sejak zaman Kerajaan Sunda Kuno, dan hingga kini masih dilestarikan di beberapa desa di Sumedang seperti Desa Rancakalong dan Desa Sukasari.
        <br /><br />
        <img src={kacapi} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">KACAPI<br /></span> Kacapi adalah alat musik tradisional Sunda yang dimainkan dengan cara dipetik menggunakan jari tangan. Bentuknya mirip kecapi dalam musik tradisional daerah lain, namun punya ciri khas dalam nada, bentuk, dan cara memainkannya.
        </>
      )
    },
    {
      title: "Makanan Tradisional Sumedang",
      content: (
        <>
        <img src={tahusumedang} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">TAHU SUMEDANG <br /> </span> Makanan paling ikonik dari Sumedang. Tahu Sumedang adalah tahu goreng bertekstur renyah di luar dan lembut di dalam. Biasanya dinikmati hangat-hangat dengan cabai rawit atau lontong. Rasanya gurih dengan aroma kedelai yang khas. Tahu ini pertama kali diperkenalkan oleh seorang keturunan Tionghoa bernama Tjoa Pit Gwan pada awal abad ke-20.
        <br /><br /><br />
        <img src={nasitugcom} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">NASI TUTUG ONCOM <br /> </span> Menu tradisional berupa nasi hangat yang dicampur dengan oncom bakar atau goreng lalu ditumbuk bersama bumbu. Disajikan dengan lauk sederhana seperti ayam goreng, sambal, lalapan, dan tahu Sumedang. Rasanya gurih pedas khas fermentasi oncom.
        </>
      ) 
    },
    {
      title: "Fakta Unik Tentang Sumedang",
      content: (
        <>
        <span className="font-bold">-Asal Nama “Sumedang” <br /> </span>Pada masa kolonial Belanda, Bandung disebut "Parijs van Java" karena keindahan kota, arsitektur art deco-nya, dan gaya hidup masyarakatnya yang modern. Bandung saat itu jadi kota mode, pusat nongkrong, dan hiburan elite Hindia Belanda. <br /> <br />
<span className="font-bold">-Kota dengan Kafe Terbanyak di Indonesia</span> <br /> Bandung dikenal sebagai kota anak muda kreatif, dan jumlah kafenya sangat banyak. Hampir tiap sudut Bandung ada coffee shop atau tempat nongkrong yang unik, dari yang estetik sampai yang hidden gem. <br /><br />
<span className="font-bold">-Konferensi Asia Afrika 1955</span> <br /> Bandung jadi tuan rumah Konferensi Asia Afrika pertama di dunia pada tahun 1955, yang dihadiri 29 negara. Konferensi ini mempertemukan negara-negara Asia dan Afrika yang baru merdeka untuk menyuarakan anti-kolonialisme. <br /><br />
<span className="font-bold">-Punya Museum Geologi Paling Lengkap di Asia Tenggara</span> <br /> Museum Geologi Bandung menyimpan koleksi batuan, fosil, dan mineral dari seluruh Indonesia, termasuk tengkorak manusia purba Pithecanthropus erectus. <br /><br />
<span className="font-bold">-Terbentuk karena Gunung Meletus</span> <br /> Cekungan Bandung (Bandung Basin) dulunya danau purba hasil letusan Gunung Sunda sekitar 55 ribu tahun lalu. Itulah sebabnya Bandung dikelilingi pegunungan dan udaranya sejuk. <br /><br />
        </>
      ) 
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={logosumedang} alt="Logo Budaya Banten" className="w-24 h-24 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-6 text-black text-center">BUDAYA KOTA SUMEDANG</h2>
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

export default Sumedang;
