// Imports
const express = require("express");
const repoContext = require("./repository/repository-wrapper")
const app = express();

// Middleware
app.use(express.json());

// Endpoints
// http://localhost:5005 (BASE URL)

// GET songs
app.get("/api/songs", (req, res) => {
    const songs = repoContext.songs.findAllSongs();
    return res.send(songs);
})

// GET songs by ID
app.get("/api/songs/:id", (req,res) => {
    const id= req.params.id;
    const songs = repoContext.songs.findSongById(id);
    return res.send(songs);
})

//Server Start
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server running! On PORT: ${PORT}`);
});