import type { Request, Response } from 'express'
import { Comment } from '../db'

const getComments = (req: Request, res: Response, next: any) => {
  console.log(req.body)
  Comment.findAll({
    where: {
      topicid: req.body.id,
    },
  })
    .then(comments => res.status(200).send(comments))
    .catch(next)
}
const createComment = (req: Request, res: Response, next: any) => {
  console.log({ ...req.body })
  Comment.create({ ...req.body })
    .then(() => res.status(201).send({ message: 'Коммент успешно создан!' }))
    .catch(next)
}

export { getComments, createComment }
