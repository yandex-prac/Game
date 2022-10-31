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
      res.status(201).send({ message: 'Пользователь успешно создан' })
    )
    .catch(next)
}

const getUserById = (req: Request, res: Response, next: any) => {
  User.findOne({ where: { id: req.params.userId } })
    .then(user => res.status(200).send({ data: user }))
    .catch(next)
}

// export async function updateUserById(id: number, data: IUser) {
//   return User.update(data, { where: { id } })
// }

// export async function deleteUserById(id: number) {
//   return User.destroy({ where: { id } })
// }

// export async function getUserById(id: number) {
//   return User.findOne({ where: { id } })
// }

// export async function getUsersByFirstName(firstName: string) {
//   return User.findAll({ where: { firstName } })
// }

// export function testCRUD() {
//   dbConnect().then(async () => {
//     await createUser('Alex', 'Ivanov')
//     const users = await getUsersByFirstName('Alex')
//     if (!users.length) {
//       throw 'Not found'
//     }
//     const { id } = users[0]
//     await updateUserById(id, { firstName: 'Ivan', lastName: 'Ivanov' })
//     const findedUser = await getUserById(id)
//     console.log('Finded user: ', findedUser)
//   })
// }

export { getUsers, createUser, getUserById }
