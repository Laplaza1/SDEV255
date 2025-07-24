const { type } = require("os")
const db = require("../db")
const { model } = require("mongoose")

const User = db.model("User",{

    username:{type:String,required:true},
    password:{type:String,required:true},
    status:String
})

module.exports = User