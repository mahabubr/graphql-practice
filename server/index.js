require('dotenv').config()
const colors = require('colors')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')

const connectDB = require('./config/db')



// connect to database

connectDB()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))


app.listen(port, console.log(`Server Running on PORT ${port}`))