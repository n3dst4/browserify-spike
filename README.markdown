# browserify spike

This a playground to test various interactions with browserify, precompiled modules, and source maps.

`project` is a pretend browserified SPA.

`external` is a pretend 3rd-party module which might have been installed from npm. There's a funcky .gitignore setup to allow us to put `external` in the `node_modules` folder and check it into git while leaving everything else to be installed by npm as normal.

## setup

1. Go into the pretend 3rd-party module's folder: `cd node_modules/external`
2. Install its dependencies: `npm install`
3. Build the transpiled version: `npm run prepublish`
4. Go into the project folder: `cd ..`
5. Install the project's dependencies: `npm install`
6. Build the project: `npm run build`
7. Run the HTTP server: `npm start`
8. Open [http://127.0.0.1:8080/](http://127.0.0.1:8080/) in a browser to make sure it worked. You should see a page containing a number (calculated by the pretend 3rd-party module)
9. Open browser developer tools (press F12).
10. Go to the "sources" or "debug" tab.
11. You should be able to see a whole buncha source-mapped files.
12. Specifically, you should be able to see **node_modules/external/src/external.js** in there, alongside other files.

## notes

So browserify doesn't seem to pick up on module sourcemaps unless they are inline? **Solution - generate module source maps inline** Possibly connected to [this browserify bug](https://github.com/substack/node-browserify/issues/772).

Also chrome seems to have an issue with caching sourcemaps sometimes. again, inlining them fixes it. **Solution - generate main source maps inline**

## TODO

Firefox - sources don't show as a tree view
notifier
error handling when watching
browser-sync
