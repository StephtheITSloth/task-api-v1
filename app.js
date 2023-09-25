const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-handler')

//import routers
const taskRouters = require('./routes/tasks')

app.use(express.static('./public/'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())


//routes
app.use('/api/v1/tasks', taskRouters)
app.use(notFound)
app.use(errorHandler)

const start = async () => {
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {console.log(`listening on port: ${PORT}...`)})
    } catch (error) {
        console.log(error)
    }
}

start()
