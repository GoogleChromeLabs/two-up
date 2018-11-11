import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";

const esm = {
  plugins: [
    typescript({ useTsconfigDeclarationDir: false }),
    postcss({
      modules: { camelCase: true },
      namedExports: true,
      minimize: true,
    })
  ],
  external: ['pointer-tracker'],
  input: 'lib/index.ts',
  output: {
    file: 'dist/two-up.mjs',
    format: 'esm'
  },
};

const iffe = {
  plugins: [
    resolve()
  ],
  input: 'dist/two-up.mjs',
  output: {
    file: 'dist/two-up.js',
    format: 'iife',
    name: 'TwoUp'
  },
};

const iffeMin = {
  input: 'dist/two-up.js',
  plugins: [
    terser({
      compress: { ecma: 6 },
    })
  ],
  output: {
    file: 'dist/two-up-min.js',
    format: 'iife'
  },
};

export default [esm, iffe, iffeMin];
