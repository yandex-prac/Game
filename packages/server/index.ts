import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import express from 'express'
import { dbConnect } from './db'
import router from './routes/index'
import compression from 'compression'
import { renderTemplate } from './middlewares'

const app = express()
app.use(cors()).use(compression()).use(router)

const port = Number(process.env.SERVER_PORT) || 3001

// app.get('/', (_, res) => {
//   res.json('👋 Howdy from the server :)')
// })

app.get('/*', renderTemplate)

app.listen(port, () => {
  console.log(` ➜ 🎸 http://localhost:${port}`)
  dbConnect().then(() => console.log('Подключились к БД'))
})
