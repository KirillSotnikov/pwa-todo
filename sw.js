
const staticCacheName ='static-cache-v0'
const dynamicCacheName = 'dynamic-cache-v0'

const staticAssets = [
  './',
  './index.html',
  './256.png',
  './512.png',
  './dist/build.js',
  './dist/build.js.map'
]

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(staticAssets)
  // console.log('Service worker has been instaled');
})

self.addEventListener('activate', async event => {
  const cacheKeys = await caches.keys()
  const checkKeys = cacheKeys.map(async key => {
    if (staticCacheName !== key) {
      await caches.delete(key)
    }
  })
  await Promise.all(checkKeys)
  // console.log('Service worker has been activated');
})


self.addEventListener('fetch', event => {
  // console.log(`Trying to fetch ${event.request.url}`);
  event.respondWith(checkCache(event.request))
})


async function checkCache(req) {
  const cachedResponse = await caches.match(req)
  return cachedResponse || checkOnline(req)
}


async function checkOnline (req) {
  const cache = await caches.open(dynamicCacheName)
  try {
    const res = await fetch(req)
    await cache.put(req, res.clone())
    return res
  } catch (err) {
    return await cache.match(req)
  }
}
