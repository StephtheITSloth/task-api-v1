const express = require('express')
const app = express()
const PORT = 3000

//import routers
const taskRouters = require('./routes/tasks')

app.use(express.static('./public/'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1/tasks', taskRouters)

app.listen(PORT, () => {console.log(`listening on port: ${PORT}...`)})