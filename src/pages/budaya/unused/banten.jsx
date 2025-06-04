import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import logobanten from "../../assets/logobanten.png"
import debus from "../../assets/debus.jpg"
import rampakbedug from "../../assets/rampakbedug.jpg"
import satebandeng from "../../assets/satebandeng.jpg"
import rabeg from "../../assets/rabeg.jpg"

function Banten() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Sejarah Singkat Banten",
      content: `Banten adalah wilayah yang dulu dikenal sebagai pusat Kerajaan Banten, salah satu kerajaan Islam terbesar dan paling berpengaruh di Nusantara pada abad ke-16 hingga abad ke-18. Kerajaan ini didirikan oleh Sultan Maulana Hasanuddin, putra dari Sunan Gunung Jati, seorang penyebar Islam dari Cirebon.
Kerajaan Banten berkembang pesat karena letaknya yang strategis di ujung barat Pulau Jawa, menguasai jalur perdagangan penting antara Samudra Hindia dan Selat Sunda. Pelabuhan Banten menjadi pusat perdagangan rempah-rempah yang sangat ramai, menarik pedagang dari berbagai negara seperti Arab, China, dan Eropa.
Banten juga dikenal dengan Masjid Agung Banten, yang merupakan salah satu simbol kejayaan Islam di Indonesia. Namun, kekuasaan Kerajaan Banten mulai melemah pada abad ke-18 akibat konflik internal dan tekanan kolonial Belanda.
Pada masa penjajahan Belanda, wilayah Banten sempat menjadi bagian dari pemerintahan kolonial Hindia Belanda. Setelah Indonesia merdeka, Banten masih menjadi bagian dari Provinsi Jawa Barat sampai akhirnya pada tahun 2000, Banten resmi menjadi provinsi tersendiri.
Secara singkat, Banten adalah wilayah yang kaya akan sejarah, terutama sebagai pusat kerajaan Islam dan pelabuhan perdagangan yang penting di Nusantara.`,
    },
    {
      title: "Bahasa Daerah Banten",
      content: (
        <>
        <span className="font-bold">Bahasa Sunda: <br /></span> Bahasa Sunda yang dipakai di Banten ini agak berbeda dialeknya dengan bahasa Sunda yang digunakan di daerah Priangan (seperti Bandung, Garut). Dialek Sunda Banten cenderung memiliki logat yang khas dan beberapa kosakata yang berbeda, meski secara umum masih bisa dimengerti oleh penutur Sunda dari daerah lain. Bahasa Sunda ini digunakan oleh masyarakat di wilayah Banten Selatan dan sebagian besar penduduk Banten.
        <br /><br />
        <span className="font-bold">Bahasa Baduy: <br /></span> Ini adalah bahasa yang digunakan oleh suku Baduy, kelompok masyarakat adat yang tinggal di kawasan Pegunungan Kendeng di Banten Tengah. Bahasa Baduy mirip dengan bahasa Sunda, tapi memiliki kosakata dan tata bahasa yang lebih konservatif karena mereka menjaga adat dan tradisi secara ketat, sehingga bahasanya tetap terjaga keasliannya.
        </>
      ),
    },
    {
      title: "Kesenian Daerah Banten",
      content: (
        <>
        <img src={debus} alt="gambar" className="p-7 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">DEBUS <br /> </span> Debus adalah salah satu kesenian tradisional yang berasal dari daerah Banten, Indonesia. Kesenian ini unik karena menggabungkan unsur seni bela diri, pertunjukan spiritual, dan atraksi kekebalan tubuh terhadap berbagai benda tajam dan benda panas. Debus tidak sekadar hiburan, tapi juga memiliki nilai budaya, sejarah, dan spiritual yang kuat bagi masyarakat Banten.
        <br /><br />
        <img src={rampakbedug} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">RAMPAK BEDUG <br /></span> Rampak Bedug adalah salah satu kesenian tradisional khas dari Provinsi Banten, Indonesia. Kata rampak sendiri berarti serempak atau bersama-sama, sedangkan bedug adalah alat musik tradisional berupa genderang besar yang biasanya dipakai di masjid untuk penanda waktu salat atau acara keagamaan. Jadi, Rampak Bedug bisa diartikan sebagai pertunjukan memainkan bedug secara bersama-sama dengan irama yang dinamis dan penuh semangat. Biasanya, seni ini dipadukan dengan alat musik lain seperti kentongan, angklung, dan alat perkusi tradisional lainnya.
        </>
      )
    },
    {
      title: "Makanan Tradisional Banten",
      content: (
        <>
        <img src={satebandeng} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">SATE BANDENG <br /> </span> Sate Bandeng adalah makanan khas dari Provinsi Banten, tepatnya dari daerah Serang dan sekitarnya. Meski namanya “sate”, sajian ini berbeda dari sate pada umumnya yang berupa potongan daging tusuk-tusuk. Sate Bandeng justru dibuat dari daging ikan bandeng yang dihaluskan, dicampur bumbu rempah, lalu dimasukkan kembali ke dalam kulit bandeng, dibentuk menyerupai ikan utuh, dan dibakar.
        <br /><br />
        <img src={rabeg} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">RABEG <br /> </span> Rabeg adalah masakan tradisional khas Banten, terutama dari daerah Serang. Ini adalah olahan daging (biasanya daging kambing, tapi bisa juga sapi) yang dimasak dengan bumbu rempah-rempah khas Indonesia. Kuahnya kental berwarna coklat, rasanya gurih, manis, dan sedikit pedas mirip semur, tapi lebih kaya rempah dan beraroma khas Timur Tengah.
        </>
      ) 
    },
    {
      title: "Fakta Unik Tentang Banten",
      content: (
        <>
        <span className="font-bold">-Provinsi Termuda di Pulau Jawa <br /> </span>Banten resmi menjadi provinsi tersendiri pada tahun 2000, memisahkan diri dari Provinsi Jawa Barat. Jadi, secara administratif, Banten adalah provinsi termuda di Pulau Jawa. <br /> <br />
<span className="font-bold">-Kerajaan Banten yang Kaya Sejarah</span> <br /> Dahulu, Banten adalah pusat Kerajaan Banten yang kuat dan kaya, terkenal sebagai pelabuhan perdagangan penting di masa kerajaan-kerajaan Islam di Nusantara. Kerajaan ini terkenal dengan masjid Agung Banten dan Benteng Speelwijk. <br /><br />
<span className="font-bold">-Pantai dan Alam yang Menawan</span> <br /> Banten punya pantai-pantai indah seperti Pantai Anyer, Pantai Carita, dan Tanjung Lesung yang menjadi destinasi wisata favorit, dengan panorama alam yang masih asri dan ombak cocok untuk surfing. <br /><br />
<span className="font-bold">-Pusat Industri dan Pelabuhan Strategis</span> <br /> Kota Cilegon di Banten dikenal sebagai pusat industri berat dan pelabuhan besar (Pelabuhan Merak), menghubungkan Pulau Jawa dengan Sumatra melalui kapal feri. <br /><br />
        </>
      ) 
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={logobanten} alt="Logo Budaya Banten" className="w-24 h-24 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-6 text-black text-center">BUDAYA BANTEN</h2>
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

export default Banten;
