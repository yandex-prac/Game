import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { userModel } from './models/User/User'
import { startApp } from './models/User/index'

const sequelizeOptions: SequelizeOptions = {
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dialect: 'postgres',
}

export const sequelize = new Sequelize(sequelizeOptions)

export const User = sequelize.define('Userss', userModel, {})

export async function dbConnect() {
  try {
    await sequelize.authenticate()
    await sequelize.sync()

    console.log('Соединение успешно настроено')
  } catch (error) {
    console.error('Ошибка подключения к БД', error)
  }
}

startApp()
