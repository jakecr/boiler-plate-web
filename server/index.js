require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
require('./db/mongoose')
const userRouter = require('./routers/user')
const exampleRouter = require('./routers/example')
const cors = require('cors')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

// Old bug fix, may need to be removed eventually
app.use(cors())

app.use(userRouter)
app.use(exampleRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is up on port ${process.env.PORT}`)
})