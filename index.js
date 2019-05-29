window.addEventListener('load', async () => {
  await navigator.serviceWorker.register('worker.js');

  const registrationInput = document.getElementById('registrationInput');
  registrationInput.checked = true;

  const bustButton = document.getElementById('bustButton');
  bustButton.addEventListener('click', async () => {
    const cache = await caches.open('safari-offline');
    for (const request of await cache.keys()) {
      await cache.delete(request);
    }

    alert('The cache has been cleared and the page will now refresh.');
    location.reload();
  });

  const storageTextArea = document.getElementById('storageTextArea');
  storageTextArea.addEventListener('input', event => {
    localStorage.setItem('safari-offline', event.currentTarget.value);
  });

  storageTextArea.value = localStorage.getItem('safari-offline');

  const networkP = document.getElementById('networkP');
  networkP.textContent = navigator.onLine ? 'You are online' : 'You are offline';

  window.addEventListener('online', () => {
    networkP.textContent = 'You are online as of ' + new Date().toLocaleTimeString();
  });

  window.addEventListener('offline', () => {
    networkP.textContent = 'You are online as of ' + new Date().toLocaleTimeString();
  });
});
