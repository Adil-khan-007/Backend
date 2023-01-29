const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async (req,res)=>{
    return mongoose.connect(process.env.MONGODB)
}

module.exports = connectDatabase;