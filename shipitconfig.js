module.exports = {
  projectName: '{THEME-NAME}',
  repo: '{REPO}',
  staging: {
    servers: 'tagnetdev@70.32.76.228',
    deployTo: '/var/www/vhosts/alaradevelopment.com/{STAGING-NAME}.alaradevelopment.com'
  },
  production: {
    servers: '{PRODUCTION-USER}@70.32.76.228',
    deployTo: '/var/www/vhosts/{DOMAIN-NAME}'
  }
};
