// dependencies
const express = require("express");
const cors = require("cors")
const courses = require('./Data/courses.json');

// port
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log("Listening to ", port);
})