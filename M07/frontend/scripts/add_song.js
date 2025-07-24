addEventListener("DOMContentLoaded",function(){
    this.document.querySelector("#addBtn").addEventListener("click",addSong)


})

async function addSong(){
    const song={
        title:document.querySelector("#title").value,
        artist:document.querySelector("#artist").value,
        popularity:document.querySelector("#popularity").value,
        releaseDate:document.querySelector("#released").value,
        genre:document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") :[],
        username:localStorage.getItem("uname")

 
    }
    const response = await fetch('https://sdev255-m06.onrender.com/api/songs',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)


    })
    if (response.ok){
        const results = await response.json()
        alert("Added Song to db with id of"+ results._id )

        document.querySelector("form").reset()
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot add song"
    }

}