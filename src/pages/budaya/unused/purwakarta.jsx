import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import logopurwakarta from "../../assets/logopurwakarta.png"
import wayangpwk from "../../assets/wayangpwk.jpg"
import calungpwk from "../../assets/calungpwk.jpg"
import empalgentongpwk from "../../assets/empalgentongpwk.webp"
import doclangpwk from "../../assets/doclangpwk.jpg"

function Purwakarta() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Sejarah Singkat Purwakarta",

      content: (
        <>
        <p>Purwakarta adalah sebuah kabupaten di Provinsi Jawa Barat yang berdiri sejak masa kolonial Belanda. Nama Purwakarta berasal dari kata “Purwa” yang berarti awal dan “Karta” yang berarti kota atau tempat yang makmur, sehingga berarti “kota awal yang makmur.” Wilayah ini dulunya merupakan bagian dari kerajaan Sunda dan menjadi pusat pemerintahan lokal serta daerah strategis dalam jalur perdagangan antara Bandung dan Jakarta. Purwakarta juga dikenal dengan bendungan Jatiluhur yang merupakan bendungan pertama dan terbesar di Indonesia, berperan penting dalam irigasi, pembangkit listrik, dan pengendalian banjir. Saat ini, Purwakarta berkembang pesat sebagai daerah industri dan pariwisata dengan kekayaan budaya Sunda yang tetap terjaga.</p>
        </>
      ) 
    },
    {
      title: "Bahasa Daerah Purwakarta",
      content: (
        <>
        <span className="font-bold">Bahasa Sunda: <br /></span> Bahasa daerah yang digunakan di Purwakarta adalah Bahasa Sunda, khususnya dialek Priangan yang merupakan bagian dari kelompok dialek Sunda Tengah. Bahasa Sunda di Purwakarta memiliki ciri khas pelafalan dan kosakata yang sedikit berbeda dari wilayah Sunda lain, namun masih mudah dipahami oleh penutur Sunda secara umum. Dalam kehidupan sehari-hari, masyarakat Purwakarta menggunakan Bahasa Sunda dengan undak usuk basa - tata krama berbahasa yang menyesuaikan penggunaan kata dan gaya bicara berdasarkan usia, status sosial, dan situasi, sehingga bahasa ini sangat kaya dan penuh sopan santun.
        </>
      ),
    },
    {
      title: "Kesenian Daerah Purwakarta",
      content: (
        <>
        <img src={wayangpwk} alt="gambar" className="p-6 w-85 mx-auto" style={{borderRadius: '30px'}} />
        <span className="font-bold">WAYANG GOLEK<br /></span> Wayang Golek Purwakarta adalah seni pertunjukan boneka kayu khas Sunda yang mengisahkan cerita-cerita dari epik Mahabharata, Ramayana, serta cerita rakyat Sunda. Boneka wayang yang diukir dengan detail ini dimainkan oleh dalang yang menggerakkan boneka sambil mengisahkan cerita dengan gaya bahasa Sunda yang khas, lengkap dengan dialog dan sulukan (nyanyian). Pertunjukan ini biasanya diiringi oleh gamelan degung atau karawitan Sunda, menciptakan suasana magis dan edukatif yang menghibur sekaligus menyampaikan nilai-nilai moral dan budaya.
        <br /><br /><br />
        <img src={calungpwk} alt="gambar" className="p-6 w-85 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">CALUNG<br /></span> Adalah alat musik tradisional Sunda yang terbuat dari batang bambu yang dipotong dan disusun sedemikian rupa sehingga menghasilkan nada-nada melodis ketika dipukul menggunakan alat pemukul khusus. Di Purwakarta, Calung biasanya dimainkan secara berkelompok dalam pertunjukan musik rakyat yang energik dan penuh semangat, sering kali disertai dengan tarian dan nyanyian. Musik Calung memiliki irama cepat dan ceria, menggambarkan kegembiraan dan semangat kebersamaan masyarakat Sunda.
        </>
      )
    },
    {
      title: "Makanan Tradisional Purwakarta",
      content: (
        <>
        <img src={doclangpwk} alt="gambar" className="p-6 w-85 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">DOCLANG<br /> </span> Doclang adalah hidangan tradisional Sunda yang sangat populer di Purwakarta dan sekitarnya. Makanan ini merupakan perpaduan dari berbagai bahan seperti lontong, tahu goreng, telur rebus, kentang rebus, dan terkadang kerupuk, yang kemudian disiram dengan bumbu kacang kental dan dilengkapi dengan kuah kaldu gurih. Doclang sering dianggap sebagai makanan sarapan atau camilan yang mengenyangkan dan lezat.
        <br /><br /><br />
        <img src={empalgentongpwk} alt="gambar" className="p-6 w-85 mx-auto" style={{borderRadius: '30px'}} /> <br />
        <span className="font-bold">EMPAL GENTONG<br /> </span> Empal Gentong adalah makanan khas daerah Cirebon yang juga populer di Purwakarta dan sekitarnya. Hidangan ini berupa sup daging sapi yang dimasak dalam gentong (periuk tanah liat) menggunakan kayu bakar, sehingga menghasilkan cita rasa yang khas dan aroma asap yang menggoda. Kuahnya kental berwarna kekuningan karena bumbu rempah seperti kunyit, ketumbar, serai, dan santan yang berpadu sempurna. Potongan daging sapi dan jeroan seperti babat atau usus menjadi isi utama, disantap bersama nasi putih atau lontong. Empal Gentong terkenal dengan rasa gurih, kaya rempah, dan tekstur daging yang empuk, menjadi salah satu kuliner tradisional yang selalu dicari saat berkunjung ke wilayah Priangan Timur dan Cirebon.
        </>
      ) 
    },
    {
      title: "Fakta Unik Tentang Purwakarta",
      content: (
        <>
        <span className="font-bold">-Kota Air dan Waduk Jatiluhur<br /> </span>Purwakarta terkenal dengan Waduk Jatiluhur, bendungan pertama dan terbesar di Indonesia yang berfungsi sebagai sumber irigasi, pembangkit listrik, serta pengendali banjir. Waduk ini juga menjadi destinasi wisata air dan olahraga air yang populer.<br /> <br />
        <span className="font-bold">-Festival Karapan Sapi</span> <br /> Purwakarta memiliki tradisi unik bernama Karapan Sapi, yaitu lomba pacuan sapi yang mirip dengan tradisi di Madura, tetapi dengan ciri khas lokal yang menjadi daya tarik budaya masyarakat setempat.<br /><br />
        <span className="font-bold">-Sentra Kerajinan Anyaman Bambu</span> <br /> Selain sebagai daerah industri, Purwakarta juga dikenal sebagai pusat kerajinan anyaman bambu seperti besek, tampah, dan keranjang yang tetap lestari sebagai warisan budaya.<br /><br />
        <span className="font-bold">-Sejarah Nama</span> <br /> Nama Purwakarta berasal dari bahasa Sanskerta, “Purwa” berarti awal atau pertama, dan “Karta” berarti makmur atau sejahtera, sehingga memiliki arti “kota pertama yang makmur.”<br /><br />
        <span className="font-bold">-Kota Industri dan Wisata</span> <br /> Purwakarta adalah perpaduan antara daerah industri modern dan kekayaan budaya tradisional, dengan banyak tempat wisata alam dan budaya yang menarik.<br /><br />
        </>
      ) 
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={logopurwakarta} alt="Logo Budaya Banten" className="w-25 h-30 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-6 text-black text-center">BUDAYA KOTA PURWAKARTA</h2>
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

export default Purwakarta;
