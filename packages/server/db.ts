import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { userModel, commentModel, topicModel } from './models'
import dotenv from 'dotenv'

dotenv.config()

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env

const sequelizeOptions: SequelizeOptions = {
  host: POSTGRES_HOST,
  port: POSTGRES_PORT as unknown as number,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
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
