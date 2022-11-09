import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
import { dbConnect } from './db'
import routes from './routes'
import { errorHandler } from './middlewares'

dotenv.config()

const port = Number(process.env.SERVER_PORT) || 3001

const app = express()

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(cors())
  .use(routes)
  .use(errorHandler)

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  dbConnect().then(() => console.log('Подключились к БД'))
})
