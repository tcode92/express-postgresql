const express = require("express");
const { createServer } = require("http");

const authRoute = require("./src/auth/route");
const playlistRoute = require("./src/playlist/route");

function startServer() {
  const app = express();

  // global middleware for all routes

  // register all routes
  app.use(authRoute);
  app.use(playlistRoute);

  // start listning to new connections
  const server = createServer(app);
  server.listen(3000, () => {
    console.log("🎵 Nhanify music ready to rock on http://localhost:3000 🎵");
  });
  return server;
}

module.exports = startServer;
