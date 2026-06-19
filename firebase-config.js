import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyDhwNJSe-a5I7OqtrZ2YMBf7Nas_a47MsQ",
authDomain: "sir-mean-academy-portal.firebaseapp.com",
databaseURL: "https://sir-mean-academy-portal-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "sir-mean-academy-portal",
storageBucket: "sir-mean-academy-portal.firebasestorage.app",
messagingSenderId: "93730400714",
appId: "1:93730400714:web:60450cbecc48aa2a754733"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
