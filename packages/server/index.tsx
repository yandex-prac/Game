import dotenv from 'dotenv'
import cors from 'cors'
import { renderToString } from 'react-dom/server'
dotenv.config()
import React from 'react'
import { App } from 'client/src/components/business/App'

import express from 'express'

const app = express()
app.use(cors())
const port = Number(process.env.SERVER_PORT) || 3001

app.get('/', (_, res) => {
  // res.json('👋 Howdy from the server :)')
  res.send(renderToString(<App />))
})

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
})
