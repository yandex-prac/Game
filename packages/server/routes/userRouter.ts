import { Router } from 'express'
import { getAllUsers } from '../controllers/userController'

const userRouter = Router()

userRouter.get('/', getAllUsers)

export default userRouter
