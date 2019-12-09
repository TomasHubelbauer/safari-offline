# Safari Offline

[Safari Offline](https://tomashubelbauer.github.io/safari-offline)

This is a demo implementation of a fully offline web application supported by
iOS Safari. It uses service workers to cache and serve resources when offline.

I am also attempting to demonstrate the use of service workers for background
processing (service workers can run for some time even if the web application
tab is not open and with `sync` they may even be able to wake up here and there,
depending on what the device allows) and notifications.

Another thing I am trying to do here is to find a way to make a backup of the
app state (saved in local storage) so if anything goes wrong, one can go back to
a recent backup. Generating backup files is an experiment right now, I want to
enable saving them to the Files app which only sees to offer saving PDFs and
SVGs to it from a quick test I did so far. Both are okay options as I could
encode the application state in a PDF or an SVG file in a way that is invisible
when the file is previewed but restorable when it's loaded back for import.
I would ideally like to use a ZIP or a custom extension though so that I could
limit the extensions supported in the import flow file `input` tag.

## To-Do

### Try to use the `sync` API to have the service worker run continuously

In the background or to have it wake up regularly

### Try to demonstrate the use of the iOS Safari proprietary notifications

http://samuli.hakoniemi.net/how-to-implement-safari-push-notifications-on-your-website/

### Finalize the export experiments to find a format which offers being saved to the Files app

### Try to get the generated file to download in Safari

Using the techniques here https://github.com/eligrey/FileSaver.js/blob/master/src/FileSaver.js

Now with iOS 13, `download` should also work.
