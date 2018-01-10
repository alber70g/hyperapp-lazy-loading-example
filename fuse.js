const { FuseBox, WebIndexPlugin, QuantumPlugin } = require('fuse-box');

const fuse = FuseBox.init({
	homeDir: 'src',
	target: 'browser@es6',
	output: 'dist/$name.js',
	plugins: [
		WebIndexPlugin(),
		true &&
			QuantumPlugin({
				ensureES5: false,
				treeshake: true,
				uglify: false
			})
	]
	// tsConfig: './tsconfig.json'
});

fuse.dev(); // launch http server

fuse.bundle('app').instructions(' > index.tsx').hmr().watch();

fuse.run();
