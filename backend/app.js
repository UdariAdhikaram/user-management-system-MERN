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

app.post('/createuser', (req,res) =>{
    controller.addUser(req.body, (callack) => {
        res.send();
    });
});

app.post('/updateuser', (req,res) =>{
    controller.updateUser(req.body, (callack) => {
        res.send(callack);
    });
});

app.post('/deleteuser', (req,res) =>{
    controller.deleteUser(req.body, (callack) => {
        res.send(callack);
    });
});

module.exports = app;
