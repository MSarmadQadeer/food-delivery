import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  // Add your configuration
  apiKey: "AIzaSyCwdav1vJZWROv_Lvqp45eeDKGbLt6-KXg",
  authDomain: "food-delivery-react-native-101.firebaseapp.com",
  projectId: "food-delivery-react-native-101",
  storageBucket: "food-delivery-react-native-101.appspot.com",
  messagingSenderId: "136243379813",
  appId: "1:136243379813:web:e1ba1f6ae861623d52108c",
  measurementId: "G-N35HRSP9XH"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };