const mongoose = require('mongoose')
const {MONGO_USER, MONGO_PASSWORD, MONGO_NAME} = process.env

const options={
    dbName: MONGO_NAME
}
mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@ftbc7.ceccyov.mongodb.net/?retryWrites=true&w=majority`, options)

console.log(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@ftbc7.ceccyov.mongodb.net/?retryWrites=true&w=majority`)

const db = mongoose.connection

db.on('error', (err) =>{
    console.log(`connection error: ${err}`)
})

db.once('open',  ()=>{
    console.log('mongodb connected')
})