const fs = require('fs');
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')

const database = JSON.parse(fs.readFileSync('./database.json'));

const app = express()
app.use(cors())


const root = {
    getData: () => {
        return database
    },
}


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})