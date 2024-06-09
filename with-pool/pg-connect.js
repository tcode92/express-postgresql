const { Pool } = require("pg");

/**@global @type {Pool} */
var _client;
function dbConnect() {
  const client = new Pool();
  _client = client;
  return _client;
}

const client = _client || dbConnect();

module.exports = client;
