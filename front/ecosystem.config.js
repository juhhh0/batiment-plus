module.exports = {
  apps: [
    {
      name: 'front-batimentplus',
      script: 'npm',
      args: 'start',
      cwd: '/batiplus/front',
      watch: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
