import minify from '../../../dist/rollup-plugin-babel-minify.es2015.js';

export default {
	input: 'index.js',
	plugins: [
		minify()
	],
	output: {
		sourcemap: true,
		file: 'bundle.js',
		format: 'es'
	}
};
