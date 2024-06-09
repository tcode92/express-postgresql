const client = require("./pg-connect");
class Persistence {
  // query for username and password for login
  async validateUser(username, password) {
    const statement = `SELECT * FROM users WHERE username = $1`;
    const values = [username];
    const result = await client.query(statement, values);
    return result.rows;
  }

  // query to get all playlists
  async getPlaylists() {
    const statment = `SELECT * FROM playlists;`;
    const result = await client.query(statment);
    return result.rows;
  }
}

module.exports = Persistence;
