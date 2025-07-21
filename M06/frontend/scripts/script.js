//script


addEventListener("DOMContentLoaded",async function(){
const response = await fetch("http://localhost:3000/api/songs")
const songs = await response.json()
//console.log(JSON.stringify(songs))

let html = "";
for (let song of songs){
    let songID = song._id
    html+= `<li>${song.title} - ${song.artist}</li> - <a href="details.html?id=${songID}">Details</a>- <a href="edit.html?id=${songID}">Edit song</a>`


}
document.querySelector("ul").innerHTML = html
})