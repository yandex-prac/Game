import type { Configuration } from 'webpack'
import path from 'path'
import { cssLoader, fileLoader, tsPresets } from './loaders'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'

const { DIST_DIR } = process.env

const config: Configuration = {
  target: 'node',
  entry: path.resolve(__dirname, '../index.ts'),
  externals: ['pg'],
  module: {
    rules: [fileLoader.server, cssLoader.server, tsPresets.server],
  },
  output: {
    filename: 'index.js',
    path: DIST_DIR,
    libraryTarget: 'commonjs',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../../client/src'),
    },
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
}

export default config
