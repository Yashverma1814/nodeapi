import express from "express";
import userRouter from "./routes/user.js"

export const app = express();


app.use(express.json())
app.use("/user",userRouter)




app.get("/",(req,res)=>{
    res.send("Nice working")
})

