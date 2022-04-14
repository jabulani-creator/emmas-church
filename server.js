import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()

import 'express-async-errors' 
import morgan from 'morgan'
//db and authenticateUser
import connectDB from './db/connect.js'

//router
import authRouter from './routes/AuthRoutes.js'
import postsRouter from './routes/postRoute.js'
import eventsRouter from './routes/eventsRoute.js'
import healthRouter from './routes/healthRoute.js'

//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/posts', postsRouter)
app.use('/api/v1/events', eventsRouter)
app.use('/api/v1/health', healthRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => console.log(`Server is listening on port ${port}....`))
    } catch (error) {
        console.log(error)
    }
}

start()