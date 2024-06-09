const { Pool } = require("pg");

/**@global @type {Pool} */
let _db;
function dbConnect() {
  const dbPool = new Pool();
  _db = dbPool;
  return _db;
}

const db = _db || dbConnect();

module.exports = db;
