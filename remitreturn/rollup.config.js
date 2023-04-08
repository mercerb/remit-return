import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
// import "json" plugin
import json from '@rollup/plugin-json';

export default {
    // other config options
  
    plugins: [
      // add "json" plugin
      json(),
  
      // other rollup plugins
    ]
  }