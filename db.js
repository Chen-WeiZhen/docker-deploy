const Sequelize = require('sequelize')

const DB_HOST = '127.0.0.1'
const DB_DATABASE = 'fendou'
const DB_USERNAME = 'root'
const DB_PASSWORD = '123456'
const DB_PORT = 33061
/**get enviroment from docker-compose 
 * process.env.DB_HOST
 * if run in docker DB_HOST=db the same with docker container from docker-compose.yml
*/
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: process.env.DB_HOST || DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log('******Connection has been established successfully.********')
    // process.exit()
  })
  .catch((err) => {
    console.error(
      '***************Unable to connect to the database:***********',
      err
    )
  })

module.exports = sequelize
