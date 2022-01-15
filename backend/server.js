require("dotenv").config();
const express = require('express');
const path  = require('path')
const connectDB = require("./config/db")
const productRoutes = require("./routes/productRoutes")
const cors = require('cors')

connectDB();

const app = express()
app.use(cors())
app.use(express.json())

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"../frontend/build"))) 
    
    app.get('*',(req,res) => {
            res.sendFile(path.join(__dirname,"../frontend","build"))
    })
}else{
    app.get('/',(req,res) => {
        res.send("Api is running")
    })
}

app.use("/api/products",productRoutes)
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

