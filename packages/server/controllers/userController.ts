import type { Request, Response } from 'express'
import { User } from '../db'

const getUsers = (_req: Request, res: Response, next: any) => {
  User.findAll()
    .then(users => res.status(200).send(users))
    .catch(next)
}

const createUser = (req: Request, res: Response, next: any) => {
  User.create({ ...req.body })
    .then(() =>
      res.status(201).send({ message: 'Пользователь успешно создан!' })
    )
    .catch(next)
}

const getUserById = (req: Request, res: Response, next: any) => {
  User.findOne({ where: { id: req.params.userId } })
    .then(user => res.status(200).send({ data: user }))
    .catch(next)
}

const updateUserById = (req: Request, res: Response, next: any) => {
  User.update(req.body, { where: { id: req.params.userId } })
    .then(() => res.status(200).send({ message: 'Данные профиля изменены!' }))
    .catch(next)
}

const deleteUserById = (req: Request, res: Response, next: any) => {
  User.destroy({ where: { id: req.params.userId } })
    .then(() => res.status(200).send({ message: 'Пользователь удален!' }))
    .catch(next)
}

export { getUsers, createUser, getUserById, updateUserById, deleteUserById }
