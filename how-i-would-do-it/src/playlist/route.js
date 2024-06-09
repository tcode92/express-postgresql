const express = require("express");
const playlistsHandler = require("./playlistsHandler");

const route = express.Router();

route.get("/playlists", playlistsHandler);

const playlistRoute = route;
module.exports = playlistRoute;
