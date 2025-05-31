// src/utils/removeLegacyPartsArray.js
import { db } from '../firebase.js';
import { collection, getDocs, updateDoc, doc, deleteField } from 'firebase/firestore';

async function removeLegacyPartsArray() {
  const coursesRef = collection(db, 'courses');
  const coursesSnap = await getDocs(coursesRef);

  for (const courseDoc of coursesSnap.docs) {
    await updateDoc(doc(db, 'courses', courseDoc.id), { parts: deleteField() });
    console.log(`Removed legacy parts array from course: ${courseDoc.id}`);
  }
  console.log('Legacy parts arrays removed from all courses!');
}

removeLegacyPartsArray();
