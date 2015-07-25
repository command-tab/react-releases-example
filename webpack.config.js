'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js']
  },
  entry: [
    //'webpack-dev-server/client?http://127.0.0.1:8080',
    //'webpack/hot/only-dev-server',
    path.join(__dirname, 'app', 'client.js')
  ],
  output: {
    path: path.join(__dirname, 'app', 'build'),
    filename: 'client.min.js',
    publicPath: '/build/'
  },
  plugins: [
    // Use the ProvidePlugin to inject implicit globals like jQuery
    // http://stackoverflow.com/a/28989476/41728
    // Note: If supported by all the used scripts, the jQuery and $
    // expose-loader calls in the 'loaders' section below can be omitted,
    // since the ProvidePlugin should replace instances of jQuery references
    // with require('jquery') calls instead, provided those references are
    // in scripts also handled by webpack.
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    }),
    
    // http://gaearon.github.io/react-hot-loader/getstarted/
    /*new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),*/
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    })/*,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })*/
  ],
  module: {
    loaders: [{
      // Disable AMD for jQuery, forcing CommonJS to be used
      // http://stackoverflow.com/a/28989476/41728
      test: /jquery\.js$/,
      loader: 'imports?define=>false'
    }, {
      // Parse LESS file content, pass it to the webpack CSS loader, then to the webpack style loader
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader',
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/
    }, {
      // Pass CSS file content to the webpack CSS loader, then to the webpack style loader
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/
    }, {
      // Enable react-hot and Babel parsing for JS files
      // https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
      test: /\.js?$/,
      loaders: [/*'react-hot',*/ 'babel-loader?stage=0'],
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/
    }, {
      // Expose window.React for the Chrome React Developer Tools using expose-loader
      // https://github.com/webpack/expose-loader
      // http://fb.me/react-devtools
      test: require.resolve('react'),
      loader: 'expose?React'
    }, {
      // Expose window.Marty for the Chrome Marty Developer Tools using expose-loader
      // https://github.com/webpack/expose-loader
      // http://martyjs.org/devtools/
      test: require.resolve('marty'),
      loader: 'expose?Marty'
    }, {
      // Expose window.$ as jQuery using expose-loader
      // https://github.com/webpack/expose-loader
      // http://stackoverflow.com/a/29083197/41728
      test: require.resolve('jquery'),
      loader: 'expose?$'
    }, {
      // Expose window.jQuery as jQuery using expose-loader
      // https://github.com/webpack/expose-loader
      // http://stackoverflow.com/a/29083197/41728
      test: require.resolve('jquery'),
      loader: 'expose?jQuery'
    }]
  }
};
