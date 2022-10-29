import { DataType, Model } from 'sequelize-typescript'
import { ModelAttributes } from 'sequelize/types'

interface IComment {
  id: number
  author: string
  content: string
}

export const commentModel: ModelAttributes<Model, IComment> = {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
