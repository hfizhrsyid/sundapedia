// src/utils/addPartsToCourses.js
import { db } from '../firebase.js';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, '-');

const COURSES_TO_UPDATE = [
  {
    title: "Budaya dan Adat Sunda",
    parts: [
      { title: "Upacara Adat", content: "Penjelasan tentang upacara-upacara adat Sunda." },
      { title: "Makanan Khas", content: "Daftar makanan khas Sunda dan penjelasannya." },
      { title: "Seni dan Musik", content: "Pengenalan seni, musik, dan alat musik tradisional Sunda." },
    ]
  },
  {
    title: "Tata Bahasa Dasar",
    parts: [
      { title: "Struktur Kalimat", content: "Bagaimana membentuk kalimat sederhana dalam Bahasa Sunda." },
      { title: "Kata Ganti Orang", content: "Daftar kata ganti orang (aku, kamu, dia, dll) dan penggunaannya." },
      { title: "Kata Kerja Dasar", content: "Kata kerja yang sering digunakan dan cara menggunakannya." },
    ]
  },
  {
    title: "Kalimat dan Ungkapan Sehari-hari",
    parts: [
      { title: "Sapaan dan Salam", content: "Contoh sapaan, salam, dan penggunaannya dalam percakapan." },
      { title: "Perkenalan Diri", content: "Bagaimana cara memperkenalkan diri dalam Bahasa Sunda." },
      { title: "Ekspresi Umum", content: "Ungkapan-ungkapan umum seperti terima kasih, maaf, permisi, dan sebagainya." },
    ]
  },
];

async function addPartsToCourses() {
  for (const course of COURSES_TO_UPDATE) {
    // Find the course by title
    const q = query(collection(db, 'courses'), where('title', '==', course.title));
    const snap = await getDocs(q);
    if (snap.empty) {
      console.log(`Course not found: ${course.title}`);
      continue;
    }
    const courseDoc = snap.docs[0];
    const courseId = courseDoc.id;
    for (const part of course.parts) {
      const slug = slugify(part.title);
      await addDoc(collection(db, 'courses', courseId, 'parts'), {
        title: part.title,
        slug,
        blocks: [
          { type: 'text', content: part.content }
        ]
      });
      console.log(`Added part '${part.title}' to course '${course.title}'`);
    }
  }
  console.log('Done adding parts!');
}

addPartsToCourses();
