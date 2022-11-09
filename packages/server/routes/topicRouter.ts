import { Router } from 'express'
import {
  getTopics,
  createTopic,
  getTopicById,
  updateTopicById,
  deletTopicById,
} from '../controllers'

const userRouter = Router()

userRouter.get('/', getTopics)
userRouter.post('/', createTopic)
userRouter.get('/:topicId', getTopicById)
userRouter.put('/:topicId', updateTopicById)
userRouter.delete('/:topicId', deletTopicById)

export default userRouter
