const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?sourceMap',
          'sass?sourceMap',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, '../node_modules')],
  },
};
