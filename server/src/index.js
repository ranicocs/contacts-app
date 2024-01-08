import express, { json } from 'express'
import { router } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

export const app = express()
app.use(json())
app.disable('x-powered-by')

app.use('/api/v1/', contactsRouter)

const PORT = process.env.PORT ?? 3000

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})