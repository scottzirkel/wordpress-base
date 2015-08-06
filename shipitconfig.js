module.exports = {
  projectName: 'projectName',
  repo: 'git@github.com:scottzirkel/wordpress-base.git',
  staging: {
    servers: 'stagingUser@server',
    deployTo: 'stagingPath'
  },
  production: {
    servers: 'productionUser@server',
    deployTo: 'productionPath'
  }
};
