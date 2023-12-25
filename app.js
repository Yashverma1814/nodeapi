import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";

export const app = express();

config({
    path:"./data/config.env"
})

app.use(express.json())
app.use("/api/v1/user",userRouter)
app.use("/api/v1/task",taskRouter)
app.use(cookieParser())




app.get("/",(req,res)=>{
    res.send("Nice working")
})

