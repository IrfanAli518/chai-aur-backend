import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
import { app } from "./app.js";
// const PORT = process.env.PORT || 3000
dotenv.config({
    path:"./env"
})

connectDB()
.then(() => {
app.listen(process.env.PORT || 3000,() => {
  console.log(`Example app listening on port ${process.env.PORT}`);
})
})
.catch((error) => {
        console.log("Mongo Db Connection failed",error)
})

app.get('/', (req, res) => {
  res.send("Hello listen to me carefully")
})

app.get("/admin", (req,res) => {
    res.send("Hello I am a admin")
})
app.get("/teacher", (req, res) => {
    res.send("Hello I am a teacher")
})



// app.listen(process.env.PORT || 300, () => {
//     console.log(`Example app listening on port ${process.env.PORT || 3000}`)
// })


/*
import express from "express";
const app = express()
( async() => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
       app.on("error",(error) => {
        console.log("ERROR",error);
        throw error
       })
       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`); 
       })
    }catch(error) {
        console.error("ERROR",error)
        throw err
    }
})()
    */