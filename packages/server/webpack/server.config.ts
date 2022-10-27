import type { Configuration } from 'webpack'
import path from 'path'
import { cssLoader, fileLoader, tsPresets } from './loaders'

const { DIST_DIR } = process.env

//const DIST_DIR = path.join(__dirname, '../dist')

const config: Configuration = {
  target: 'node',
  entry: path.resolve(__dirname, '../index.tsx'),
  module: {
    rules: [fileLoader.server, cssLoader.server, tsPresets.server],
  },
  output: {
    filename: 'index.js',
    path: DIST_DIR,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../../client/src'),
    },
  },
}

export default config
