import type { Configuration } from 'webpack'
import path from 'path'
import { cssLoader, fileLoader, tsPresets } from './loaders'

const { DIST_DIR } = process.env

const config: Configuration = {
  target: 'node',
  entry: path.resolve(__dirname, '../../client/src/main.tsx'),
  module: {
    rules: [fileLoader.client, cssLoader.client, tsPresets.client],
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
