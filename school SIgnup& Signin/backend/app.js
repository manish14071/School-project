import dotenv  from "dotenv";
import  Express  from "express";
import ejs from "ejs";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDb } from "./DataBase/Connection.js";
import router from "./routers/mainrute.js";
const app=Express();
dotenv.config({path:'./config/config.env'});
const PORT=process.env.PORT || 3000;

app.use(cors());


app.use(
    bodyParser.json({
        limit:"30mb",
        extended:true,
    })
);
app.use(bodyParser.urlencoded({extended:false}));


connectDb();//database connection

app.use("/",router)//main route 






app.listen(PORT,()=>{
    console.log(`server is running on localhost: ${PORT}`)
});