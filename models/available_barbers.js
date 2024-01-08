const mongoose = require('mongoose');

const available_barbers_schema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "price must be provided"],
    },
    image: {
        type: String,
        required: true,
    }
});

module.exports= mongoose.model('Avalaible Barber', available_barbers_schema);