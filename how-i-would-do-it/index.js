const db = require("./db");
const startServer = require("./server");

function main() {
  // i use pool, i don't need to await the client to connect.
  // the pool will do it for me. but if i had to use client
  // i would turn this function into an async function
  // and start the client here and pass it to the server.
  // const db = await connectDb()
  // startServer(db)

  // start express server and return it to be abel to handle
  // graceful shutdown

  const server = startServer();

  // SIGINT is ctrl+c
  process.on("SIGINT", () => gracefulShutdown(server));
  // SIGTERM is kill <pid> or kill -SIGTERM <pid>
  process.on("SIGTERM", () => gracefulShutdown(server));
  // also nodemon send SIGUSR2 to restart on files changed
  // process.on("SIGUSR2", () => gracefulShutdown(server));

}

main();

function gracefulShutdown(server) {
  // stop accepting any new connection to the express server
  // and wait until all requests are serverd.
  server.close(async () => {
    // close database connection
    await db.end();
    // be funny
    console.log(
      "🎵 I know it's hard without me, music will be back soon, stay tuned 🎵"
    );
    // exit
    process.exit(0);
  });
}
