// src/utils/migratePartsArrayToSubcollection.js
import { db } from '../firebase.js';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, '-');

async function migratePartsArrayToSubcollection() {
  const coursesRef = collection(db, 'courses');
  const coursesSnap = await getDocs(coursesRef);

  for (const courseDoc of coursesSnap.docs) {
    const courseId = courseDoc.id;
    const course = courseDoc.data();
    if (Array.isArray(course.parts)) {
      for (const part of course.parts) {
        const slug = slugify(part.title || '');
        const partRef = doc(collection(db, 'courses', courseId, 'parts'), slug);
        await setDoc(partRef, {
          ...part,
          slug,
          blocks: part.blocks || [
            { type: 'text', content: part.content || '' }
          ],
        });
        console.log(`Migrated part '${part.title}' to subcollection for course '${course.title}'`);
      }
    }
  }
  console.log('Migration complete!');
}

migratePartsArrayToSubcollection();
