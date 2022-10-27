// dependencies
const express = require("express");
const cors = require("cors")
const courses = require('./Data/courses.json');
const questions = require('./Data/questionans.json');

// port
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send(courses)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const selectedCourse = courses.find(course => course.id === req.params.id);

    res.send(selectedCourse);
})
app.get('/premium/course/:id', (req, res) => {
    const selectedCourse = courses.find(course => course.id === req.params.id);

    res.send(selectedCourse);
})

app.get('/blog', (req, res) => {
    res.send(questions);
})

app.listen(port, () => {
    console.log("Listening to ", port);
})

