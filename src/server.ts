import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import bp from 'body-parser'
import router from './routes/main.routes'
dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Server is Running 🌍'
  })
})
app.use('/api', router)
// start express server
app.listen(PORT, () => {
  console.log(`Server is starting on port:${PORT}`)
})

export default app
