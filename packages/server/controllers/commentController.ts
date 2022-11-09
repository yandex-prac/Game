import type { Request, Response } from 'express'
import { Comment } from '../db'

const getComments = (_req: Request, res: Response, next: any) => {
  Comment.findAll()
    .then(users => res.status(200).send(users))
    .catch(next)
}

const createComment = (req: Request, res: Response, next: any) => {
  Comment.create({ ...req.body })
    .then(() =>
      res.status(201).send({ message: 'Комментарий успешно отправлен' })
    )
    .catch(next)
}

const getCommentById = (req: Request, res: Response, next: any) => {
  Comment.findOne({ where: { id: req.params.topicId } })
    .then(user => res.status(200).send({ data: user }))
    .catch(next)
}

const updateCommentById = (req: Request, res: Response, next: any) => {
  Comment.update(req.body, { where: { id: req.params.topicId } })
    .then(() => res.status(200).send({ message: 'Комментарий изменён!' }))
    .catch(next)
}

const deleteCommentById = (req: Request, res: Response, next: any) => {
  Comment.destroy({ where: { id: req.params.topicId } })
    .then(() => res.status(200).send({ message: 'Комментарий удален!' }))
    .catch(next)
}

export {
  getComments,
  createComment,
  getCommentById,
  updateCommentById,
  deleteCommentById,
}
