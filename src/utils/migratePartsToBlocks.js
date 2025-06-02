// src/utils/migratePartsToBlocks.js
import { db } from '../firebase.js';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

async function migratePartsToBlocks() {
  const coursesRef = collection(db, 'courses');
  const coursesSnap = await getDocs(coursesRef);

  for (const courseDoc of coursesSnap.docs) {
    const course = courseDoc.data();
    const updatedParts = course.parts.map(part => ({
      ...part,
      blocks: [
        { type: 'text', content: part.content }
        // You can add more blocks here if you want!
      ]
    }));
    await updateDoc(doc(db, 'courses', courseDoc.id), { parts: updatedParts });
    console.log(`Migrated course: ${course.title}`);
  }
  console.log('Migration complete!');
}

migratePartsToBlocks();