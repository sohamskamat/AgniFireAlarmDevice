module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = '/AgniFireAlarmDevice/';
      return webpackConfig;
    },
  },
}; 