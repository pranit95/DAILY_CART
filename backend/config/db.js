require("dotenv").config()
const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("MongoDb connection success")
    }catch(error){
        console.log("MongoDB connection fail")
        process.exit(1) //exit our server
    }
}


module.exports  =  connectDB