const db = require("../../db");
class Auth {
  static async validateUser(username, password) {
    const statement = `SELECT * FROM users WHERE username = $1`;
    const values = [username];
    const result = await db.query(statement, values);

    return result.rows;
  }
}
module.exports = Auth;
