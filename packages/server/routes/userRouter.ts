import { Router } from 'express'
import { getUsers, createUser } from '../controllers/userController'

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.post('/', createUser)

export default userRouter
