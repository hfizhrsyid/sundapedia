import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import bogor from "../../assets/bogor.jpg"
import taritopeng from "../../assets/taritopeng.png"
import rampakkendang from "../../assets/rampakkendang.jpg"
import laksa from "../../assets/laksa.webp"
import asinanbogor from "../../assets/asinanbogor.jpeg"

function Bogor() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Sejarah Singkat Bogor",
      content: `Kota Bogor memiliki sejarah panjang yang bermula dari zaman kerajaan Sunda sebagai pusat pemerintahan dan pusat kebudayaan pada abad ke-15 dengan nama Pakuan Pajajaran. Setelah keruntuhan Kerajaan Pajajaran pada abad ke-16 akibat serangan Kesultanan Banten, wilayah ini mengalami perubahan pengaruh dan akhirnya menjadi bagian dari wilayah kolonial Belanda. Pada masa kolonial, Bogor dikenal dengan nama Buitenzorg dan menjadi tempat kediaman gubernur jenderal Belanda serta pusat pemerintahan kolonial yang memiliki kebun raya terkenal, yaitu Kebun Raya Bogor. Setelah Indonesia merdeka, Bogor berkembang menjadi kota administratif dan pusat pendidikan serta pariwisata dengan berbagai situs sejarah, taman, dan kuliner khas yang terkenal hingga kini.`,
    },
    {
      title: "Bahasa Daerah Bogor",
      content: (
        <>
        <span className="font-bold">Bahasa Sunda: <br /></span> Bahasa daerah yang digunakan di Kota Bogor adalah Bahasa Sunda, sama seperti di sebagian besar wilayah Jawa Barat. Namun, di Bogor, bahasa Sunda memiliki dialek khas yang disebut Dialek Bogor atau Sunda Bogor, yang memiliki ciri intonasi dan kosakata unik dibandingkan dengan dialek Sunda dari daerah lain seperti Bandung atau Garut. Selain itu, masyarakat Bogor juga sering menggunakan bahasa Indonesia dalam kehidupan sehari-hari, terutama di lingkungan perkotaan dan pendidikan, namun bahasa Sunda tetap kuat digunakan dalam komunikasi sehari-hari di kalangan keluarga dan komunitas lokal.
        </>
      ),
    },
    {
      title: "Kesenian Daerah Bogor",
      content: (
        <>
        <img src={taritopeng} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">TARI TOPENG<br /></span>Tari Topeng Bogor merupakan tarian yang menggunakan topeng kayu sebagai alat utama dalam pertunjukan. Tari ini menggambarkan berbagai karakter dan cerita rakyat Sunda dengan gerakan yang ekspresif dan simbolis.
        <br /><br /><br />
        <img src={rampakkendang} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">RAMPAK KENDANG<br /></span> Rampak Kendang adalah pertunjukan musik perkusi dengan alat kendang yang dimainkan secara kompak dan dinamis oleh sekelompok pemain. Kesenian ini biasanya mengiringi tarian atau upacara adat di Bogor.
        </>
      )
    },
    {
      title: "Makanan Tradisional Bogor",
      content: (
        <>
        <img src={laksa} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">LAKSA<br /> </span>  Menu tradisional berupa nasi hangat yang dicampur dengan oncom bakar atau goreng lalu ditumbuk bersama bumbu. Disajikan dengan lauk sederhana seperti ayam goreng, sambal, lalapan, dan tahu Sumedang. Rasanya gurih pedas khas fermentasi oncom.
        <br /><br /><br />
        <img src={asinanbogor} alt="gambar" className="p-6 w-80 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">ASINAN <br /> </span> Asinan adalah makanan segar berisi sayur atau buah yang diasinkan dan disajikan dengan bumbu kacang pedas manis. Asinan Bogor terkenal dengan rasa segar dan gurihnya, sering dijual di gerobak di pinggir jalan.
        </>
      ) 
    },
    {
      title: "Fakta Unik Tentang Bogor",
      content: (
        <>
        <span className="font-bold">-Kota Hujan <br /> </span>Bogor dikenal sebagai “Kota Hujan” karena curah hujannya yang tinggi dibandingkan kota-kota lain di Indonesia. Hujan di Bogor bisa turun hampir setiap hari, terutama di musim penghujan.<br /> <br />
<span className="font-bold">-Kebun Raya Bogor</span> <br /> Kebun Raya Bogor adalah salah satu kebun botani tertua dan terbesar di Asia Tenggara, didirikan sejak tahun 1817. Kebun ini menjadi pusat penelitian tanaman tropis dan tempat rekreasi favorit warga lokal maupun wisatawan.<br /><br />
<span className="font-bold">-Istana Bogor</span> <br /> Istana Bogor adalah salah satu istana kepresidenan Indonesia yang dibangun pada zaman kolonial Belanda. Istana ini terkenal karena koleksi rusa timor yang bebas berkeliaran di area sekitarnya.Istana Bogor adalah salah satu istana kepresidenan Indonesia yang dibangun pada zaman kolonial Belanda. Istana ini terkenal karena koleksi rusa timor yang bebas berkeliaran di area sekitarnya. <br /><br />
<span className="font-bold">-Asinan Bogor Legendaris</span> <br /> Asinan Bogor menjadi makanan khas yang sangat terkenal dan sudah ada sejak puluhan tahun lalu. Keunikan asinan Bogor terletak pada kuah bumbunya yang segar dan perpaduan rasa manis, asam, dan pedas. <br /><br />
<span className="font-bold">-Tempat Pertemuan Kebudayaan</span> <br /> Bogor merupakan tempat bertemunya berbagai budaya Sunda dan Betawi, sehingga di sini terdapat perpaduan tradisi dan adat yang unik dan kaya. <br /><br />
        </>
      ) 
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={bogor} alt="Logo Budaya Banten" className="w-24 h-24 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-6 text-black text-center">BUDAYA KOTA BOGOR</h2>
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

export default Bogor;
