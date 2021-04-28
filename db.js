const Sequelize = require('sequelize')

const DB_HOST = '127.0.0.1'
const DB_DATABASE = 'fendou'
const DB_USERNAME = 'root'
const DB_PASSWORD = '123456'
const DB_PORT = 33061

/**get enviroment from docker-compose */
console.log('process.env.BUILD_ENV', process.env.BUILD_ENV)
console.log('process.env.DB_HOST', process.env.DB_HOST)
const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  port: DB_PORT,
  host: 'db',
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
