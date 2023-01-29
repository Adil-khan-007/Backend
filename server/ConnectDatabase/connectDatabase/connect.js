const mongoose = require("mongoose");

const connectDatabase = async (req,res)=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/full-stack-app")
}

module.exports = connectDatabase;