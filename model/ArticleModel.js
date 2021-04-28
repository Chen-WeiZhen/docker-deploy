const DataTypes = require('sequelize')
const sequelize = require('../db')

const Article = sequelize.define(
  'article',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    author: { type: DataTypes.STRING, allowNull: false, field: 'author' },
    content: { type: DataTypes.STRING, allowNull: true, field: 'content' },
  },
  {
    freezeTableName: false,
  }
)

Article.sync({
  force: false,
})
module.exports = Article