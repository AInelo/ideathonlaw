/* CONSTANT OF SERVEUR*/
const express = require('express');
require('dotenv').config();

const path = require("path");

let initial_path = path.join(__dirname, 'frontend');

const app = express();




/* ROUTES USING */
app.use(express.static(initial_path));

//const port = process.env.PORT;
const port = 5000;
const ipAddress = "192.168.1.247";

app.listen(port,  () => {
    console.log(`The server is running on: http://localhost:${port}`)
})