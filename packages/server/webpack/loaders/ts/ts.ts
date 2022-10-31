export default {
  client: {
    test: /\.(ts|tsx)$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      },
    },
  },
  server: {
    test: /\.(ts|tsx)$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/env',
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      },
    },
  },
}
