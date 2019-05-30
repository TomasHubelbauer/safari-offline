self.addEventListener('install', event => {
  //console.log('installed', event);
})

self.addEventListener('activate', event => {
  //console.log('activated', event);
});

// Note that this cannot itself use async-await because respondWith need to be done synchronously
self.addEventListener('fetch', event => event.respondWith(intercept(event.request)));

async function intercept(request) {
  const cache = await caches.open('safari-offline');
  let response = await cache.match(request);
  if (!response) {
    response = await fetch(request);
    await cache.put(request, response.clone());
  }

  return response;
}

void async function communitate() {
  //self.registration.showNotification(new Date().toLocaleString() + ' ' + (await clients.matchAll()).length);
  for (const client of await clients.matchAll()) {
    client.postMessage('safari-offline');
  }

  self.setTimeout(communitate, 5000);
}()
