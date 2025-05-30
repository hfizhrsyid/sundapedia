import React from 'react';
import Navbar from '../../components/Navbar';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, '-');

const Part = ({ parts }) => (
  <ul className="list-none pl-0">
    {parts.map((part, idx) => (
      <li key={idx} className="mb-2">
        <a href={`/pembelajaran/${slugify(part.title)}`}
           className="block w-full px-4 py-3 rounded bg-blue-100 hover:bg-blue-200 text-black font-semibold transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-300 shadow border border-white">
          <span className="block text-base font-semibold mb-1">{part.title}</span>
          <span className="block text-sm text-gray-800 leading-snug">{part.content}</span>
        </a>
      </li>
    ))}
  </ul>
);

const CourseCard = ({ course }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full max-w-xl border border-gray-200">
    <h2 className="text-xl font-bold mb-1 text-black">{course.title}</h2>
    <p className="mb-3 text-gray-900">{course.description}</p>
    <Part parts={course.parts} />
  </div>
);

const Course = () => (
  <div className="flex flex-col items-center w-full px-2">
    {COURSE_LIST.map((course, idx) => (
      <CourseCard key={idx} course={course} />
    ))}
  </div>
);

const COURSE_LIST = [
  {
    title: "Pengenalan Bahasa Sunda",
    description: "Dasar-dasar Bahasa Sunda, sejarah, dan penggunaannya di masyarakat.",
    parts: [
      {
        title: "Apa itu Bahasa Sunda?",
        content: "Penjelasan singkat tentang Bahasa Sunda, sejarah, dan persebarannya di Indonesia."
      },
      {
        title: "Aksara Sunda",
        content: "Pengenalan aksara Sunda, sejarah, dan contoh penggunaannya."
      },
      {
        title: "Dialek dan Ragam",
        content: "Penjelasan tentang dialek-dialek Sunda dan perbedaan ragam bahasa Sunda."
      }
    ]
  },
  {
    title: "Kalimat dan Ungkapan Sehari-hari",
    description: "Kumpulan kalimat dan ungkapan yang sering digunakan dalam kehidupan sehari-hari.",
    parts: [
      {
        title: "Sapaan dan Salam",
        content: "Contoh sapaan, salam, dan penggunaannya dalam percakapan."
      },
      {
        title: "Perkenalan Diri",
        content: "Bagaimana cara memperkenalkan diri dalam Bahasa Sunda."
      },
      {
        title: "Ekspresi Umum",
        content: "Ungkapan-ungkapan umum seperti terima kasih, maaf, permisi, dan sebagainya."
      }
    ]
  },
  {
    title: "Tata Bahasa Dasar",
    description: "Penjelasan tentang struktur kalimat, kata ganti, kata kerja, dan tata bahasa dasar lainnya.",
    parts: [
      {
        title: "Struktur Kalimat",
        content: "Bagaimana membentuk kalimat sederhana dalam Bahasa Sunda."
      },
      {
        title: "Kata Ganti Orang",
        content: "Daftar kata ganti orang (aku, kamu, dia, dll) dan penggunaannya."
      },
      {
        title: "Kata Kerja Dasar",
        content: "Kata kerja yang sering digunakan dan cara menggunakannya."
      }
    ]
  },
  {
    title: "Percakapan Praktis",
    description: "Simulasi percakapan dalam berbagai situasi: di pasar, di sekolah, di rumah, dll.",
    parts: [
      {
        title: "Di Pasar",
        content: "Contoh percakapan jual beli di pasar."
      },
      {
        title: "Di Sekolah",
        content: "Percakapan antara guru dan murid, serta antar teman di sekolah."
      },
      {
        title: "Di Rumah",
        content: "Percakapan sehari-hari di lingkungan keluarga."
      }
    ]
  },
  {
    title: "Budaya dan Adat Sunda",
    description: "Pengenalan budaya, tradisi, dan adat istiadat masyarakat Sunda.",
    parts: [
      {
        title: "Upacara Adat",
        content: "Penjelasan tentang upacara-upacara adat Sunda."
      },
      {
        title: "Makanan Khas",
        content: "Daftar makanan khas Sunda dan penjelasannya."
      },
      {
        title: "Seni dan Musik",
        content: "Pengenalan seni, musik, dan alat musik tradisional Sunda."
      }
    ]
  }
];

function Pembelajaran() {
  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <div className='flex flex-col justify-center items-center text-black'>
        <h1 className='font-bold'>Bahasa Sunda</h1>
        <p>Selamat datang di halaman pembelajaran Bahasa Sunda!</p>
      </div>
      <Course />
    </div>
  );
}

export default Pembelajaran;
