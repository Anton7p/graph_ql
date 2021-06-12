const {buildSchema} = require('graphql')

module.exports = buildSchema(`
   
    type Data {
        title: String,
        by: String,
        id: Int,
        img: String,
        exclude: Boolean
    }   
    
    type Query {
        getData: [Data]
    }
    
`)



