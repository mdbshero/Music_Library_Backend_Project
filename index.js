// Imports
const express = require("express");
const repoContext = require("./repository/repository-wrapper");
const songValidate = require('./middleware/song-validation')
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints
// http://localhost:5005 (BASE URL)

// GET songs
app.get("/api/songs", (req, res) => {
  const songs = repoContext.songs.findAllSongs();
  return res.send(songs);
});

// GET songs by ID
app.get("/api/songs/:id", (req, res) => {
  const id = req.params.id;
  const songs = repoContext.songs.findSongById(id);
  return res.send(songs);
});

//POST songs
app.post("/api/songs", [songValidate], (req, res) => {
  const newSong = req.body;
  const addedSong = repoContext.songs.createSong(newSong);
  return res.send(addedSong);
});

//Server Start
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`Server running! On PORT: ${PORT}`);
});
