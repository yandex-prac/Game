import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import { renderTemplate } from './middlewares'

dotenv.config()

const app = express()
app.use(cors())
const port = Number(process.env.SERVER_PORT) || 3001

app.get('/*', renderTemplate)

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
})
