const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

module.exports = {
  plugins: [
    new GuessPlugin({
      // Alternatively you can provide a Google Analytics View ID
      GA: '240925687',
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    })
  ]
};