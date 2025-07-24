const express = require("express")

var cors = require('cors')


const bodyParser = require('body-parser')
const Song = require('./models/song')
const User = require("./models/users")
const jwt = require("jwt-simple")
const app = express()
const router = express.Router()
const secret = "supersecret"


app.use(cors())
app.use(express.json())
app.use(bodyParser.json())





router.post("/user",async(req,res)=>{

    if(!req.body.username || !req.body.password){
        res.status(400).json({error:"Missing username or password"})
    }

    const newUser = new User({
        username:req.body.username,
        password:req.body.password,
        status:req.body.status
    })
    try
    {
        await newUser.save()
        res.sendStatus(201)
    }
    catch(err)
    {
        res.status(500).send(err)
    }

})


router.post("/auth",async(req,res)=>
    {
        try
            {
                if(!req.body.username || !req.body.password)
                    {
                        res.status(400).json({error:"Missing username or password"})
                        return
                    }
                console.log("Starting await User findOne")
                const user = await User.findOne({username: req.body.username})
                    if (user)
                        {
                            console.log(user)
                            if (!user)
                                {
                                res.status(401).json({error:"Bad Username"})
                                }
                            else
                                {
                                    if (user.password != req.body.password)
                                    {
                                    res.status(401).json({error:"Bad Password"})
                                    }
                                    else
                                    {

                                        username2 = user.username
                                        const token = jwt.encode({username: user.username},secret)
                                        const auth =1

                                        res.status(200).json(
                                            {
                                                username2,
                                                token:token,
                                                auth:auth
                                            })
                                    }   
                                }
                        }
            }   
    catch(err){res.send(err)}})

router.get("/status",async(req,res)=>{
    if(!req.headers["x-auth"]){
        return res.status(401).json({error:"Missing X-Auth"})
    }

    const token = req.headers["x-auth"]
    try{
        const decoded = jwt.decode(token,secret)

        let users = User.find({},"username staus")
        res.json(users)
    }catch(ex){
        res.status(401).json({error:"invalid jwt"})
    }
})


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

router.delete("/songs/:id",async(req,res)=>{
    try{

        const song = await Song.findById(req.params.id)
        await Song.deleteOne({_id:song.__id})
        res.sendStatus(204)}
    catch(err)
    {
        console.log(err)
        res.status(400).send(err)
    }

})


var port = process.env.PORT || 3000
app.use("/api",router)
app.listen(port)