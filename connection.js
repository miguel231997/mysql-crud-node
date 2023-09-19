const mysql = require('mysql2/promise');

async function connectToDatabase() {
    try {
      const connection = await mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "Miguel",
        multipleStatements: true
      });
  
      return connection;
    } catch (error) {
      console.error("Error connecting to the database:", error.message);
      throw error;
    }
  }

module.exports = { connectToDatabase };