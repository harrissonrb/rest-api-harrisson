module.exports = {

  client: 'postgresql',
  connection: {
    Host: 'ec2-54-224-124-241.compute-1.amazonaws.com',
    database: 'd44arciics89r9',
    Port: '5432',
    user: 'd44arciics89r9',
    password: 'e2adc6d3b8a7deb66605a115d63d39ebd1f420bd006bc1131e260fad1caaf1c6',
    URI: 'postgres://jdtnzratgdzskw:e2adc6d3b8a7deb66605a115d63d39ebd1f420bd006bc1131e260fad1caaf1c6@ec2-54-224-124-241.compute-1.amazonaws.com:5432/d44arciics89r9',
    HerokuCLI: 'heroku pg:psql postgresql-adjacent-05588 --app rest-api-harrisson'
    
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
