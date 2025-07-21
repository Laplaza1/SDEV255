const { type } = require("os")
const db = require("../db")
const { model } = require("mongoose")

const Song = db.model("Song",{

    title:{type:String,required:true},
    artist:String,
    popularity:{type:Number,min:1,Max:10},
    releaseDate:{type:Date, default:Date.now},
    genre:[String]
})

module.exports = Song