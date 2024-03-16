const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()

app.use(express.json)
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hi")
})
app.listen(8087,()=>{
    console.log("server is running")
})