import pg from 'pg'
import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { userModel, commentModel, topicModel } from './models'
import { testCRUD } from './controllers/userController'

const sequelizeOptions: SequelizeOptions = {
  host: process.env.POSTGRES_HOST || 'localhost',
  port: (process.env.POSTGRES_PORT as unknown as number) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'test',
  dialect: 'postgres',
  dialectModule: pg,
}

export const sequelize = new Sequelize(sequelizeOptions)

export const User = sequelize.define('user', userModel, {})
export const Comment = sequelize.define('comment', commentModel, {})
export const Topic = sequelize.define('topic', topicModel, {})

export async function dbConnect() {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

testCRUD()
