require("dotenv").config();
const connectDB = require("./database/connect");
const available_barbers = require("./models/available_barbers");

const AvalaibleBarbersJson = require("./availableBarbers.json");
const start = async()=>{
    try{
        await connectDB(process.env.MDB_url);
        await available_barbers.create(AvalaibleBarbersJson);
        console.log("success");
    }catch(error){
        console.log(error);
    }
}