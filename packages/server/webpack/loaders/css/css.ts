export default {
  client: [
    {
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
  server: {
    test: /\.s[ac]ss$/i,
    use: ['null-loader'],
  },
}
