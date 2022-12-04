// import { Router } from 'express'
// import userRouter from './userRouter'
// // import topicRouter from './topicRouter'
// // import commentRouter from './commentRouter'

// const router: Router = Router()
// const API_URL = '/api/v1'

// router.use(`${API_URL}/user`, userRouter)
// // router.use(`${API_URL}/topic`, topicRouter)
// // router.use(`${API_URL}/comment`, commentRouter)

// export default router

import { Router } from 'express'
import userRouter from './userRouter'
import topicRouter from './topicRouter'
import commentRouter from './commentRouter'

const router: Router = Router()

router.use('/user', userRouter)
router.use('/topic', topicRouter)
router.use('/comment', commentRouter)

export default router
