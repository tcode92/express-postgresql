const db = require("../../db");
class Playlist {
  static async getPlaylists() {
    const statment = `SELECT * FROM playlists;`;
    const result = await db.query(statment);
    return result.rows;
  }
}
module.exports = Playlist;
