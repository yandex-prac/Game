import { Router } from 'express'
import userRouter from './userRouter'
import topicRouter from './topicRouter'

const router: Router = Router()

router.use('/user', userRouter)
router.use('/topic', topicRouter)

export default router
