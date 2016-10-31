var webpack = require('webpack'),
    path = require('path');
 
module.exports = {
    debug: true,
    entry: {
        main: './index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    url: {
      dataUrlLimit: 512

    },
    module: {
      loaders: [
        { test: /\.js$/,
          loader: "babel-loader",
        },
        {test: /\.svg/, loader: 'svg-url-loader'}
      ]
    }
};
