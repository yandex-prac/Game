import { loader as miniCssExtractLoader } from 'mini-css-extract-plugin'

export default {
  client: {
    test: /\.s[ac]ss$/i,
    use: [miniCssExtractLoader, 'style-loader', 'css-loader', 'sass-loader'],
  },
  server: {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
}
