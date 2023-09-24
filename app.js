const express = require('express')
const app = express()
const PORT = 3000
const connectDB = require('./db/connect')
require('dotenv').config()

//import routers
const taskRouters = require('./routes/tasks')

app.use(express.static('./public/'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1/tasks', taskRouters)

const start = async () => {
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {console.log(`listening on port: ${PORT}...`)})
    } catch (error) {
        console.log(error)
    }
}

start()
