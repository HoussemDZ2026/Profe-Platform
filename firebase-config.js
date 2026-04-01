// 1. استيراد المكتبات الأساسية من سيرفرات جوجل مباشرة (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 2. إعدادات مشروعك "Profe-Platform" (التي نسختها أنت)
const firebaseConfig = {
  apiKey: "AIzaSyBFfVM4AUNYpi0LINC0rx5LPC2jVZ4b-m8",
  authDomain: "profe-platform.firebaseapp.com",
  projectId: "profe-platform",
  storageBucket: "profe-platform.firebasestorage.app",
  messagingSenderId: "689046278880",
  appId: "1:689046278880:web:67c01ac4f149a06f62b685",
  measurementId: "G-0HHGMDW0J0"
};

// 3. تشغيل Firebase في الموقع
const app = initializeApp(firebaseConfig);

// 4. تصدير الأدوات لاستخدامها في صفحات التسجيل ولوحة التحكم
export const auth = getAuth(app);
export const db = getFirestore(app);

// ملاحظة: لم نقم بتصدير Storage لأنك طلبت إرسال الصور للواتساب فقط.
