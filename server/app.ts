import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import indexRouter from './api/v1/routes/index'
import chatRouter from './api/v1/routes/cahtgpt.routes'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use(cors())

app.use(indexRouter)
app.use(chatRouter)

export default app
