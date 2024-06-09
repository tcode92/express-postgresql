const express = require("express");
const connectDb = require("./pg-connect.js");
const Persistence = require("./pg-persistence.js");

async function main() {
  // initialize the database connection
  const client = await connectDb();

  // initialize Persistence class
  const persistence = new Persistence(client);

  // create express app
  const app = express();

  // register express routes and middlewares
  app.post("/login", async (req, res, next) => {
    try {
      const user = await persistence.validateUser("username2", "jfkdfdl");
      console.log("THIS IS THE USER", user);
      return res.json(user);
    } catch (e) {
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  });

  app.get("/playlists", async (req, res, next) => {
    try {
      const playlists = await persistence.getPlaylists();
      console.log("THIS IS ALL THE PLAYLISTS FOR A USER", playlists);
      return res.json(playlists);
    } catch (e) {
      return res.status(500).json({
        error: "Internal server error",
      });
    }
  });

  // start express server
  app.listen(3000, () => {
    console.log("Nhanify server started on http://localhost:3000");
  });
}
main();
