const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    gender : String,
    age : Number,
    password : String,
},
{
    timestamps : true,
    versionKey : false
})

const UserModel = mongoose.model("User",UserSchema);

module.exports = UserModel;