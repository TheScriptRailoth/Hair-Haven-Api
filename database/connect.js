const mongoose = require('mongoose');
const { options } = require('../routes/available_barbers');


const connectDB = (uri)=>{
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports= connectDB;