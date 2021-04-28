const Sequelize = require('sequelize')

const DB_HOST = '127.0.0.1'
const DB_DATABASE = 'fendou'
const DB_USERNAME = 'root'
const DB_PASSWORD = '123456'
const DB_PORT = 33061
console.log('process.env.BUILD_ENV', process.env.BUILD_ENV)

console.log('process.env.DB_HOST', process.env.DB_HOST)
console.log(typeof process.env.DB_HOST)
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

//对连接进行测试，查看控制台
sequelize
  .authenticate()
  .then(() => {
    console.log('******Connection has been established successfully.********')
    // process.exit() //结束进程
  })
  .catch((err) => {
    console.error(
      '***************Unable to connect to the database:***********',
      err
    )
  })

module.exports = sequelize
