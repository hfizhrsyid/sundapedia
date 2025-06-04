// scripts/uploadBudayaData.js
const { initializeApp } = require("firebase/app");
const { getFirestore, setDoc, doc } = require("firebase/firestore");
const { budayaData } = require("../src/pages/budaya/budayaData"); // Export as .js or .json for Node

// 1. Copy your firebaseConfig from src/firebase.js
const firebaseConfig = {
  // ...your config here...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadBudaya() {
  for (const budaya of budayaData) {
    // Remove any React elements from sections for Firestore (convert to string if needed)
    const cleanSections = budaya.sections.map(sec => ({
      ...sec,
      content: typeof sec.content === "string" ? sec.content : "[See website for rich content]",
    }));
    await setDoc(doc(db, "budaya", budaya.slug), {
      ...budaya,
      sections: cleanSections,
    });
    console.log(`Uploaded: ${budaya.slug}`);
  }
  console.log("All budaya uploaded!");
}

uploadBudaya();