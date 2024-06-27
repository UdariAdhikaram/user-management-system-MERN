const express = require('express');
const cors = require('cors');
const app = express();
const controller = require('./controller');

// Middleware to handle CORS
app.use(cors());

// Middleware to handle URL-encoded bodies and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/users', (req,res) => {
    controller.getUsers((req, res, next) => {
        res.send();
    })

});

app.get('/user', (req,res) =>{

    controller.getUserById(id, user => {
        res.send(user);
    });
});

app.get('/user', (req,res) =>{
    const name = req.query.name;
    controller.getUserByName(name, user =>{
        res.send(user);
    });
});

module.exports = app;
