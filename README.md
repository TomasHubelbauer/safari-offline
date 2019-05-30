# Safari Offline

[Safari Offline](https://tomashubelbauer.github.io/safari-offline)

This is a demo implementation of a fully offline web application supported by
iOS Safari. It uses service workers to cache and serve resources when offline.

I am also attempting to demonstrate the use of service workers for background
processing (service workers can run for some time even if the web application
tab is not open and with `sync` they may even be able to wake up here and there,
depending on what the device allows) and notifications.

- [ ] Try to use the `sync` API to have the service worker run continuously in
  the background or to have it wake up regularly
- [ ] Try to demonstrate the use of the iOS Safari proprietary notifications
  http://samuli.hakoniemi.net/how-to-implement-safari-push-notifications-on-your-website/
