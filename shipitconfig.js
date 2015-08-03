module.exports = {
  projectName: 'TEST',
  repo: 'git@github.com:scottzirkel/wordpress-base.git',
  staging: {
    servers: 'tagnetdev@70.32.76.228',
    deployTo: '/var/www/vhosts/alaradevelopment.com/TEST.alaradevelopment.com'
  },
  production: {
    servers: '{PRODUCTION-USER}@70.32.76.228',
    deployTo: '/var/www/vhosts/{DOMAIN-NAME}'
  }
};
