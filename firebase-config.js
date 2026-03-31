// استيراد مكتبات Firebase الأساسية من السيرفر مباشرة (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// إعدادات مشروعك الخاص (سوف تجلبها من منصة Firebase)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// تشغيل Firebase
const app = initializeApp(firebaseConfig);

// تصدير الأدوات لاستخدامها في لوحات التحكم (المدير، الأستاذ، التلميذ)
export const db = getFirestore(app);
export const auth = getAuth(app);
