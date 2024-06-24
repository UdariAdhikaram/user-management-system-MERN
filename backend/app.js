const express = require('express');
const app = express();
const cors = express('cors');

//midlware(to change req,res events or lifecycle)

app.use(cors());
app.use(
    express.urlencoded({
        extended: true,

// Middleware to handle URL-encoded bodies and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/users', (req,res) => {
    controller.getUsers(users => {
        res.send(users);
    })
);
app.use(express.json()); 

module.exports = app;