const express=require('express');
const cors=require('cors');
const { connection } = require("./config/db");
const {userRouter} = require("./route/userRoute")

require('dotenv').config();
const app=express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("Server is Working.....")
})
app.use('/user',userRouter);

app.listen(3000,async()=>{
    try {
        await connection;
        console.log('Connected to db');
    } catch (error) {
        console.log('Error while connecting to DB');
    } 
    console.log("Server Running on port 3000");
})
