let mongoose = require('mongoose');

let mongoDB=`mongodb+srv://arsh:QvRJfMo9htzDNPo3@cluster0.oaihm.mongodb.net/API?retryWrites=true&w=majority`;

mongoose.connect(mongoDB);

const db=mongoose.connection;
exports.db = db;