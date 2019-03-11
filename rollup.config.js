import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const license = `/*!
 * clock-manager
 * https://github.com/yomotsu/clock-manager
 * (c) 2019 @yomotsu
 * Released under the MIT License.
 */`;

export default {
	input: 'src/clock-manager.ts',
	output: [
		{
			format: 'umd',
			name: 'ClockManager',
			file: pkg.main,
			banner: license,
			indent: '\t',
		},
		{
			format: 'es',
			file: pkg.module,
			banner: license,
			indent: '\t',
		}
	],
	plugins: [
		typescript( { typescript: require( 'typescript' ) } ),
	],
};
