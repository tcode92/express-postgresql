const Playlist = require("./database");

async function playlistsHandler(req, res, next) {
  try {
    const playlists = await Playlist.getPlaylists();
    console.log("THIS IS ALL THE PLAYLISTS FOR A USER", playlists);
    return res.json(playlists);
  } catch (e) {
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
module.exports = playlistsHandler;
