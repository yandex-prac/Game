import pg from 'pg'
import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { userModel, commentModel, topicModel } from './models'

const sequelizeOptions: SequelizeOptions = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT as unknown as number,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
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
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
