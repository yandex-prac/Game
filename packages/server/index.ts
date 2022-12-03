import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
import express from 'express'
import { dbConnect } from './db'
import router from './routes/index'
import compression from 'compression'
import { checkAuth } from './middlewares/checkAuth'
import { checkCsp } from './middlewares/checkCsp'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
// import { renderTemplate } from 'middlewares'

const app = express()
app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(cors())
  .use(checkCsp())
  .use(compression())
  .use(router)
  .use(cookieParser())
  .use(checkAuth)

const port = Number(process.env.SERVER_PORT) || 3001

app.get('/', (_, res) => {
  res.json('👋 Howdy from the server :)')
})

// app.get('/*', renderTemplate)

app.listen(port, () => {
  console.log(` ➜ 🎸 http://localhost:${port}`)
  dbConnect().then(() => console.log('Подключились к БД'))
})
