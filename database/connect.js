const mongoose = require('mongoose');
const { options } = require('../routes/available_barbers');


 uri="mongodb+srv://TheScriptRailoth:EBH9Pg5An8Tdsw0h@cluster0.nwsxm1j.mongodb.net/?retryWrites=true&w=majority";

const connectDB = ()=>{
    return mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    });
}

module.exports= connectDB;