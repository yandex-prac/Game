import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

interface ITopic {
  id: number
  title: string
  author: string
  content: string
}

export const topicModel: ModelAttributes<Model, ITopic> = {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  title: {
    type: DataType.STRING,
    allowNull: false,
  },

  author: {
    type: DataType.STRING,
    allowNull: false,
  },

  content: {
    type: DataType.STRING,
    allowNull: false,
  },
}
