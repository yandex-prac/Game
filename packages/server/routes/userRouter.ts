import { Router } from 'express'
import {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers'

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.post('/', createUser)
userRouter.get('/:userId', getUserById)
userRouter.put('/:userId', updateUserById)
userRouter.delete('/:userId', deleteUserById)

export default userRouter
