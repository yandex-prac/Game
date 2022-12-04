import { Router } from 'express'

import { getComments, createComment } from '../controllers'

const commentRouter = Router()

commentRouter.post('/all', getComments)
commentRouter.post('/', createComment)
export default commentRouter
