const express = require("express")

var cors = require('cors')


const bodyParser = require('body-parser')
const Song = require('./models/song')
const app = express()
const router = express.Router()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


router.get("/songs",async(req,res)=>{
    
    try{
        
        const songs = await Song.find({})
        res.send(songs)
        console.log(songs)
        }catch(err){
            console.log(err)
        }}
    )
router.get("/songs/:id", async (req,res)=>{
    try{
        console.log(req.params.id)
       const song = await Song.findById(req.params.id)
       
       res.json(song)
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post("/songs",async(req,res)=>{
    try{
        const song = await new Song(req.body)
        await song.save()
        console.log(song)
        res.status(201).json
    }
    catch(err){
        res.status(400).send(err)

    }
})    

router.put("/:id",async(req,res)=>{
    try{
        const song = req.body
        await Song.updateOne({_id:req.params.id},song)
        console.log(song)
        res.sendStatus(204)

    }catch(err){
        res.status(400).send(err)
    }

})


app.use("/api",router)
app.listen(3000)