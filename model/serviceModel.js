const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    url:{
        type: String,
        required: [true, 'You must have to enter the server Name']
    },
    status:{
        type: Number,
        required: [true, 'Please enter the value either server is online or offline']
    },
    priority:{
        type: Number,
        required: [true, 'Please enter the server priority']
    } 
});

const Server_Test = mongoose.model("Server_Test", userSchema);

module.exports = Server_Test;