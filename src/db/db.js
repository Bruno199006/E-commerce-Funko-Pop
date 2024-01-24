
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQ9GcOIGA6T4HroFzphW_jSY03xwayBHo",
  authDomain: "e-commerce-funko-85cf6.firebaseapp.com",
  projectId: "e-commerce-funko-85cf6",
  storageBucket: "e-commerce-funko-85cf6.appspot.com",
  messagingSenderId: "1022163829166",
  appId: "1:1022163829166:web:6beab49dc85cf203bcc83f"
};


 initializeApp(firebaseConfig);

 const db = getFirestore()

 export default db