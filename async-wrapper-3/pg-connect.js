const { Client } = require("pg");

async function connectDb() {
  try {
    const client = new Client();
    await client.connect();
    console.log("Database connected successfully");
    return client;
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
}

module.exports = connectDb;
