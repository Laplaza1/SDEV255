addEventListener("DOMContentLoaded",async function(){
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get("id")

    const response = await fetch("https://sdev255-m06.onrender.com/api/songs/"+songID)
    const song = await response.json()

    let heading = ""
    heading += `Welcome to the ${song.title} page`
    document.querySelector('h1').innerHTML = heading

    let html = ""
    html += `

    <h2>Title - ${song.title}</h2>
    <h3>Artist - ${song.artist}</h3>
    <p>Popularity - ${song.popularity}</p>
    <p>release Date - ${song.releaseDate}</p>
    
    `

    this.document.querySelector("div").innerHTML = html
})