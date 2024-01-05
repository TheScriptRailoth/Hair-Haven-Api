require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require('./database/connect');

const PORT =process.env.PORT||5000;

const available_barbers_routes= require("./routes/available_barbers");

app.get("/", (req, res)=>{
    res.send("Hi, I am live");
});

app.use("/api/available_barbers",available_barbers_routes);

const start = async()=>{
    try{
        await connectDB(process.env.MDB_url);
        app.listen(PORT, ()=>{
            console.log(PORT,'Yes I am connected');
        });
    } catch(error){
        console.log(error);
    }
}

start();