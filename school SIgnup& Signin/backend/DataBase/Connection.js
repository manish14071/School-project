 import dotenv from "dotenv"
import  Express  from "express";
Express()
dotenv.config({path:'./config/config.env'});
 import mongoose from "mongoose";


 export const  connectDb=async()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongodb connected:${connect.connection.host}`);
    } catch (err) {
        console.log(`Error:${err.message}`.red);
        
    }
}
 