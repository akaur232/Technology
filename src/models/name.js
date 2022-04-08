const mongoose = require("mongoose");
const Schema=mongoose.Schema;

let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const NameSchema= new Schema({
    name:{
        type: String,
        trim: true,
        minLength: 1,
        maxLength: 30,
        required:true
    },
    email:{
        type: String,
        trim: true,
        minLength: 1,
        maxLength: 60,
        required:true,
        validate: [validateEmail, 'Please fill a valid email address']
    },
    message:{
        type: String,
        trim: true,
        minLength: 0,
        maxLength: 100,
    },
    request: [{ type: Schema.Types.ObjectId, ref: 'request' }]
});

exports.name=mongoose.model('name',NameSchema);