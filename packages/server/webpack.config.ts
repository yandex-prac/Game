import type { Configuration } from 'webpack';
import path from 'path';

const DIST_DIR = path.join(__dirname, 'dist');

const config: Configuration = {
  target: 'node',
  entry: './index.tsx',
  module: {
    rules: [
  //     {
  //       test: /\.(html)$/,
  //       use: 'null-loader',
  //     },
  //     {
  //       test: /\.(png|jpe?g|gif|mp3|svg|webp|ico)$/i,
  //       type: 'asset',
  //     },
  //     {
  //       test: /\.(woff2?|eot|ttf|otf)$/i,
  //       type: 'asset/resource',
  //     },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader', options: { presets: ['@babel/env','@babel/preset-react'] }, },
      },
  //     {
  //       test: /\.(s[ac]|c)ss$/i,
  //       use: 'null-loader',
  //     },
    ],
  },
  output: {
    filename: 'index.js',
    path: DIST_DIR,
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    // plugins: [
    //   new ConfigPaths.TsconfigPathsPlugin({
    //     configFile: './tsconfig.json',
    //   }),
    // ],
  },
};

export default config;
