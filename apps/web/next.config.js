require('dotenv-mono').load({
  cwd: '../../configs',
});

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com', 'media.discordapp.net'],
  },
};
