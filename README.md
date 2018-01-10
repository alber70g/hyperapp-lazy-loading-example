Hyperapp with Lazy Loaded Views
===============================

This is a sample project on how to do lazy loading in Hyperapp with the new dynamic imports.

Techniques used

- [Hyperapp](https://github.com/hyperapp/hyperapp)
- [Dynamic imports](https://github.com/tc39/proposal-dynamic-import)
- [FuseBox](https://fuse-box.org/page/dynamic-import) to provide for dynamic imports
- [Typescript](https://www.typescriptlang.org/docs/home.html)

Getting started
---------------

- Clone this project
- Install dependencies (`$ npm install`)
- Start the project

```bash
npm start # this launches `node fuse dist`
```

Be aware that because it builds the dist once, it'll not rebuild the dist files.
So **restart the build and refres the browser otherwise it won't show you the new version**.
This is because a development build wouldn't separate the dynamically imported (`import()`) resources.

Launch with live-reload
-----------------------

Default `npm start` will launch the non-live-reload version. This is how you start the development version:

```bash
node fuse
```

