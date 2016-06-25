module.exports = {
  module: {
    loaders: [
      {
        test: /\.gscss$/,
        loaders: [
          'style?sourceMap',
          'css?sourceMap',
          'resolve-url',
          'sass?sourceMap',
          'sass-resources',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]',
          'resolve-url',
          'sass?sourceMap',
          'sass-resources',
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
  sassResources: [
    './stories/sass/vars.scss',
  ],
};
