//setup.

const expres = require("express")
var cors= require('cors')


const app = expres()
app.use(cors())
const router = expres.Router()

//start the web server


router.get("/songs",function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    const song =[
        {
        title:"Uptown funk",
        artist: "Bruno mars",
        populatirt: 10,
        genre: ["funk","boogie"],
    },{
       title:"Super Uptown funk",
        artist: "Saturn",
        populatirt: 10,
        genre: ["funky","woogie"], 
    }
]
    res.json(song)

})

app.use("/api",router)
app.listen(3000)