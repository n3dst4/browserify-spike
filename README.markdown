# browserify spike

This a playground to test various interactions with browserify, precompiled modules, and source maps.

`project` is a pretend browserified SPA.

`external` is a pretend 3rd-party module which might have been installed from npm.

## setup

1. Go into the pretend 3rd-party module's folder: `cd external`
2. Install its dependencies: `npm install`
3. Build the transpiled version: `npm run prepublish`
4. Go into the project folder: `cd ../project`
5. Install the project's dependencies: `npm install`
6. Copy the pretend 3rd-party module into the project (this simulates having installed it from npm): `cp -a ../external ./node_modules`
7. Build the project: `npm run build`
8. Run the HTTP server: `npm start`
9. Open [http://127.0.0.1:8080/](http://127.0.0.1:8080/) in a browser to make sure it worked. You should see a page containing a number (calculated by the pretend 3rd-party module)
10. Open browser developer tools (press F12).
11. Go to the "sources" or "debug" tab.
12. You should be able to see a whole buncha source-mapped files.
13. Specifically, you should be able to see **node_modules/external/src/external.js** in there, alongside other files.


## notes

so browserify doesn't seem to pick up on module sourcemaps unless they are inline?

also chrome seems to have an issue with caching sourcemaps sometimes. again, inlining them fixes it.

## TODO

Firefox - sources don't show as a tree view
watchify
uglify
