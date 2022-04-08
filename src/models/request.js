const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const RequestSchema= new Schema({
    email:{
        type: String,
        trim: true,
        minLength: 1,
        maxLength: 60,
        required:true
    },
    statement:[{
        type: String,
        trim: true,
        minLength: 1,
        maxLength: 100
    }]
});

exports.request=mongoose.model('request',RequestSchema);