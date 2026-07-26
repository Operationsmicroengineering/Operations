// Service Worker بسيط جدًا — غرضه الوحيد إنه يخلي المتصفح يقدر "يثبّت" الموقع كأبليكيشن.
// مفيهوش أي Caching، يعني الموقع هيفضل دايمًا بيسحب أحدث بيانات زي ما هو بالظبط، بنفس السرعة.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', () => {
  // مفيش تدخل خالص — كل طلب بيعدي عادي للسيرفر زي ما هو
});
