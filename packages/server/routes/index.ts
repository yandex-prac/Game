import { Router } from 'express'
import userRouter from './userRouter'
// import topicRouter from './topicRouter'
// import commentRouter from './commentRouter'

const router: Router = Router()

router.use('/user', userRouter)
// router.use(`${API_URL}/topic`, topicRouter)
// router.use(`${API_URL}/comment`, commentRouter)

export default router
