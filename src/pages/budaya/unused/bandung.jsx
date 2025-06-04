import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import logobandung from "../../assets/logobandung.png"
import angklung from "../../assets/angklung.jpg"
import jaipong from "../../assets/jaipong.jpg"
import siomay from "../../assets/siomay.webp"
import seblak from "../../assets/seblak.jpg"
function Bandung() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Sejarah Singkat Bandung",
      content: `Bandung adalah ibu kota Provinsi Jawa Barat yang punya sejarah panjang sejak era penjajahan Belanda. Nama Bandung berasal dari kata bendung atau banding, yang artinya tanah yang terbendung oleh aliran lava Gunung Tangkuban Parahu, sehingga membentuk cekungan besar yang sekarang jadi Kota Bandung.
Pada abad ke-17, daerah ini masih berupa hutan dan rawa. Baru pada tahun 1810, Gubernur Jenderal Hindia Belanda Herman Willem Daendels memerintahkan pembangunan jalan raya Anyer–Panarukan melewati Bandung. Saat itu, pusat pemerintahan dipindahkan dari Dayeuh Kolot ke lokasi baru di dekat jalan besar itu, yang kini jadi pusat Kota Bandung.
Bandung mulai berkembang pesat di masa penjajahan Belanda karena udaranya sejuk dan strategis, hingga dijuluki "Parijs van Java" (Paris-nya Pulau Jawa) karena keindahan kotanya dan gaya hidup masyarakatnya yang modern saat itu.
Selain itu, Bandung juga dikenal lewat peristiwa bersejarah Konferensi Asia Afrika tahun 1955, di mana para pemimpin dari negara-negara Asia dan Afrika berkumpul untuk memperjuangkan kemerdekaan dan kerja sama antar-negara berkembang.
Hari jadi Kota Bandung diperingati setiap tanggal 25 September 1810, bertepatan dengan pemindahan pusat pemerintahan tersebut.`,
    },
    {
      title: "Bahasa Daerah Bandung",
      content: (
        <>
        <span className="font-bold">Bahasa Sunda Priangan: <br /></span> Bahasa Sunda Priangan dipakai di Bandung, Garut, Tasikmalaya, Cianjur, hingga Sukabumi.
Dibanding dialek Sunda di Banten atau Ciamis, Sunda Priangan lebih halus dan memiliki tingkatan tutur yang cukup lengkap, yaitu:
Loma: bahasa sehari-hari antar teman sebaya.
Lemés: bahasa sopan untuk orang yang dihormati atau lebih tua.
Basa Kasar: dipakai saat marah atau bercanda akrab (biasanya di lingkungan tertentu saja).
        <br /><br />
        <span className="font-bold">Kenapa Sunda Bandung Terkenal? <br /></span> Karena selain dipakai di pusat kota, Bahasa Sunda Bandung sering muncul di media, film, sinetron, dan stand-up comedy. Ucapannya lembut dan intonasinya khas, jadi mudah dikenali orang luar sebagai "logat Sunda Bandung".
        </>
      ),
    },
    {
      title: "Kesenian Daerah Bandung",
      content: (
        <>
        <img src={angklung} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">ANGKLUNG<br /> </span> Alat musik tradisional dari bambu yang dimainkan dengan cara digoyang.
Biasanya dimainkan secara berkelompok, menghasilkan harmoni yang khas.
Di Bandung ada Saung Angklung Udjo tempat pertunjukan dan pelestarian angklung yang terkenal sampai mancanegara.
        <br /><br />
        <img src={jaipong} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">JAIPONG<br /></span> Tari tradisional Sunda yang lahir di Bandung sekitar tahun 1970-an. Ciri khasnya gerakan lincah, dinamis, dengan iringan kendang, rebab, dan gamelan Sunda. Dulu sempat jadi simbol perlawanan budaya terhadap hiburan barat.
        </>
      )
    },
    {
      title: "Makanan Tradisional Bandung",
      content: (
        <>
        <img src={siomay} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">SIOMAY BANDUNG <br /> </span> Adonan ikan tenggiri atau ayam, dibentuk bola-bola, dikukus. Pelengkap: Tahu kukus, pare, kol, telur rebus, kentang. Saus: Bumbu kacang yang gurih, sedikit pedas, plus kecap dan jeruk limau.
        <br /><br /><br />
        <img src={seblak} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">SEBLAK <br /> </span> Kerupuk basah yang direbus, lalu dimasak dengan bumbu kencur, cabai, bawang, dan bumbu khas Sunda. Tambahan: Bisa pakai makaroni, ceker ayam, bakso, sosis, telur, hingga sayuran. Ciri khas: Rasa pedas gurih dan aroma kencur yang kuat.
        </>
      ) 
    },
    {
      title: "Fakta Unik Tentang Bandung",
      content: (
        <>
        <span className="font-bold">-Dijuluki "Parijs van Java" <br /> </span>Pada masa kolonial Belanda, Bandung disebut "Parijs van Java" karena keindahan kota, arsitektur art deco-nya, dan gaya hidup masyarakatnya yang modern. Bandung saat itu jadi kota mode, pusat nongkrong, dan hiburan elite Hindia Belanda. <br /> <br />
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
      <img src={logobandung} alt="Logo Budaya Banten" className="w-24 h-24 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-6 text-black text-center">BUDAYA KOTA BANDUNG</h2>
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

export default Bandung;
