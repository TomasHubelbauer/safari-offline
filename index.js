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

  // Note that this also enables notifications shown from the service worker
  if (Notification.permission === 'default') {
    await Notification.requestPermission();
  }

  navigator.serviceWorker.addEventListener('message', event => {
    //new Notification(evvent.data);
  });

  const exportSolButton = document.getElementById('exportSolButton');
  exportSolButton.addEventListener('click', () => {
    const downloadA = document.createElement('a');
    downloadA.download = 'safari-offline.sol';
    downloadA.href = 'data:application/octet-stream,TEST%20EXPORT';
    downloadA.click();
  });

  const exportTxtButton = document.getElementById('exportTxtButton');
  exportTxtButton.addEventListener('click', () => {
    const downloadA = document.createElement('a');
    downloadA.download = 'safari-offline.txt';
    downloadA.href = 'data:text/plain,TEST%20EXPORT';
    downloadA.textContent = 'Export';
    // Note that for Firefox (and possibly Safari, let's see), the anchor needs to be in the DOM for `click` to work
    document.body.append(downloadA);
    downloadA.click();
  });
});
