const express = require('express');
const Router = express.Router();
const { connectToDatabase } = require('../connection');

Router.get("/", async (req, res) => {
    try {
        const mysqlConnection = await connectToDatabase();
        const [rows, fields] = await mysqlConnection.execute("SELECT * FROM people");
        await mysqlConnection.end();  // Close the connection after executing the query
        res.send(rows);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
});

module.exports = Router;