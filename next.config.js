// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const isProd = process.env.node_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
});
