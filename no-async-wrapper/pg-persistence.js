const { Client } = require("pg");

class Persistence {
  #client;
  #connected;
  constructor() {
    this.#client = new Client();
    this.#connected = false;
  }

  async #query(statment, values) {
    if (!this.#connected) {
      await this.#client.connect();
      this.#connected = true;
      console.log("Client connected");
    }
    return this.#client.query(statment, values);
  }

  // query for username and password for login
  async validateUser(username, password) {
    const statement = `SELECT * FROM users WHERE username = $1`;
    const values = [username];
    const result = await this.#query(statement, values);
    return result.rows;
  }

  // query to get all playlists
  async getPlaylists() {
    const statment = `SELECT * FROM playlists;`;
    const result = await this.#query(statment);
    return result.rows;
  }
}

module.exports = Persistence;
