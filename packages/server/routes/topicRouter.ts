import { Router } from 'express'
import {
  getTopics,
  createTopic,
  getTopicById,
  updateTopicById,
  deletTopicById,
} from '../controllers'

const topicRouter = Router()

topicRouter.get('/', getTopics)
topicRouter.post('/', createTopic)
topicRouter.get('/:topicId', getTopicById)
topicRouter.put('/:topicId', updateTopicById)
topicRouter.delete('/:topicId', deletTopicById)

export default topicRouter
