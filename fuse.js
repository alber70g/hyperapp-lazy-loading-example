const { FuseBox, WebIndexPlugin, QuantumPlugin } = require('fuse-box')

const dist = process.argv[process.argv.length - 1] === 'dist'
if (dist) {
  console.log(
    'Running with dist mode on: QuantumPlugin enabled, no live-reload\n'
  )
}

const fuse = FuseBox.init({
  homeDir: 'src',
  target: 'browser@es6',
  output: 'dist/$name.js',
  sourceMaps: true,
  plugins: [
    WebIndexPlugin(),

    dist &&
      QuantumPlugin({
        ensureES5: false,
        treeshake: true,
        uglify: false,
      }),
  ],
  // tsConfig: './tsconfig.json'
})

fuse.dev() // launch http server

fuse.bundle('app').instructions(' > index.tsx').hmr({ reload: true }).watch()

fuse.run()
