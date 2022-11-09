import { Router } from 'express'
import userRouter from './userRouter'
import topicRouter from './topicRouter'
import commentRouter from './commentRouter'

const router: Router = Router()

router.use('/user', userRouter)
router.use('/comment', commentRouter)
router.use('/topic', topicRouter)

export default router
