var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractPlugin = require('extract-text-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var production = process.env.NODE_ENV === 'production';

var plugins = [
  new ExtractPlugin({
    filename: '/styles/app-bundle.css',
    allChunks: false,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'main', // Move dependencies to our main file
    children: true, // Look for common dependencies in all children
    minChunks: 2, // How many times a dependency must come up before being extracted
  }),
];

if (production) {
  plugins = plugins.concat([



    // Set loaders to debug mode via plugin
    // Debug option removed and this plugin is used as an alternative
    new webpack.LoaderOptionsPlugin({
      debug: !production,
    }),

    // Cleanup the builds/ folder before
    // compiling our final assets
    new CleanWebpackPlugin('dist/'),

    // This plugin looks for similar chunks and files
    // and merges them for better caching by the User
    // This should be removed because it was removed in Webpack 2 // new webpack.optimize.DedupePlugin(),

    // This plugin optimizes chunks and modules by
    // how much they are used in your app
    // This can be removed as it is now enabled by default // new webpack.optimize.OccurenceOrderPlugin(),

    // This plugin prevents Webpack from creating chunks
    // that would be too small to be worth loading separately
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 51200, // ~50kb
    }),

    // This plugin minifies all the Javascript code of the final bundle
    // Apparently this hates ES6...
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: true,
    //   compress: {
    //     warnings: false, // Suppress uglification warnings
    //   },
    // }),

    // This plugin serves as a replacement to the default Webpack Uglify JS plugin
    // so that Es6 code can be minimized
    new UglifyJsPlugin(),

    // This plugin defines various variables that we can set to false
    // in product to avoid code related to them from being compiled in our final bundle
    new webpack.DefinePlugin({
      __SERVER__: !production,
      __DEVELOPMENT__: !production,
      __DEVTOOLS: !production,
      'process.env': {
        BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
  ]);
}

module.exports = {
  devtool: production ? false : 'eval',
  entry: './src',
  output: {
    path: __dirname + '/dist',
    filename: production ? '[name].js' : 'styles.js',
    chunkFilename: '[name].js',
    publicPath: '../',
  },
  devServer:{
    hot: true,
  },
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader"
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.js$/,
        loader: 'baggage-loader?[file].scss',
      },
      {
        test: /\.scss$/,
        use: ExtractPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use : [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ]
  }
};
