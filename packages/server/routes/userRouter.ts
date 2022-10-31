import { Router } from 'express'
import {
  getUsers,
  createUser,
  getUserById,
} from '../controllers/userController'

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.post('/', createUser)
userRouter.get('/:userId', getUserById)

export default userRouter
