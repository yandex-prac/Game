import { IUser } from '../models/User/User'
import { User, dbConnect } from '../db'
import { Request, Response } from 'express'

export async function createUser(firstName: string, lastName: string) {
  return User.create({ firstName, lastName })
}

export async function updateUserById(id: number, data: IUser) {
  return User.update(data, { where: { id } })
}

export async function deleteUserById(id: number) {
  return User.destroy({ where: { id } })
}

export async function getUserById(id: number) {
  return User.findOne({ where: { id } })
}

export async function getUsersByFirstName(firstName: string) {
  return User.findAll({ where: { firstName } })
}

export async function getAllUsers(_req: Request, res: Response) {
  const users = User.findAll()
  res.status(200).send(users)
}

export function testCRUD() {
  dbConnect().then(async () => {
    await createUser('Alex', 'Ivanov')
    const users = await getUsersByFirstName('Alex')
    if (!users.length) {
      throw 'Not found'
    }
    const { id } = users[0]
    await updateUserById(id, { firstName: 'Ivan', lastName: 'Ivanov' })
    const findedUser = await getUserById(id)
    console.log('Finded user: ', findedUser)
  })
}
