const mongoose = require('mongoose');

require('dotenv').config();

const dbconnect = async () =>{
    try{
        await mongoose.connect(process.env.dataBaseUrl)
        console.log('Database connected successfully');
        
    }catch(err){
        console.log('error in connect database');
        console.error(err)
        process.exit(1);
    }
}

module.exports = {dbconnect}