import type { Request, Response } from 'express'
import { Topic } from '../db'

const getTopics = (_req: Request, res: Response, next: any) => {
  Topic.findAll()
    .then(users => res.status(200).send(users))
    .catch(next)
}

const createTopic = (req: Request, res: Response, next: any) => {
  Topic.create({ ...req.body })
    .then(() => res.status(201).send({ message: 'Чат успешно создан!' }))
    .catch(next)
}

const getTopicById = (req: Request, res: Response, next: any) => {
  Topic.findOne({ where: { id: req.params.topicId } })
    .then(user => res.status(200).send({ data: user }))
    .catch(next)
}

const updateTopicById = (req: Request, res: Response, next: any) => {
  Topic.update(req.body, { where: { id: req.params.topicId } })
    .then(() => res.status(200).send({ message: 'Чат изменен!' }))
    .catch(next)
}

const deletTopicById = (req: Request, res: Response, next: any) => {
  Topic.destroy({ where: { id: req.params.topicId } })
    .then(() => res.status(200).send({ message: 'Чат удален!' }))
    .catch(next)
}

export { getTopics, createTopic, getTopicById, updateTopicById, deletTopicById }
