
// Connect to MongoDB database instance
const mongoose = require('mongoose')

// ---------- Async/await implemenatation --------------

// const connectDB = async () => {
//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser:true,
//             useUnifiedTopology:true,
//             useFindAndModify:false
//         })
//         console.log(`MongoDB Connected: ${conn.connection.host}`)

//     }catch(err){
//         console.log(err)
//         process.exit(1)
//     }
// }
    
// ---------- Promise implementation --------------

function connectDB() {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
    })
    .then(data => {
        console.log(`MongoDB Connected: ${data.connection.host}`)
    })
    .catch(err => {
        console.log(err)
        process.exit(1)
    })
}


module.exports = connectDB