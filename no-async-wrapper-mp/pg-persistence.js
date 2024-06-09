const { Client } = require("pg");

class Persistence {
  #client;
  #connected;
  constructor() {
    this.#client = new Client();

    // here we override the original function (this is called Monkey patching)
    // of pg client client.query to check for
    // the connection and connect if not already connected.

    // i want to point out this is not a best practice solution.
    // but it's a valid javascript, you can do it.

    let originalQuery = this.#client.query;
    this.#client.query = async (...args) => {
      if (!this.#connected) {
        await this.#client.connect();
        this.#connected = true;
        console.log("Client connected");
      }
      return originalQuery.apply(this.#client, args);
    };
  }

  // query for username and password for login
  async validateUser(username, password) {
    const statement = `SELECT * FROM users WHERE username = $1`;
    const values = [username];
    const result = await this.#client.query(statement, values);
    return result.rows;
  }

  // query to get all playlists
  async getPlaylists() {
    const statment = `SELECT * FROM playlists;`;
    const result = await this.#client.query(statment);
    return result.rows;
  }
}

module.exports = Persistence;
