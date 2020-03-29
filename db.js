const Sequelize = require('sequelize')
// const postgres = new Sequelize('fullstack', 'postgres', 'kuchbhi1', {
//   host: 'localhost',
//   dialect: 'postgres',

// });

const postgres = new Sequelize('postgres://sphxudxn:WQOLc1Baz_GjvSSnJzCt4uf-sKuL33Sq@john.db.elephantsql.com:5432/sphxudxn')

try {
  postgres.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
postgres.sync()
module.exports = postgres