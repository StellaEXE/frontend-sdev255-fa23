addEventListener("DOMContentLoaded", async function () {
    const urlparam = new URLSearchParams(this.window.location.search)
    const songID = urlparam.get('id')
    console.log(songID)

    const response = await fetch("https://localhost:3000/api/songs/" + songID)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += `${song.title}`
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html += `
        <h3>Artist - ${song.artist} </h3>
        <p>Popularity - ${song.popularity} </p>
        <p>Release Date - ${song.releaseDate} </p>
    `
    this.document.querySelector("div").innerHTML = html
})