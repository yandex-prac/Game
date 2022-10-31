import { Router } from 'express'
import {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
} from '../controllers/userController'

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.post('/', createUser)
userRouter.get('/:userId', getUserById)
userRouter.put('/:userId', updateUserById)

export default userRouter
