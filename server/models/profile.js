const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength:50
    },
    description:{
        type: String,
        required: true,
        maxLength:200
    },
    image:{
        type: String,
        // required: true
    },
    video:{
        type: String,
        // required: true
    }
})

module.exports = mongoose.model('Profile', profileSchema);