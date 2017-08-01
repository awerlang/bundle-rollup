import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  dest: 'bundle.js',
  useStrict: true,
  format: 'cjs',
  plugins: [
    resolve({ jsnext: true, main: true }),
    commonjs(),
  ]
};
