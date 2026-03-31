const cacheName = 'future-set-v1';
// قائمة الملفات التي سيتم تخزينها في هاتف المستخدم ليعمل التطبيق بدون إنترنت
const assets = [
  '/',
  '/index.html',
  '/prof-dashboard.html',
  '/student-dashboard.html',
  '/admin-dashboard.html',
  '/classroom.html',
  '/style.css',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// 1. مرحلة التثبيت: حفظ الملفات في الذاكرة التخزينية (Cache)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// 2. مرحلة التفعيل: تنظيف الذاكرة القديمة إذا قمت بتحديث الكود
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== cacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// 3. مرحلة جلب البيانات: جلب الملفات من الذاكرة إذا كان الإنترنت مقطوعاً
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      return cacheRes || fetch(e.request);
    })
  );
});
