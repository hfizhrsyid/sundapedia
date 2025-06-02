import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import logobanjar from "../../assets/logobanjar.png";
import kudabanjar from "../../assets/kudabanjar.jpg";
import pencaksilatbanjar from "../../assets/pencaksilatbanjar.jpg";
import comro from "../../assets/comro.jpg";
import surabibanjar from "../../assets/surabibanjar.jpg";

function Banjar() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Sejarah Singkat Banjar",
      content: `Banjar adalah sebuah kota di provinsi Jawa Barat yang dulunya merupakan bagian dari wilayah Kabupaten Ciamis. Nama Banjar diambil dari kata banjarsari, yang berarti kawasan pemukiman yang tertata rapi. Sejak zaman kerajaan Sunda, daerah ini telah menjadi jalur penting penghubung antara Jawa Tengah dan Jawa Barat. Pada masa kolonial Belanda, Banjar berkembang menjadi wilayah strategis karena dilewati jalur kereta api dan perdagangan. Akhirnya pada tahun 2002, Banjar resmi menjadi kota otonom yang berdiri sendiri, lepas dari Kabupaten Ciamis, dan kini dikenal sebagai kota kecil yang berkembang pesat dengan budaya Sunda yang masih kuat serta potensi wisata alam dan pertanian.`,
    },
    {
      title: "Bahasa Daerah Banjar",
      content: (
        <>
          <span className="font-bold">Bahasa Sunda: <br /></span>
          Bahasa daerah yang digunakan di Kota Banjar, Jawa Barat adalah Bahasa Sunda, dengan dialek khas Priangan Timur yang halus dan sopan. Masyarakat di wilayah ini masih memegang aturan undak usuk basa, yaitu tata krama berbahasa Sunda yang membedakan penggunaan bahasa berdasarkan usia, status sosial, dan situasi.
          <br /><br />
          Sementara itu, jika merujuk ke Banjar di Kalimantan Selatan, masyarakatnya menggunakan Bahasa Banjar, bahasa khas suku Banjar yang terbagi menjadi dua dialek utama, yaitu Banjar Hulu dan Banjar Kuala, yang masing-masing memiliki ciri pengucapan dan kosakata berbeda.
        </>
      ),
    },
    {
      title: "Kesenian Daerah Banjar",
      content: (
        <>
          <img src={kudabanjar} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}}  /><br />
          <span className="font-bold">KUDA RENGGONG<br /></span>
          Kota Banjar memiliki berbagai kesenian tradisional yang masih dijaga hingga sekarang, di antaranya Kuda Renggong, yakni seni atraksi kuda yang dihias warna-warni dan diiringi musik tradisional saat mengantar anak khitanan berkeliling kampung.
          <br /><br />
          <img src={pencaksilatbanjar} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}}  /><br />
          <span className="font-bold">PENCAK SILAT<br /></span>
          Selain itu, seni bela diri Pencak Silat juga menjadi warisan budaya di Banjar. Pencak Silat tidak hanya dipertunjukkan dalam acara seni, tetapi juga sebagai bentuk pelatihan bela diri dan pelestarian nilai-nilai adat.
        </>
      ),
    },
    {
      title: "Makanan Tradisional Banjar",
      content: (
        <>
          <img src={surabibanjar} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}}  /><br />
          <span className="font-bold">SURABI<br /></span>
          Surabi adalah kue tradisional yang terbuat dari adonan tepung beras dan santan, dimasak di atas cetakan khusus dengan bentuk bulat pipih dan tekstur yang lembut serta sedikit kenyal. Surabi sering disebut sebagai pancake tradisional versi Indonesia Barat (Sunda), dengan rasa manis dan gurih yang khas.
          <br /><br />
          <img src={comro} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}}  /><br />
          <span className="font-bold">COMRO<br /></span>
          Comro adalah singkatan dari “oncom di jero” yang berarti “oncom di dalam.” Makanan ini berupa gorengan khas Sunda yang terbuat dari singkong parut yang diberi isian oncom berbumbu pedas di dalamnya. Lapisan luarnya renyah, sementara bagian dalamnya gurih dan pedas.
        </>
      ),
    },
    {
      title: "Fakta Unik Tentang Banjar",
      content: (
        <>
          <span className="font-bold">- Kota Seribu Pesantren<br /></span>
          Banjar dikenal sebagai salah satu kota dengan jumlah pesantren terbanyak di Jawa Barat, sehingga mendapat julukan sebagai kota santri yang kental dengan tradisi keagamaan.
          <br /><br />
          <span className="font-bold">- Kuda Renggong<br /></span>
          Banjar memiliki tradisi kesenian unik berupa atraksi Kuda Renggong, yaitu kuda yang dihias warna-warni dan diarak saat acara khitanan anak-anak, menjadi ikon budaya lokal.
          <br /><br />
          <span className="font-bold">- Jalur Perdagangan dan Transportasi<br /></span>
          Dulu Banjar merupakan titik strategis dalam jalur kereta api yang menghubungkan wilayah Jawa Barat dan Jawa Tengah, menjadikannya pusat perdagangan dan transit penting.
          <br /><br />
          <span className="font-bold">- Pusat Kerajinan Anyaman<br /></span>
          Banjar juga terkenal dengan kerajinan tangan berbahan bambu seperti anyaman besek, tampah, dan peralatan rumah tangga tradisional yang tetap dilestarikan hingga kini.
          <br /><br />
          <span className="font-bold">- Letak Geografis yang Unik<br /></span>
          Terletak di dataran tinggi dan pegunungan, Banjar memiliki udara sejuk dan pemandangan alam yang indah, menjadikannya tempat menarik untuk wisata alam di Priangan Timur.
        </>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={logobanjar} alt="Logo Budaya Banjar" className="w-24 h-24 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-6 text-black text-center">BUDAYA KOTA BANJAR</h2>
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

export default Banjar;
