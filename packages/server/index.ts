import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import express from 'express'
import { dbConnect } from './db'
import router from './routes/index'

const app = express()
app.use(cors()).use(router)

const port = Number(process.env.SERVER_PORT) || 3001

app.get('/', (_, res) => {
  res.json('👋 Howdy from the server :)')
})

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  dbConnect().then(() => console.log('Подключились к БД'))
})
