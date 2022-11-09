import { Router } from 'express'
import {
  getComments,
  createComment,
  getCommentById,
  updateCommentById,
  deleteCommentById,
} from '../controllers'

const commentRouter = Router()

commentRouter.get('/', getComments)
commentRouter.post('/', createComment)
commentRouter.get('/:commentId', getCommentById)
commentRouter.put('/:commentId', updateCommentById)
commentRouter.delete('/:commentId', deleteCommentById)

export default commentRouter
