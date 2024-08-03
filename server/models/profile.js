const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    
    },
    description:{
        type: String,
        required: true,
  
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