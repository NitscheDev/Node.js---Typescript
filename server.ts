import express from 'express'
import cors from 'cors'
import emoji from 'node-emoji'
import { config } from 'dotenv'
import mainRouter from './routes/main.router'

//dotenv
config()
//init express app
const app = express()
//Middlewere
app.use(express.json())
app.use(cors())

//routes
app.use('/', mainRouter)

//start server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    if (process.env.NODE_ENV === 'development') {
        console.log(`${emoji.get('zap')} Server alive at http://localhost:${PORT}`)
    }
})